import React, { memo } from "react";
import { FooterWrapper } from "./style";
import IconMoreArrow from "@/assets/svg/icon-more-arrow";
import { useNavigate } from "react-router-dom";

const SectionFooter = memo((props) => {
  const { name } = props;

  let showMessage = "显示全部";
  name ? (showMessage = `显示更多${name}房源`) : "";

  const navigate = useNavigate();
  function moreClick() {
    navigate("/entire");
  }
  return (
    <FooterWrapper $color={name ? "#00848a" : "#000"}>
      <div className="info" onClick={moreClick}>
        <span className="text">{showMessage}</span>
        <span className="icon">
          <IconMoreArrow></IconMoreArrow>
        </span>
      </div>
    </FooterWrapper>
  );
});

export default SectionFooter;
