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
        },
        GetHourUser(state,action){
            return{
                ...state,
                infoUsers:action.payload
            }
        }
    }
})

export const sendInfoUser = (formdata) =>{
    return async () =>{
        const datos = (await axios.get(`/form/img`,formdata)).data;
        return datos
    }
}

export const infoUserSlice = () =>{
    return async (dispatch) =>{
        const datos = (await axios.get(`/form/img`)).data;
        await dispatch(getInfoUser(datos))
        return datos
    }
}
export const DateUser = (startDate,endDate) =>{
    return async (dispatch) =>{
        const datos = (await axios.get(`/form/date?startDate=${startDate}&endDate=${endDate}`)).data;
        
        await dispatch(GetDateUser(datos))
        return datos
    }
}
export const HourUser = (Hour) =>{
    return async (dispatch) =>{
        const datos = (await axios.get(`/form/hour?hour=${Hour}`)).data;
        await dispatch(GetHourUser(datos))
        return datos
    }
}

export const {getInfoUser,GetDateUser,GetHourUser} = actividadesSlice.actions
export default actividadesSlice.reducer