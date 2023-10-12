import styled from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;

  .info {
    display: flex;
    flex-direction: column;
    align-items: center;

    .desc {
      margin-top: 16px;
      color: #222;
    }

    .MuiPaginationItem-page.Mui-selected {
      background-color: #000;
      color: #fff;
    }

    .MuiPaginationItem-icon {
      font-size: 24px;
    }

    .MuiPaginationItem-page {
      margin: 0 8px;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
