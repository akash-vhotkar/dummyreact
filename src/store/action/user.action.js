import { toast } from "react-toastify";
import axiosinstance from "../../config/axios"

export const updateProfile = (formData) => {
    return async (dispatch) => {
        try {
            const { data } = await axiosinstance.put('/hp/profile', formData)
            toast.success("Profile updated successfully!");
            return data.success;
        } catch (error) {
            toast.error((error.response.data && error.response.data.error && error.response.data.error.message) || "Something went wrong");
        }

    }
}

export const ResetUserPassword = (formData) => {
    return async (dispatch) => {
        try {
            const { data } = formData.id ?
                await axiosinstance.post(`/hp/reset/${formData.id}`, { password: formData.password, repeat_password: formData.repeat_password }) :
                await axiosinstance.post('/hp/reset', { password: formData.password, repeat_password: formData.repeat_password })
            toast.success("Password changed successfully!");
            return data.success;
        } catch (error) {
            toast.error((error.response.data && error.response.data.error && error.response.data.error.message) || "Something went wrong");
        }

    }
}

export const forgotPassword = (formData) => {
    return async (dispatch) => {
        try {
            const { data } = await axiosinstance.post('/hp/forget', formData);
            toast.success("Reset password link has been sent to your email");
            return data.data;
        } catch (error) {
            toast.error("Something went wrong");
        }

    }
}