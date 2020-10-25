import styled from "styled-components";
import { Card } from "antd";

export const StyledTitle = styled.div`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  text-align: left;
`;

export const StyledDate = styled.div`
  text-align: left;
  font-size: 14px;
  color: #b0b3b8;
  margin: 10px 10px 0;
`;

export const StyledCard = styled(Card)`
  height: 100%;
  margin: 0 20px;
  display: flex;
  flex-direction: column;
  img {
    border-radius: 2px 2px 0 0;
    height: 350px;
    object-fit: cover;
  }
  .ant-card-actions {
    margin-top: auto;
    width: 100%;
  }
`;
