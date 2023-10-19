import React, { memo, useRef } from "react";
import { Rating } from "@mui/material";
import { Carousel } from "antd";
import { ItemWrapper } from "./style";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
const RoomItem = memo((props) => {
  const { itemData, itemWidth = "25%" } = props;

  const sliderRef = useRef();
  function controlClick(isRight = true) {
    isRight ? sliderRef.current.next() : sliderRef.current.prev();
  }
  return (
    <ItemWrapper
      $verifyColor={itemData?.verify_info?.text_color || "#39576a"}
      $itemWidth={itemWidth}
    >
      <div className="inner">
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
            {itemData?.picture_urls.map((item) => {
              return (
                <div className="cover" key={item}>
                  <img src={item} alt="" />
                </div>
              );
            })}
          </Carousel>
        </div>
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
