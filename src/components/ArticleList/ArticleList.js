import React, { useContext, useState } from "react";
import { Col, Row } from "antd";
import InfiniteScroll from "react-infinite-scroller";
import AppContext from "../../context/AppContext.js";
import SmallArticleCard from "../SmallArticleCard";

const ArticleList = () => {
  const { articleList } = useContext(AppContext);
  const [slice, setSlice] = useState(20);

  const loadFunc = () => {
    setSlice(slice + 20);
  };
  return (
    <InfiniteScroll
      styles={{ width: "100%" }}
      loadMore={loadFunc}
      hasMore={articleList.length > slice}
    >
      <Row gutter={[0, 16]}>
        {!!articleList.length &&
          articleList
            .slice(0, slice)
            .map(({ id, publicationDate, title, smallDescription }) => (
              <Col xs={24} sm={12} md={12} lg={8} xl={6} key={id}>
                <SmallArticleCard
                  id={id}
                  publicationDate={publicationDate}
                  title={title}
                  smallDescription={smallDescription}
                />
              </Col>
            ))}
      </Row>
    </InfiniteScroll>
  );
};

export default ArticleList;
