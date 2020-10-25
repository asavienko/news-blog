import styled from "styled-components";
import { Layout } from "antd";

const { Content } = Layout;

export const StyledLayout = styled(Layout)`
  background: #f0f2f5;
  min-height: 100vh;
`;

export const StyledContent = styled(Content)`
  margin: 20px;

  padding: 20px;
  background: #fff;
`;
