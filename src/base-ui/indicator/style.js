import styled from "styled-components";

export const IndicatorWrapper = styled.div`
  overflow: hidden;

  button {
    border: 2px solid #000;
    padding: 2px;
  }
  .i-content {
    display: flex;
    position: relative;
    transition: transform 0.3s;
    > * {
      flex-shrink: 0;
    }
  }
`;
