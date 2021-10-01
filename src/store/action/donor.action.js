import { toast } from "react-toastify";
import axiosinstance from "../../config/axios"

export const getDonor = () => {
    return async (dispatch) => {
        try {
            const { data } = await axiosinstance.get('/hp/donors');
            return data.data;
        } catch (error) {

            toast.error("Something went wrong");
        }

    }
}

export const deleteDonor = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await axiosinstance.delete(`/hp/donors/${id}`);
            toast.success("User deleted successfully");
            dispatch(getDonor())
            return data.data;

        } catch (error) {
            toast.error("Something went wrong");
        }

    }
}