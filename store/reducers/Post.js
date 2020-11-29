import Post from "../../models/Post";

import { GET_DATA } from "../actions/Post";

const initialState = {
  newsFeed: [],
};
const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      let data = [];
      action.data.forEach((el) => {
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
        newsFeed: state.newsFeed.concat(data)
      };

    default:
      return state;
  }
};

export default postReducer;
