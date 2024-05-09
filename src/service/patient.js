import { axiosInstance } from "../api/axiosInstance";

export const getPatientReq = () => {
  return axiosInstance.get("patient/");
};

// export const postPatientReq = (patientData) => {
//   return axiosInstance.post("patient/", patientData);
// };
export const postPatientReq = async (patientData) => {
  try {
    return axiosInstance.post("patient/", patientData);
  } catch (error) {
    console.error("Error creating patient:", error);
    throw error;
  }
};
export const delPatientReq = (id) => {
  return axiosInstance.delete(`patient/${id}/`);
};
