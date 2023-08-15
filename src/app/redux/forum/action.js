import { createForum, deleteForum, getDetailForum, getListFroum } from "../../api/api";
import { GET_LIST_FORUM, GET_DETAIL_FORUM, CREATE_FORUM, REMOVE_FORUM } from "./constant";

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

export const removeForum = (id) => {
  return (dispatch) => {
    deleteForum(id).then((res) =>
      dispatch({
        type: REMOVE_FORUM,
        payload: res.data,
      })
    );
  };
};

export const onClose = (close) => {
  return {
    type: 'close',
    payload: close
  }
}