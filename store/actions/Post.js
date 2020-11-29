import axios from "../../axios-instance/axios-news";

export const GET_DATA = "GET_DATA";

export const getData = (_) => {
  return async (dispatch) => {
    try {
      axios
        .get(
          `/articlesearch.json?page=0&api-key=HGRCOa4NsS37U9rE0JxNGshoILCbekI5`
        )
        .then((res) => {
          dispatch({ type: GET_DATA, data: res.data.response.docs });
        });
    } catch (err) {
      throw new Error(err.message);
    }
  };
};
