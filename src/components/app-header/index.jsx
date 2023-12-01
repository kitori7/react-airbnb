import React, { memo } from "react";
import { HeaderWrapper, SearchAreaWrapper } from "./style";
import HeaderLeft from "./cpns/header-left";
import HeaderCenter from "./cpns/header-center";
import HeaderRight from "./cpns/header-right";
import { shallowEqual, useSelector } from "react-redux";
import classNames from "classnames";
import { useState } from "react";
import useScrollPosition from "@/hooks/useScrollPosition";
import { useRef } from "react";
import { ThemeProvider } from "styled-components";
const AppHeader = memo(() => {
  // 从redux获取数据
  const { headerConfig } = useSelector(
    (state) => ({
      headerConfig: state.main.headerConfig,
    }),
    shallowEqual
  );

  // 搜索状态
  const [isSearch, setIsSearch] = useState(false);
  const { isFixed, topAlpha } = headerConfig;

  // 监听滚动
  const { scrollY } = useScrollPosition();
  const prevY = useRef(0);
  if (!isSearch) prevY.current = scrollY;
  if (isSearch && Math.abs(scrollY - prevY.current) > 30) setIsSearch(false);

  // 顶部透明度逻辑
  const isAlpha = topAlpha && scrollY === 0;

  return (
    <ThemeProvider theme={{ isAlpha }}>
      <HeaderWrapper className={classNames({ fixed: isFixed })}>
        <div className="content">
          <div className="top">
            <HeaderLeft />
            <HeaderCenter
              isSearch={isAlpha || isSearch}
              searchBarClick={(e) => setIsSearch(true)}
            />
            <HeaderRight />
          </div>
          <SearchAreaWrapper $isSearch={isSearch}></SearchAreaWrapper>
        </div>
        {isSearch && (
          <div className="cover" onClick={(e) => setIsSearch(false)}></div>
        )}
      </HeaderWrapper>
    </ThemeProvider>
  );
});

export default AppHeader;
