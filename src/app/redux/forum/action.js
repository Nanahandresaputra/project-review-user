import { createForum, getDetailForum, getListFroum } from "../../api/api";
import { GET_LIST_FORUM, GET_DETAIL_FORUM, CREATE_FORUM } from "./constant";

export const getForumList = () => {
  return (dispatch) => {
    getListFroum().then((res) =>
      dispatch({
        type: GET_LIST_FORUM,
        payload: res.data,
      })
    );
  };
};

export const detailForum = () => {
  return (dispatch) => {
    getDetailForum().then((res) =>
      dispatch({
        type: GET_DETAIL_FORUM,
        payload: res.data,
      })
    );
  };
};

export const addForum = (data) => {
  return (dispatch) => {
    createForum(data).then((res) =>
      dispatch({
        type: CREATE_FORUM,
        payload: res.data,
      })
    );
  };
};
