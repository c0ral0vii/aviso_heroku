import { ItemsApi } from "../api/api";

const SET_NEWS = "SET_NEWS";
const SET_ARTICLES = "SET_ARTICLES";
const SET_ORDERS = "SET_ORDERS";
const SET_USERS = "SET_USERS";

let initialState = {
  news: [],
  articles: [],
  orders: [],
  users: [],
};

const getItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEWS:
      return {
        ...state,
        news: [...state.news, action.payload],
      };
    case SET_ARTICLES:
      return {
        ...state,
        articles: [...state.articles, action.payload],
      };
    case SET_ORDERS:
      return {
        ...state,
        orders: [...state.orders, action.payload],
      };
    case SET_USERS:
      return {
        ...state,
        orders: [...state.orders, action.payload],
      };

    default:
      return state;
  }
};

export const setNews = (payload) => {
  return {
    type: SET_NEWS,
    payload,
  };
};
export const setArticles = (payload) => {
  return {
    type: SET_ARTICLES,
    payload,
  };
};
export const setOrders = (payload) => {
  return {
    type: SET_ORDERS,
    payload,
  };
};
export const setUsers = (payload) => {
  return {
    type: SET_USERS,
    payload,
  };
};

export default getItemsReducer;
