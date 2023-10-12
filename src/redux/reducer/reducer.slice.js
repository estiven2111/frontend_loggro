import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    infoUsers: [],
}

export const actividadesSlice = createSlice({
    name:'actividades',
    initialState,
    reducers: {
        getInfoUser(state,action){
            return{
                ...state,
                infoUsers:action.payload
            }
        },

        GetDateUser(state,action){
            return{
                ...state,
                infoUsers:action.payload
            }
        }
    }
})

export const sendInfoUser = (formdata) =>{
    return async () =>{
        const datos = (await axios.get(`http://localhost:3200/form/img`,formdata)).data;
        return datos
    }
}

export const infoUserSlice = () =>{
    return async (dispatch) =>{
        const datos = (await axios.get(`http://localhost:3200/form/img`)).data;
        await dispatch(getInfoUser(datos))
        return datos
    }
}
export const DateUser = (startDate,endDate) =>{
    return async (dispatch) =>{
        const datos = (await axios.get(`/form/date?startDate=${startDate}&endDate=${endDate}`)).data;
        console.log(datos,"datosssssssssss")
        await dispatch(GetDateUser(datos))
        return datos
    }
}

export const {getInfoUser,GetDateUser} = actividadesSlice.actions
export default actividadesSlice.reducer