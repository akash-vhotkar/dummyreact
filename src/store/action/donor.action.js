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
