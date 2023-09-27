import React, { memo } from "react";
import { SectionV1Wrapper } from "./style";
import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";
const HomeSectionV1 = memo((props) => {
  const { infoData } = props;

  return (
    <SectionV1Wrapper>
      <SectionHeader
        title={infoData.title}
        subtitle={infoData.subtitle}
      ></SectionHeader>
      <SectionRooms roomList={infoData.list}></SectionRooms>
    </SectionV1Wrapper>
  );
});

export default HomeSectionV1;
