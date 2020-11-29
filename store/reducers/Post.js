import Post from "../../models/Post";

import { GET_DATA, ADD_DATA, GET_ITEM } from "../actions/Post";

const initialState = {
  newsFeed: [],
  nbOfPage: 0,
  newItem: {}
};
const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      let data = [];
      action.data.forEach((el, index) => {
        let item = new Post(
          el._id,
          el.headline.main,
          el.multimedia[5],
          el.abstract,
          el.document_type,
          el.web_url
        );
        data.push(item);
      });

      return {
        ...state,
        newsFeed: state.newsFeed.concat(data),
      };

    case ADD_DATA:
      return {
        ...state,
        nbOfPage: state.nbOfPage + 1,
      };

      case GET_ITEM:
        const index = state.newsFeed.findIndex((it) => it.id === action.id);
        return {
          ...state,
          newItem: state.newsFeed[index]
        };
    default:
      return state;
  }
};

export default postReducer;
