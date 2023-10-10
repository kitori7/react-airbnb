import React, { memo, useState } from "react";
import { FilterWrapper } from "./style";
import filterData from "@/assets/data/filter_data.json";
import classNames from "classnames";
const EntireFilter = memo(() => {
  const [selectItems, setSelectItems] = useState([]);
  function itemClick(item) {
    const newSelectItems = [...selectItems];
    if (newSelectItems.includes(item)) {
      const itemIndex = newSelectItems.indexOf(item);
      newSelectItems.splice(itemIndex, 1);
    } else {
      newSelectItems.push(item);
    }
    setSelectItems(newSelectItems);
  }
  return (
    <FilterWrapper>
      <div className="filter">
        {filterData.map((item) => {
          return (
            <div
              className={classNames("item", {
                active: selectItems.includes(item),
              })}
              key={item}
              onClick={(e) => itemClick(item)}
            >
              {item}
            </div>
          );
        })}
      </div>
    </FilterWrapper>
  );
});

export default EntireFilter;
