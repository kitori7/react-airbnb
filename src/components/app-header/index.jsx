import React, { memo } from "react";
import { HeaderWrapper } from "./style";
import HeaderLeft from "./cpns/header-left";
import HeaderCenter from "./cpns/header-center";
import HeaderRight from "./cpns/header-right";
const AppHeader = memo(() => {
  return (
    <HeaderWrapper>
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </HeaderWrapper>
  );
});

export default AppHeader;
