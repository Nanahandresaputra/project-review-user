import { GET_DETAIL_FORUM, GET_LIST_FORUM } from "./constant";

let initialState = {
  forumList: [],
  forumDetail: {},
  close: false,
};

const forumReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_FORUM:
      return { ...state, forumList: action.payload };
    case GET_DETAIL_FORUM:
      return { ...state, forumDetail: action.payload };
      case 'close':
        return{ ...state, close: action.payload}
    default:
      return state;
  }
};

export default forumReducer;
