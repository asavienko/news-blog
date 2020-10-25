import ArticleList from "../components/ArticleList";
import Article from "../components/Article";
import Login from "../components/Login";

const routs = [
  { component: ArticleList, path: "/", exact: true },
  { component: Article, path: "/:id" },
  { component: Login, path: "/login" },
];

export default routs;
