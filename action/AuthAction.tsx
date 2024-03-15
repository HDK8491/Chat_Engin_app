import * as AuthApi from '../api/AuthRequest'

interface FormData {
  // Define the type for FormData properties
  username: string;
  password: string;
  // Add more properties as needed
}

interface Dispatch {
  (action: { type: string, data?: any }): void;
}

interface Navigate {
  (path: string, options: { replace: boolean }): void;
}

export const LogIn = (formData: FormData, navigate: Navigate) => async (dispatch: Dispatch) => {
  dispatch({ type: "AUTH_START" });
  try {
    const { data } = await AuthApi.LogIn(formData);
    dispatch({ type: "AUTH_SUCCESS", data });
    navigate("../home", { replace: true });
  } catch (error) {
    console.log(error);
    dispatch({ type: "AUTH_FAIL" });
  }
};

export const SignUp = (formData: FormData, navigate: Navigate) => async (dispatch: Dispatch) => {
  dispatch({ type: "AUTH_START" });
  try {
    const { data } = await AuthApi.SignUp(formData);
    dispatch({ type: "AUTH_SUCCESS", data });
    navigate("../home", { replace: true });
  } catch (error) {
    console.log(error);
    dispatch({ type: "AUTH_FAIL" });
  }
};

export const Logout = () => async (dispatch: Dispatch) => {
  dispatch({ type: "LOG_OUT" });
};