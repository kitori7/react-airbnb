import React, { memo } from "react";
import { useSelector } from "react-redux";
import { DetailWrapper } from "./style";
import DetailPictures from "./cpns/detail-pictures";
import DetailInfos from "./cpns/detail-infos";

const Detail = memo(() => {
  return (
    <DetailWrapper>
      <DetailPictures></DetailPictures>
      <DetailInfos></DetailInfos>
    </DetailWrapper>
  );
});

export default Detail;
