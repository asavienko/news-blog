import React from "react";
import { RollbackOutlined } from "@ant-design/icons";
import { useLocation, useHistory } from "react-router-dom";
import { StyledButton } from "./BackButton.styles.js";

const BackButton = () => {
  const { pathname } = useLocation();
  const history = useHistory();

  return (
    pathname !== "/" && (
      <StyledButton
        shape="circle"
        onClick={history.goBack}
        icon={<RollbackOutlined />}
      />
    )
  );
};

export default BackButton;
