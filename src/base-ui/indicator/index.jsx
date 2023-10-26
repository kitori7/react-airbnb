import React, { memo } from "react";
import { IndicatorWrapper } from "./style";
import { useEffect } from "react";
import { useRef } from "react";

const Indicator = memo((props) => {
  const { selectIndex = 0 } = props;
  const contentRef = useRef();

  useEffect(() => {
    const selectItemEl = contentRef.current.children[selectIndex];
    const itemLeft = selectItemEl.offsetLeft;
    const itemWidth = selectItemEl.clientWidth;

    const contentWidth = contentRef.current.clientWidth;
    const contentScroll = contentRef.current.scrollWidth;
    // 计算移动距离
    let distance = itemLeft + itemWidth * 0.5 - contentWidth * 0.5;
    // 特殊情况处理
    if (distance < 0) distance = 0;
    const totalDistance = contentScroll - contentWidth;
    if (distance > totalDistance) distance = totalDistance;
    // 移动
    contentRef.current.style.transform = `translate(${-distance}px)`;
  }, [selectIndex]);
  return (
    <IndicatorWrapper>
      <div className="i-content" ref={contentRef}>
        {props.children}
      </div>
    </IndicatorWrapper>
  );
});

export default Indicator;
