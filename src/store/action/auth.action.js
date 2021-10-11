import { SET_TOKEN, LOGIN_ERRORS } from "../constant";
import axiosinstance from "../../config/axios"
import { toast } from "react-toastify";

export const login = (User) => {
    return async (dispatch) => {
        try {
            const { data } = await axiosinstance.post('/hp/login', User);
            localStorage.setItem('jwt', data.data.token);
            dispatch({ type: SET_TOKEN, payload: data.data.token });
        } catch (error) {
            toast.error((error.response.data && error.response.data.error && error.response.data.error.message) || "Something went wrong");
            if (error.response && error.response.data.message) {
                dispatch({ type: LOGIN_ERRORS, payload: [{ message: error.response.data.message }] });
            }
        }

    }
}
