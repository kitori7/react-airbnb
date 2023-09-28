import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { HomeWrapper } from "./style";
import HomeBanner from "./cpns/home-banner";
import { fetchHomeDataAction } from "@/store/modules/home";
import HomeSectionV1 from "./cpns/home-section-v1";
import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";

const Home = memo(() => {
  const dispatch = useDispatch();

  // 发起请求
  useEffect(() => {
    dispatch(fetchHomeDataAction());
  }, [dispatch]);

  // 获取数据
  const { goodPriceInfo, highScoreInfo, discountInfo } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      discountInfo: state.home.discountInfo,
    }),
    shallowEqual
  );

  return (
    <HomeWrapper>
      <HomeBanner></HomeBanner>
      <div className="content">
        <div className="discount">
          <SectionHeader
            title={discountInfo.title}
            subtitle={discountInfo.subtitle}
          ></SectionHeader>
          <SectionRooms
            roomList={discountInfo.dest_list?.["成都"]}
            itemWidth="33.33%"
          ></SectionRooms>
        </div>
        <HomeSectionV1 infoData={goodPriceInfo}></HomeSectionV1>
        <HomeSectionV1 infoData={highScoreInfo}></HomeSectionV1>
      </div>
    </HomeWrapper>
  );
});

export default Home;
