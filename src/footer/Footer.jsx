import { AiFillLinkedin,AiFillGithub } from "react-icons/ai";
import { FaInternetExplorer } from "react-icons/fa";
import loggro from  "../assets/loggro.png"
import { Link} from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-auto">
    <div className="py-2 lg:pb-0 md:pb-20 mt-10">
      <div className="flex-row items-center justify-center dark:from-transparent dark:to-slate-900 bg-gradient-to-b from-transparent to-slate-100">
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 mb-4 items-center justify-center">
          <div className="px-5 lg:order-first text-center lg:text-md text-sm sm:order-last">
            <h1>
              <strong>Loggro</strong> Prueba Desarrollador Restobares
            </h1>
          </div>
          <div className="order-first">
            <Link to="/">
              <div className="flex justify-center">
              <img className="w-36" src={loggro} alt="Blue Logo" />
              </div>
            </Link>
          </div>

          <div className="flex justify-center">
            <a className="pr-3" href="https://www.linkedin.com/in/estiven-arboleda-bb9aa61a4/" target="_blanck">
              <AiFillLinkedin className="text-2xl" />
            </a>
            <a className="pr-3" href="https://github.com/estiven2111" target="_blanck">
              <AiFillGithub className="text-2xl" />
            </a>
            <a className="pr-3" href="https://tecnoeam.com/ESTIVEN/" target="_blanck">
              <FaInternetExplorer className="text-2xl" />
            </a>
          </div>
        </div>
        <hr className="text-neutral-400 py-4   px-5" />
      </div>
      <div className=" flex pt-2 pb-1 items-center text-center justify-center dark:text-neutral-500 text-neutral-500">
        Copyright © 2023 Estiven Arboleda Martinez | Todos los derechos reservados.
      </div>
    </div>
    </footer>
  );
};

export default Footer;

