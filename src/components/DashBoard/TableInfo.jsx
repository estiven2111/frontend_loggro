import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { DateUser, infoUserSlice } from '../../redux/reducer/reducer.slice';
import Swals from "sweetalert2";
function TableInfo() {
    const { infoUsers } = useSelector((state) => state.actividadesSlice);
    const [userInfo,setUserInfo] = useState()
    const [date,setDate] = useState({
        startDate : "",
        endDate : ""
    })
    const dispatch = useDispatch()
    let ejecuto = false
    const execute = async () => {
        const response = await dispatch(infoUserSlice())
         setUserInfo(response)
       }
    useEffect(()=>{
     ejecuto = ejecuto || execute();
    },[])
    const handlerDate = (e) =>{
const {name,value} = e.target
console.log(typeof value)
setDate({
    ...date,
    [name]:value
})
    }
    const handleSendDate = () => {
        const valStartDate = new Date(date.startDate);
        const valEndDate = new Date(date.endDate);
        
        if (valStartDate > valEndDate) {
            Swals.fire({
                title: "ERROR DE FECHAS",
                text: "La fecha inicial debe ser menor que la final",
                icon: "info",
                confirmButtonText: "Aceptar",
              });
              return
        } 
        if (date.startDate && date.endDate) {
            dispatch(DateUser(date.startDate, date.endDate))
        }else{
            Swals.fire({
                title: "FALTA INFORMACION",
                text: "Seleccione ambas fechas",
                icon: "info",
                confirmButtonText: "Aceptar",
              });
        }
        


      
    }
  return (
      <div className='pt-32 '>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-content-center text-center mb-12">
  <div className=" col-span-1 md:col-span-1  place-content-center">
    <label>Fecha Inicio: </label>
    <input
    
      type="date"
      name="startDate"
      onChange={handlerDate}
      className="w-56 border border-gray-300 rounded p-2"
    />
  </div>
  <div className="col-span-1 md:col-span-1">
  <label>Fecha Final: </label>
    <input
      type="date"
      name="endDate"
      onChange={handlerDate}
      className="w-56 border border-gray-300 rounded p-2"
    />
  </div>
  <div className="col-span-1 md:col-span-6 mt-7">
  <button
            type="button"
            onClick={handleSendDate}
            className="rounded-md bg-orange-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Enviar
          </button>
  </div>
</div>

<div className="flex flex-col bg-gray-300">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table className="min-w-full text-left text-sm font-light">
          <thead className="border-b font-medium border-orange-900">
            <tr className='text-center'>
              <th scope="col" className="px-6 py-">#</th>
              <th scope="col" className="px-6 py-4">Nombre</th>
              <th scope="col" className="px-6 py-4">Apellido</th>
              <th scope="col" className="px-6 py-4">Correo</th>
              <th scope="col" className="px-6 py-4">Imagen</th>
            </tr>
          </thead>
          <tbody>
            
                {
                   infoUsers.map((info)=>(
                   <>
                    <tr key={info._id} className="border-b border-orange-900 text-center" >
                     <td className="whitespace-nowrap px-6 py-4 font-medium text-center" >{info.name}</td>
                    <td className="whitespace-nowrap px-6 py-4 text-center">{info.name}</td>
                    <td className="whitespace-nowrap px-6 py-4 text-center">{info.lastname}</td>
                    <td className="whitespace-nowrap px-6 py-4 text-center">{info.email}</td>
                    <td className="whitespace-nowrap px-6 py-4 text-center"><img className='w-20 place-content-center text-center' src={info.url_img} alt="" /></td>
                    </tr>
                   </>  
                   )) 
                }
           
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default TableInfo
