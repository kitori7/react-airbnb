import React, { memo } from "react";
import RoomItem from "@/components/room-item";
import { RoomsWrapper } from "./style";

const SectionRooms = memo((props) => {
  const { roomList = [], itemWidth } = props;
  return (
    <RoomsWrapper className="room-list">
      {roomList.slice(0, 8).map((item) => {
        return (
          <RoomItem
            key={item.id}
            itemData={item}
            itemWidth={itemWidth}
          ></RoomItem>
        );
      })}
    </RoomsWrapper>
  );
});

export default SectionRooms;
