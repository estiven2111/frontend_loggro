import { PhotoIcon } from "@heroicons/react/24/solid";
import { useState, useRef } from "react";
import axios from "axios";
import Swals from "sweetalert2";

function FormImage() {
  const [information, setInformation] = useState({
    name: "",
    lastname: "",
    email: "",
  });
  const [rutaImagen, setRutaImagen] = useState("");
  const handlerinformation = (event) => {
    const { name, value } = event.target;
    setInformation({
      ...information,
      [name]: value,
    });
  };
  const fileInputRef = useRef(null);
  const handlerCancel = () => {
    if (
      information.name ||
      information.lastname ||
      information.email ||
      rutaImagen
    ) {
      Swals.fire({
        title: "ELIMINAR INFORMACION",
        text: "¿Deseas eliminar la información ingresada?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí",
        cancelButtonText: "No",
      }).then((result) => {
        if (result.isConfirmed) {
          setRutaImagen("");
          setInformation({
            name: "",
            lastname: "",
            email: "",
          });
        }
      });
    } else {
      Swals.fire({
        title: "Datos vacios",
        text: "No hay información",
        icon: "info",
        confirmButtonText: "Aceptar",
      });
    }
  };

  const handlerSend = async (event) => {
    event.preventDefault();

    if (
      information.name &&
      information.lastname &&
      information.email &&
      rutaImagen
    ) {
      const formdata = new FormData(event.target);
      const response = await axios.post(
        "/form/img",
        formdata
      );
    
      if (response.data === "Guardado exitoso") {
        setRutaImagen("");
        setInformation({
          name: "",
          lastname: "",
          email: "",
        });
        Swals.fire({
          title: "GUARDADO",
          text: "Se guardaron con exito sus datos",
          icon: "success",
          confirmButtonText: "OK",
        });
      }
    } else {
      Swals.fire({
        title: "Datos vacios",
        text: "Debes llenar todos los tados",
        icon: "warning",
        confirmButtonText: "Aceptar",
      });
    }
  };

  const handleFileChange = (e) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setRutaImagen(reader.result);
      };
    }
  };

  const handlerValidation = (event) => {
    const input = event.target;
    if (input.files.length > 0) {
      const file = input.files[0];
      const Extensions = [".jpg", ".jpeg"];
      const fileExtension = file.name.slice(
        ((file.name.lastIndexOf(".") - 1) >>> 0) + 2
      );
      if (!Extensions.includes("." + fileExtension.toLowerCase())) {
        Swals.fire({
          title: "ARCHIVO INCORRECTO",
          text: "Debe seleccionar un archivo .JPG O JPEG",
          icon: "warning",
          confirmButtonText: "Aceptar",
        });
        input.value = "";
      }
    }
  };
  return (
    <div>
      <form onSubmit={handlerSend}>
        <div className="space-y-12 mt-36">
          <div className="border-b border-gray-900/10 pb-12">
            <h1 className="text-base font-semibold leading-7 text-gray-900">
              PRUEBA DESARROLLADORES FULL STACK
            </h1>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="col-span-full">
                <label
                  htmlFor="cover-photo"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Selecciona una Imagen
                </label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <div className="text-center">
                    {rutaImagen ? (
                      <div className="w-60">
                        <img src={rutaImagen} alt="Imagen de perfil" />
                      </div>
                    ) : (
                      <PhotoIcon
                        className="mx-auto h-12 w-12 text-gray-300"
                        aria-hidden="true"
                      />
                    )}
                    <div className="mt-4 flex text-sm leading-6 text-gray-600 place-content-center">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-orange-500  focus-within:outline-none focus-within:ring-2 focus-within:ring-orange-500 focus-within:ring-offset-2 hover:text-orange-700"
                      >
                        <button
                        className=""
                          type="button"
                          onClick={() => fileInputRef.current.click()}
                        >
                          <span>
                            {rutaImagen
                              ? "cambiar imagen "
                              : "Carga un archivo"}
                          </span>
                        </button>
                        <input
                          type="file"
                          name="image"
                          onChange={handleFileChange}
                          ref={fileInputRef}
                          style={{ display: "none" }}
                          accept=".jpg, .jpeg"
                         onInput={handlerValidation}
                        />
                      </label>
                    </div>

                    <p className="text-xs leading-5 text-stone-900 font-serif">JPEG - JPG</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Información personal
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Nombre
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="given-name"
                    placeholder="ingrese su nombre"
                    value={information.name}
                    className="text-center block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={handlerinformation}
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="lastname"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Apellidos
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    autoComplete="lastname"
                    placeholder="Ingrese sus apellidos"
                    value={information.lastname}
                    className="text-center  block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={handlerinformation}
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Correo electronico
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Ingrese su correo "
                    value={information.email}
                    className="text-center  block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={handlerinformation}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
            onClick={handlerCancel}
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="rounded-md bg-orange-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormImage;
