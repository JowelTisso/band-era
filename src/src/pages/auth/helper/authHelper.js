import { LOG_OUT, SIGN_UP_API } from "../../../utils/Constants";
import { removeToken, setUserToken } from "../../../utils/tokenHelper";
import { POST_AUTH } from "../../../utils/axiosHelper";
import { LOG_IN_API } from "../../../utils/Constants";

export const userLogIn = async (payload) => {
  try {
    const { status, data } = await POST_AUTH(LOG_IN_API, payload);
    if (status === 200 || 201) {
      setUserToken(data.encodedToken);
    }
    return { status, data };
  } catch (err) {
    console.log(err);
  }
};

export const userLogout = (authDispatch) => {
  try {
    removeToken();
    authDispatch({ type: LOG_OUT });
  } catch (err) {
    console.log(err);
  }
};

export const userSignUp = async (payload) => {
  try {
    const { status, data } = await POST_AUTH(SIGN_UP_API, payload);
    if (status === 200 || 201) {
      setUserToken(data.encodedToken);
    }
    return { status, data };
  } catch (err) {
    console.log(err);
  }
};
