import ArticleList from "../components/ArticleList";
import Article from "../components/Article";

const routs = [
  { component: ArticleList, path: "/", exact: true },
  { component: Article, path: "/:id", exact: true },
];

export default routs;
