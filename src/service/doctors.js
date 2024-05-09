import { axiosInstance } from "../api/axiosInstance"


export const getAllDoctorsReq = () => {
    return axiosInstance.get('doctor/')
}
export const postAllDoctorsReq = (doctorsData) => {
    return axiosInstance.get('doctor/', doctorsData)
}
