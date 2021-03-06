import { LOG_OUT, SIGN_UP_API } from "../../../utils/Constants";
import { removeToken, setUserToken } from "../../../utils/tokenHelper";
import { POST_AUTH } from "../../../utils/axiosHelper";
import { LOG_IN_API } from "../../../utils/Constants";
import { callToast } from "../../../components/toast/Toast";

export const userLogIn = async (payload) => {
  try {
    const res = await POST_AUTH(LOG_IN_API, payload);
    if (res?.status === 200 || res?.status === 201) {
      setUserToken(res?.data.encodedToken);
      callToast("Login successfull!");
    }
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const userLogout = (authDispatch) => {
  try {
    removeToken();
    authDispatch({ type: LOG_OUT });
    callToast("Logged out successfullly!");
  } catch (err) {
    console.log(err);
  }
};

export const userSignUp = async (payload) => {
  try {
    const res = await POST_AUTH(SIGN_UP_API, payload);
    if (res?.status === 200 || res?.status === 201) {
      setUserToken(res?.data.encodedToken);
      callToast("Signup successfull! Login to continue!");
    }
    return res;
  } catch (err) {
    console.log(err);
  }
};
