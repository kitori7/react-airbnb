import React, { memo } from "react";
import { Rating } from "@mui/material";
import { ItemWrapper } from "./style";
const RoomItem = memo((props) => {
  const { itemData } = props;

  return (
    <ItemWrapper $verifyColor={itemData.verify_info.text_color}>
      <div className="inner">
        <div className="cover">
          <img src={itemData.picture_url} alt="" />
        </div>
        <div className="desc">{itemData.verify_info.messages?.join("、")}</div>
        <div className="name">{itemData.name}</div>
        <div className="price">￥{itemData.price}/晚</div>
        <Rating readOnly value={5} sx={{ fontSize: "12px" }}></Rating>
      </div>
    </ItemWrapper>
  );
});

export default RoomItem;
