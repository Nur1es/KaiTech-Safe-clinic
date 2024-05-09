import { axiosInstance } from "../api/axiosInstance";
///GET///
export const getFilialReq = () => {
  return axiosInstance.get("branch/");
};
///POST///
export const postFilialReq = (dataBranch) => {
  return axiosInstance.post("branch/",dataBranch)
}
///DELETE///
export const deleteFilialReq = (id) => {
  return axiosInstance.delete(`branch/${id}/`)
}
///PATCH///
export const patchFilialReq = (id,branchEdit) => {
  return axiosInstance.patch(`branch/${id}/`,branchEdit)
}