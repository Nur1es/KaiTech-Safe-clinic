import { axiosInstance } from "../../api/axiosInstance"

export const loginReq = (data) => {
    return axiosInstance.post('auth/users/', data)
}