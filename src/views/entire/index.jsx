import React, { memo } from 'react'
import { EntireWrapper } from "./style";
const Entire = memo(() => {
  return (
    <EntireWrapper>
      <div className="filter"></div>
      <div className="rooms"></div>
      <div className="pagination"></div>
    </EntireWrapper>
  );
});

export default Entire