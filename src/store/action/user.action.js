import { toast } from "react-toastify";
import axiosinstance from "../../config/axios"

export const ResetUserPassword = (formData) => {
    return async (dispatch) => {
        try {
            const { data } = await axiosinstance.post('/hp/reset', formData);
            console.log(data)
            toast.success("Password Changed");
            return data.data;
        } catch (error) {
            toast.error("Something went wrong");
        }

    }
}