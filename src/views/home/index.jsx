import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { HomeWrapper } from "./style";
import HomeBanner from "./cpns/home-banner";
import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";
import { fetchHomeDataAction } from "@/store/modules/home";

const Home = memo(() => {
  const dispatch = useDispatch();

  // 发起请求
  useEffect(() => {
    dispatch(fetchHomeDataAction());
  }, [dispatch]);

  // 获取数据
  const goodPriceInfo = useSelector(
    (state) => state.home.goodPriceInfo,
    shallowEqual
  );

  return (
    <HomeWrapper>
      <HomeBanner></HomeBanner>
      <div className="content">
        <div className="good-price">
          <SectionHeader title={goodPriceInfo.title}></SectionHeader>
          <SectionRooms roomList={goodPriceInfo.list}></SectionRooms>
        </div>
      </div>
    </HomeWrapper>
  );
});

export default Home;
