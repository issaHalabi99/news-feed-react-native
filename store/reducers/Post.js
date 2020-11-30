import Post from "../../models/Post";

import { GET_DATA, ADD_DATA, IS_SEARCH, INPUT_VALUE } from "../actions/Post";

const initialState = {
  newsFeed: [],
  nbOfPage: 0,
  isSearch: false,
  inputValue: "",
};
const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      let data = [];
      action.data.forEach((el, index) => {
        let item = new Post(
          el._id+Math.random(),
          el.headline.main,
          el.multimedia[5],
          el.abstract,
          el.document_type,
          el.web_url
        );
        data.push(item);
      });

      if (state.isSearch) {
        state.newsFeed = [];
      }

      return {
        ...state,
        isSearch: false,
        newsFeed: state.newsFeed.concat(data),
      };

    case ADD_DATA:
      return {
        ...state,
        nbOfPage: state.nbOfPage + 1,
      };

    case IS_SEARCH:
      return {
        ...state,
        isSearch: action.isSearch,
      };

    case INPUT_VALUE:
      return {
        ...state,
        inputValue: action.value,
      };
    default:
      return state;
  }
};

export default postReducer;
