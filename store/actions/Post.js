import axios from "../../axios-instance/axios-news";

export const GET_DATA = "GET_DATA";
export const ADD_DATA = "ADD_DATA";

export const addData = () => {
  return { type: ADD_DATA };
}

export const getData = () => {
  return async (dispatch, getState) => {
    try {
      axios
        .get(
          `/articlesearch.json?page=${getState().posts.nbOfPage}&api-key=HGRCOa4NsS37U9rE0JxNGshoILCbekI5`
        )
        .then((res) => {
          dispatch({ type: GET_DATA, data: res.data.response.docs });
        });
    } catch (err) {
      throw new Error(err.message);
    }
  };
};
