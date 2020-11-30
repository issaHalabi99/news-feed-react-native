import axios from "../../axios-instance/axios-news";

export const GET_DATA = "GET_DATA";
export const ADD_DATA = "ADD_DATA";
export const IS_SEARCH = "IS_SEARCH";
export const INPUT_VALUE = "INPUT_VALUE";

export const getData = () => {
  return async (dispatch, getState) => {
    try {
      axios
        .get(
          `/articlesearch.json?q=${getState().posts.inputValue}&page=${
            getState().posts.nbOfPage
          }&api-key=HGRCOa4NsS37U9rE0JxNGshoILCbekI5`
        )
        .then((res) => {
          dispatch({ type: GET_DATA, data: res.data.response.docs });
        });
    } catch (err) {
      throw new Error(err.message);
    }
  };
};

export const addData = () => {
  return { type: ADD_DATA };
};

export const isSearch = (is) => {
  return { type: IS_SEARCH, isSearch: is };
};

export const valueHandler = (value) => {
  return { type: INPUT_VALUE, value: value };
};
