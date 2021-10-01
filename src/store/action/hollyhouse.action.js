import { toast } from "react-toastify";
import axiosinstance from "../../config/axios"

export const AddHow = (userData) => {
    return async (dispatch) => {
        try {
            await axiosinstance.post('/hp/how', userData);
            toast.success("Organization added");
            return true;
        } catch (error) {
            if (error.response && error.response.data.error && error.response.data.error.details) {
                error.response.data.error.details.map(err => {
                    toast.error(err.message);
                })
            }
        }
    }
}

export const ViewHow = () => {
    return async (dispatch) => {
        try {
            const { data } = await axiosinstance.get('/hp/hows');
            return data.data;
        } catch (error) {

            toast.error("Something went wrong");
        }

    }
}

export const getHowCount = () => {
    return async (dispatch) => {
        try {
            const { data } = await axiosinstance.get('/hp/how-count');
            return data.data;
        } catch (error) {

            toast.error("Something went wrong");
        }

    }
}

export const deleteOrg = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await axiosinstance.delete(`/hp/how/${id}`);
            toast.success("Organization deleted successfully");
            dispatch(ViewHow())
            return data.data;

        } catch (error) {
            toast.error("Something went wrong");
        }

    }
}
