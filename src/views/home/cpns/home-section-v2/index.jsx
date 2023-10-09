import React, { memo, useCallback, useState } from "react";
import { SectionV2Wrapper } from "./style";
import SectionHeader from "@/components/section-header";
import SectionTabs from "@/components/section-tabs";
import SectionRooms from "@/components/section-rooms";
import SectionFooter from "@/components/section-footer";
const HomeSectionV2 = memo((props) => {
  const { infoData } = props;

  const initName = Object.keys(infoData.dest_list)[0];
  // 数据转换
  const [name, setName] = useState(initName);
  const tabNames = infoData.dest_address?.map((item) => item.name);

  // 传递事件
  const tabClick = useCallback(function (index, name) {
    setName(name);
  }, []);
  return (
    <SectionV2Wrapper>
      <div className="discount">
        <SectionHeader
          title={infoData.title}
          subtitle={infoData.subtitle}
        ></SectionHeader>
        <SectionTabs tabNames={tabNames} tabClick={tabClick}></SectionTabs>
        <SectionRooms
          roomList={infoData.dest_list?.[name]}
          itemWidth="33.33%"
        ></SectionRooms>
        <SectionFooter name={name}></SectionFooter>
      </div>
    </SectionV2Wrapper>
  );
});

export default HomeSectionV2;
