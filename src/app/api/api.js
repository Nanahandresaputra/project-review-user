import axios from "axios";
import config from "../../config/config";

export const getListFroum = async () => {
  const forum = await axios.get(`${config.baseUrl}/${config.forumUrl}`);
  return forum;
};

export const getDetailForum = async () => {
  let id = localStorage.getItem("forumId") || "";
  const forum = await axios.get(`${config.baseUrl}/${config.forumUrl}/${id}`);
  return forum;
};

export const createForum = async (data) => {
  console.log(data);
  const forum = await axios.post(`${config.baseUrl}/${config.forumUrl}`, data);
  return forum;
};
