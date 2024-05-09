import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllDoctorsReq, postAllDoctorsReq } from "../../service/doctors";

export const getDoctor = createAsyncThunk(

    'doctor/getDoctor',
    async(payload, rejectWithValue) =>{
        try{
            const {data} = await getAllDoctorsReq();
            console.log(data);
            return data;
        }catch(error) {
            rejectWithValue('something went wrong')
        }
    }
)

export const postDoctor = createAsyncThunk(
    "doctor/",
    async (data, {rejectedWithValue, dispatch
    }) => {
      try {
        const response = await postAllDoctorsReq(data);
        console.log(data, "rtyui");
        dispatch(getDoctor())
        return response.data;
      } catch (error) {
        return rejectedWithValue("Something went wrong!!!");
      }
    }
  );

// export const postDoctor = (doctorsData) => {
//   return async (dispatch) => {
//     try {
//       const response = await fetch('http://157.245.202.197/doctor/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(doctorsData)
//       });

//       const data = await response.json();
//       console.log('Ответ от Swagger:', data);

//     } catch (error) {
//       console.error('Ошибка:', error);
//     }
//   };
// };