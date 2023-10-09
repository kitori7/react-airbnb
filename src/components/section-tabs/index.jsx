import React, { memo, useState } from "react";
import { TabsWrapper } from "./style";
import ScrollView from "@/base-ui/scroll-view";
import classNames from "classnames";
const SectionTabs = memo((props) => {
  const { tabNames = [], tabClick } = props;

  const [currentIndex, setCurrentIndex] = useState(0);
  function itemClickHandle(index, item) {
    setCurrentIndex(index);
    tabClick(index, item);
  }
  return (
    <TabsWrapper>
      <ScrollView>
        {tabNames.map((item, index) => {
          return (
            <div
              className={classNames("item", { active: index === currentIndex })}
              key={item}
              onClick={(e) => itemClickHandle(index, item)}
            >
              {item}
            </div>
          );
        })}
      </ScrollView>
    </TabsWrapper>
  );
});

export default SectionTabs;
