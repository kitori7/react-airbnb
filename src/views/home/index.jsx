import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { HomeWrapper } from "./style";
import HomeBanner from "./cpns/home-banner";
import RoomItem from "@/components/room-item";
import SectionHeader from "@/components/section-header";
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
          <ul className="room-list">
            {goodPriceInfo.list?.slice(0, 8).map((item) => {
              return <RoomItem key={item.id} itemData={item}></RoomItem>;
            })}
          </ul>
        </div>
      </div>
    </HomeWrapper>
  );
});

export default Home;
