import React, { memo, useState, useEffect } from "react";
import { RightWrapper } from "./style";
import IconGlobal from "@/assets/svg/icon-global";
import IconProfileMenu from "@/assets/svg/icon-profile-menu";
import IconProfileAvatar from "@/assets/svg/icon-profile-avatar";

const HeaderRight = memo(() => {
  const [showPanel, setShowPanel] = useState(false);
  function profileHandle() {
    setShowPanel(true);
  }
  useEffect(() => {
    function windowHandleClick() {
      setShowPanel(false);
    }
    window.addEventListener("click", windowHandleClick, true);
    return () => {
      window.removeEventListener("click", windowHandleClick, true);
    };
  }, []);

  return (
    <RightWrapper>
      <div className="btns">
        <span className="btn">登录</span>
        <span className="btn">注册</span>
        <span className="btn">
          <IconGlobal></IconGlobal>
        </span>
      </div>
      <div className="profile" onClick={profileHandle}>
        <IconProfileMenu></IconProfileMenu>
        <IconProfileAvatar></IconProfileAvatar>

        {showPanel && (
          <div className="panel">
            <div className="top">
              <div className="item">注册</div>
              <div className="item">登录</div>
            </div>
            <div className="bottom">
              <div className="item">出租房源</div>
              <div className="item">开展体验</div>
              <div className="item">帮助</div>
            </div>
          </div>
        )}
      </div>
    </RightWrapper>
  );
});

export default HeaderRight;
