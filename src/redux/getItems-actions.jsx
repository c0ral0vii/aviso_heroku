import { ItemsApi } from "../api/api";
import { setArticles, setNews } from "./getItems-reducer";

export const getNewsAction = () => async (dispatch) => {
  try {
    const response = await ItemsApi.getNews();
    dispatch(setNews(response));
  } catch (error) {
    console.log(error);
  }
};

export const getArticlesAction = () => async (dispatch) => {
  try {
    const response = await ItemsApi.getArticles();
    dispatch(setArticles(response));
  } catch (error) {
    console.log(error);
  }
};
