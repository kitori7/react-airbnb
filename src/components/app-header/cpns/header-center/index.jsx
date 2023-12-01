import React, { memo } from "react";
import { CenterWrapper } from "./style";
import IconSearchBar from "@/assets/svg/icon-search-bar";
import SearchTabs from "./cpn/search-tabs";
import SearchTitles from "@/assets/data/search_titles";
import { useState } from "react";
import SearchSections from "./cpn/search-sections";
import { CSSTransition } from "react-transition-group";

const HeaderCenter = memo((props) => {
  const titles = SearchTitles.map((item) => item.title);
  const [tabIndex, setTabIndex] = useState(0);

  const { isSearch, searchBarClick } = props;
  function handleSearchBarClick() {
    searchBarClick ? searchBarClick() : "";
  }
  return (
    <CenterWrapper>
      <CSSTransition
        in={!isSearch}
        classNames="bar"
        timeout={250}
        unmountOnExit={true}
      >
        <div className="search-bar" onClick={handleSearchBarClick}>
          <div className="text">搜索房源和体验</div>
          <div className="icon">
            <IconSearchBar></IconSearchBar>
          </div>
        </div>
      </CSSTransition>
      <CSSTransition
        in={isSearch}
        classNames="detail"
        timeout={250}
        unmountOnExit={true}
      >
        <div className="search-detail">
          <SearchTabs titles={titles} tabClick={setTabIndex}></SearchTabs>
          <div className="infos">
            <SearchSections
              searchInfos={SearchTitles[tabIndex].searchInfos}
            ></SearchSections>
          </div>
        </div>
      </CSSTransition>
    </CenterWrapper>
  );
});

export default HeaderCenter;
