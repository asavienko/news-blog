import SmallArticleCard from "../components/SmallArticleCard";
import ArticleList from "../components/ArticleList";

const routs = [
  { component: ArticleList, path: "/", exact: true },
  { component: SmallArticleCard, path: "/:id", exact: true },
];

export default routs;
