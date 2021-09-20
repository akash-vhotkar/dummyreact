import { SET_TOKEN, LOGIN_ERRORS } from "../constant";
import axiosinstance from "../../config/axios"


export const login = (User) => {
    return async (dispatch) => {
        try {
            const { data } = await axiosinstance.post('/admin/login', User);
            localStorage.setItem('jwt', data.data.token);
            // console.log(data.data);
            dispatch({ type: SET_TOKEN, payload: data.data.token });
        } catch (error) {
            console.log(error.response.data.message);
            if (error.response.data.error) {
                dispatch({ type: LOGIN_ERRORS, payload: error.response.data.error.details });
            }
            if (error.response.data.message) {
                dispatch({ type: LOGIN_ERRORS, payload: [{ message: error.response.data.message }] });

            }
        }

    }
}
