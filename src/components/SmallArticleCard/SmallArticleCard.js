import React, { useEffect, useState } from "react";
import { Card, Skeleton, Tooltip } from "antd";
import { useHistory } from "react-router-dom";
import moment from "moment";
import PropTypes from "prop-types";
import { getRandomImage } from "../../requsts";
import {
  StyledCar,
  StyledDate,
  StyledTitle,
} from "./SmallArticleCard.styles.js";

const { Meta } = Card;

const SmallArticleCard = ({ id, publicationDate, title, smallDescription }) => {
  const [image, setImage] = useState("");
  const history = useHistory();

  useEffect(() => {
    getRandomImage().then(setImage);
  }, []);

  return (
    <StyledCar
      hoverable
      size="small"
      cover={
        <>{image ? <img alt="example" src={image} /> : <Skeleton.Image />}</>
      }
      onClick={() => history.push({ pathname: id, state: { image } })}
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
    </StyledCar>
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
