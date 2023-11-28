import React, { memo } from "react";
import { BrowserWrapper } from "./style";
import { useEffect } from "react";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import { useState } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import IconTriangleArrowBottom from "@/assets/svg/icon-triangle-arrow-bottom";
import Indicator from "../indicator";

const PictureBrowser = memo((props) => {
  const { pictureUrls, closeClick } = props;
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // 选中照片的索引
  const [currentIndex, setCurrentIndex] = useState(0);
  //  事件监听
  function closeBtnClickHandle() {
    if (closeClick) closeClick();
  }

  // 上下页
  const [isNext, setIsNext] = useState(true);
  function controlClick(isNext = true) {
    let newIndex = isNext ? currentIndex + 1 : currentIndex - 1;
    if (newIndex < 0) newIndex = pictureUrls.length - 1;
    if (newIndex > pictureUrls.length - 1) newIndex = 0;
    setCurrentIndex(newIndex);
    setIsNext(isNext);
  }
  return (
    <BrowserWrapper isNext={isNext}>
      <div className="top">
        <div className="close-btn" onClick={closeBtnClickHandle}>
          关闭
        </div>
      </div>
      <div className="slider">
        <div className="control">
          <div className="btn left" onClick={(e) => controlClick(false)}>
            <IconArrowLeft width="77" height="77"></IconArrowLeft>
          </div>
          <div className="btn right" onClick={(e) => controlClick(true)}>
            <IconArrowRight width="77" height="77"></IconArrowRight>
          </div>
        </div>
        <div className="picture">
          <SwitchTransition mode="in-out">
            <CSSTransition
              key={pictureUrls[currentIndex]}
              classNames="pic"
              timeout={200}
            >
              <img src={pictureUrls[currentIndex]} alt="" />
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
      <div className="preview">
        <div className="info">
          <div className="desc">
            <div className="count">
              <span>15/30:</span>
              <span>room apartment图片15</span>
            </div>
            <div className="toggle">
              <span>隐藏照片列表</span>
              <IconTriangleArrowBottom></IconTriangleArrowBottom>
            </div>
          </div>
          <div className="list">
            <Indicator selectIndex={currentIndex}>
              {pictureUrls.map((item) => {
                return (
                  <div className="item" key={item}>
                    <img src={item} alt="" />
                  </div>
                );
              })}
            </Indicator>
          </div>
        </div>
      </div>
    </BrowserWrapper>
  );
});

export default PictureBrowser;
