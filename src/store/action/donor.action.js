import { toast } from "react-toastify";
import axiosinstance from "../../config/axios"

export const getDonor = (page) => {
    return async (dispatch) => {
        dispatch({ type: 'SET_DONOR_LOADER', loader: true })
        try {
            const { data } = await axiosinstance.get(`/hp/donors?page=${page}&limit=10`);
            dispatch({ type: 'SET_DONOR_LOADER', loader: false })
            return data.data;
        } catch (error) {

            toast.error("Something went wrong");
        }

    }
}

export const deleteDonor = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await axiosinstance.delete(`/hp/donor/${id}`);
            toast.success("User deleted successfully");
            dispatch(getDonor())
            return data.data;

        } catch (error) {
            toast.error("Something went wrong");
        }

    }
}