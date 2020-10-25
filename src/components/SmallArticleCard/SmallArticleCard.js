import React, { useContext, useEffect, useState } from "react";
import { Card, Skeleton, Tooltip } from "antd";
import { useHistory } from "react-router-dom";
import moment from "moment";
import PropTypes from "prop-types";
import { DeleteOutlined } from "@ant-design/icons";
import { getRandomImage } from "../../requsts";
import {
  StyledCard,
  StyledDate,
  StyledTitle,
} from "./SmallArticleCard.styles.js";
import AppContext from "../../context/AppContext.js";

const { Meta } = Card;

const SmallArticleCard = ({ id, publicationDate, title, smallDescription }) => {
  const [image, setImage] = useState("");
  const history = useHistory();
  const { admin, deleteArticle } = useContext(AppContext);

  useEffect(() => {
    getRandomImage().then(setImage);
  }, []);

  const onDelete = (e) => {
    e.stopPropagation();
    deleteArticle(id);
  };

  return (
    <StyledCard
      hoverable
      size="small"
      cover={
        <>{image ? <img alt="example" src={image} /> : <Skeleton.Image />}</>
      }
      onClick={() => history.push({ pathname: id, state: { image } })}
      actions={admin && [<DeleteOutlined key="delete" onClick={onDelete} />]}
    >
      <Meta
        title={
          <div>
            <Tooltip title={title}>
              <StyledTitle>{title}</StyledTitle>
            </Tooltip>
            <StyledDate>{moment(publicationDate).fromNow()}</StyledDate>
          </div>
        }
        description={smallDescription}
      />
    </StyledCard>
  );
};

SmallArticleCard.propTypes = {
  id: PropTypes.string,
  publicationDate: PropTypes.string,
  title: PropTypes.string,
  smallDescription: PropTypes.string,
};

SmallArticleCard.defaultProps = {
  id: "",
  publicationDate: "",
  title: "",
  smallDescription: "",
};

export default SmallArticleCard;
