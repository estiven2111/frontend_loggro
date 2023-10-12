import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DateUser,
  HourUser,
  infoUserSlice,
} from "../../redux/reducer/reducer.slice";
import Swals from "sweetalert2";
import { AiOutlineClear } from "react-icons/ai";
function TableInfo() {
  const { infoUsers } = useSelector((state) => state.actividadesSlice);
  const [userInfo, setUserInfo] = useState();
  const [ejecutado, setEjecutado] = useState(false);
  const [total, setTotal] = useState(0);
  const [date, setDate] = useState({
    startDate: "",
    endDate: "",
    hour: "",
  });
  const dispatch = useDispatch();
//   let ejecuto = false;
  const execute = async () => {
    const response = await dispatch(infoUserSlice());
    setUserInfo(response);
  };
  useEffect(() => {
    if (!ejecutado) {
      execute();
      setEjecutado(true);
    }
  }, [ejecutado]);
  const handlerDate = (e) => {
    const { name, value } = e.target;
    setDate({
      ...date,
      [name]: value,
    });
  };
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
      return;
    }
    if (date.startDate && date.endDate) {
      dispatch(DateUser(date.startDate, date.endDate));
    } else {
      Swals.fire({
        title: "FALTA INFORMACION",
        text: "Seleccione ambas fechas",
        icon: "info",
        confirmButtonText: "Aceptar",
      });
    }
  };
  const handlerTime = async(e) => {
    const { name, value } = e.target;
    setDate({
      ...date,
      [name]: value,
    });
   if (value.length === 5) {
    const response = await dispatch(HourUser(value));
    setTotal(response.length)
   }
  };
  const clearTime = async() => {
    setDate({
      startDate: "",
      endDate: "",
      hour: "",
    });
    window.location.reload();
  };
  return (
    <div>
    <div className="pt-32 pb-10">
       <div className="content-center mb-11 border-b border-gray-900/10 pb-12">
       <p className="font-serif">Seleccione un rango de fechas para poder observar que información hay en dicho rango</p>
       </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-content-center text-center mb-12">
        
        <div className=" col-span-1 md:col-span-1  place-content-center">
          <label>Fecha Inicio: </label>
          <input
            type="date"
            name="startDate"
            value={date.startDate}
            onChange={handlerDate}
            className="text-center w-56 border border-gray-300 rounded p-2 text-black"
          />
        </div>
        <div className="col-span-1 md:col-span-1">
          <label>Fecha Final: </label>
          <input
            type="date"
            name="endDate"
            value={date.endDate}
            onChange={handlerDate}
            className="text-center w-56 border border-gray-300 rounded p-2 text-black"
          />
        </div>
        <div className="col-span-1 md:col-span-6 mt-7 flex justify-center items-center">
          <button
            type="button"
            onClick={handleSendDate}
            className=" flex justify-center items-center rounded-md bg-orange-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Enviar
          </button>
        </div>
      </div>
      <div className="content-center mb-11">
       <p className="font-serif">Seleccione una hora para poder observar que datos se han agregado en ese lapso de tiempo </p>
       <p className="font-serif">Tener en cuenta que la hora seleccionada se le resta una hora para calcular los datos </p>
       </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-content-center text-center mb-12">
        <div className="col-span-1 md:col-span-1  place-content-center">
          <label>Rango Hora: </label>
          <input
            type="time"
            name="hour"
            onChange={handlerTime}
            className="text-center w-56 border border-gray-300 rounded p-2 text-black"
          />
         
        </div>
        <div className="col-span-1 md:col-span-1 text-center flex justify-center items-center">
        <button
            className="text-center  w-16 h-12 border border-gray-300 rounded p-2 ml-6 text-black flex justify-center items-center bg-orange-300"
            onClick={clearTime}
          >
            <AiOutlineClear /> 
          </button>
        </div>
      </div>
      <div className="content-center mb-11">
      <p className="font-serif">
  {date.hour ? (
    <>El total de imágenes subidas en el rango de tiempo seleccionado es de <span className="text-3xl">{total}</span></>
  ) : (
    ""
  )}
</p>
       </div>
      <div className="flex flex-col bg-gray-300">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium border-orange-900">
                  <tr className="text-center">
                    <th scope="col" className="px-6 py-">
                      #
                    </th>
                    <th scope="col" className="px-6 py-">
                      Hora
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Nombre
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Apellido
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Correo
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Imagen
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {userInfo?.map((info,) => (
                    <>
                      <tr
                        key={info._id}
                        className="border-b border-orange-900 text-center"
                      >
                        <td className="whitespace-nowrap px-6 py-4 font-medium text-center">
                          {info.index}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium text-center">
                          {info.hour}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-center">
                          {info.name}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-center">
                          {info.lastname}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-center">
                          {info.email}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-center">
                          <img
                            className="w-20 place-content-center text-center"
                            src={info.url_img}
                            alt=""
                          />
                        </td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default TableInfo;
