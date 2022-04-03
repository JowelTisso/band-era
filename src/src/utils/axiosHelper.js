import axios from "axios";
import { getUserToken } from "./tokenHelper";

export const GET = async (url, auth = false) => {
  try {
    if (auth) {
      return await axios.get(url, {
        headers: { authorization: getUserToken() },
      });
    } else {
      return await axios.get(url);
    }
  } catch (err) {
    console.log(err);
  }
};

export const POST = async (url, body, newPlaylist = false) => {
  try {
    return await axios.post(
      url,
      {
        headers: { authorization: getUserToken() },
      },
      {
        [newPlaylist ? "playlist" : "video"]: body,
      }
    );
  } catch (err) {
    console.log(err);
  }
};

export const POST_AUTH = async (url, body) => {
  try {
    return await axios.post(url, body);
  } catch (err) {
    console.log(err);
  }
};

export const DELETE = async (url) => {
  try {
    return await axios.delete(url, {
      headers: { authorization: getUserToken() },
    });
  } catch (err) {
    console.log(err);
  }
};
