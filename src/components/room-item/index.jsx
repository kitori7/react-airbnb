import React, { memo, useRef } from "react";
import { Rating } from "@mui/material";
import { Carousel } from "antd";
import { ItemWrapper } from "./style";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import Indicator from "@/base-ui/indicator";
import { useState } from "react";
import classNames from "classnames";
const RoomItem = memo((props) => {
  const { itemData, itemWidth = "25%", propItemClick } = props;
  function itemClick() {
    if (propItemClick) propItemClick(itemData);
  }

  const sliderRef = useRef();

  // 索引
  const [selectIndex, setSelectIndex] = useState(0);
  function controlClick(isRight = true) {
    isRight ? sliderRef.current.next() : sliderRef.current.prev();

    // 索引修改
    let newIndex = isRight ? selectIndex + 1 : selectIndex - 1;
    if (newIndex < 0) newIndex = itemData.picture_urls.length - 1;
    if (newIndex > itemData.picture_urls.length - 1) newIndex = 0;
    setSelectIndex(newIndex);
  }

  const pictureEl = (
    <div className="cover">
      <img src={itemData.picture_url} alt="" />
    </div>
  );

  const sliderEl = (
    <div className="slider">
      <div className="control">
        <div className="btn left" onClick={(e) => controlClick(false)}>
          <IconArrowLeft width={30} height={30}></IconArrowLeft>
        </div>
        <div className="btn right" onClick={(e) => controlClick(true)}>
          <IconArrowRight width={30} height={30}></IconArrowRight>
        </div>
      </div>
      <Carousel dots={false} ref={sliderRef}>
        {itemData.picture_urls?.map((item) => {
          return (
            <div className="cover" key={item}>
              <img src={item} alt="" />
            </div>
          );
        })}
      </Carousel>
      <div className="indicator">
        <Indicator selectIndex={selectIndex}>
          {itemData.picture_urls?.map((item, index) => {
            return (
              <span className="dot-item" key={item}>
                <span
                  className={classNames("dot", {
                    active: selectIndex === index,
                  })}
                ></span>
              </span>
            );
          })}
        </Indicator>
      </div>
    </div>
  );
  return (
    <ItemWrapper
      $verifyColor={itemData?.verify_info?.text_color || "#39576a"}
      $itemWidth={itemWidth}
      onClick={itemClick}
    >
      <div className="inner">
        {itemData.picture_urls ? sliderEl : pictureEl}
        <div className="desc">{itemData.verify_info.messages?.join("、")}</div>
        <div className="name">{itemData.name}</div>
        <div className="price">￥{itemData.price}/晚</div>
        <div className="bottom">
          <Rating
            readOnly
            precision={0.1}
            value={itemData.star_rating ?? 5}
            sx={{ fontSize: "12px", color: "#00848a" }}
          ></Rating>
          <span className="count">{itemData.reviews_count}</span>
          {itemData.bottom_info && (
            <span className="extra">·{itemData?.bottom_info?.content}</span>
          )}
        </div>
      </div>
    </ItemWrapper>
  );
});

export default RoomItem;
