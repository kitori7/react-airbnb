import React, { memo, useState, useEffect, useRef } from "react";
import { ViewWrapper } from "./style";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";

const index = memo((props) => {
  const [isShowRightBtn, setIsShowRightBtn] = useState(false);
  const [isShowLeftBtn, setIsShowLeftBtn] = useState(false);
  const [posIndex, setPosIndex] = useState(0);

  const totalDistanceRef = useRef();
  const scrollContentRef = useRef();
  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth;
    const clientWidth = scrollContentRef.current.clientWidth;
    const totalDistance = scrollWidth - clientWidth;
    totalDistanceRef.current = totalDistance;
    setIsShowRightBtn(totalDistance > 0);
  }, [props.children]);

  function controlClick(isRight) {
    const newIndex = isRight ? posIndex + 1 : posIndex - 1;
    const newEl = scrollContentRef.current.children[newIndex];
    const newOffsetLeft = newEl.offsetLeft;
    scrollContentRef.current.style.transform = `translate(-${newOffsetLeft}px)`;
    setPosIndex(newIndex);
    // 判断是否继续显示右边按钮
    setIsShowRightBtn(totalDistanceRef.current > newOffsetLeft);
    setIsShowLeftBtn(newOffsetLeft > 0);
  }

  return (
    <ViewWrapper>
      {isShowLeftBtn && (
        <div className="control left" onClick={(e) => controlClick(false)}>
          <IconArrowLeft></IconArrowLeft>
        </div>
      )}

      {isShowRightBtn && (
        <div className="control right" onClick={(e) => controlClick(true)}>
          <IconArrowRight></IconArrowRight>
        </div>
      )}
      <div className="scroll">
        <div className="scroll-content" ref={scrollContentRef}>
          {props.children}
        </div>
      </div>
    </ViewWrapper>
  );
});

export default index;
