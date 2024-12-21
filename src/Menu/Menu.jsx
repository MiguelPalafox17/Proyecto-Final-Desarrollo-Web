import './Menu.css'
import { Outlet, Link } from "react-router-dom";
import Logo from '../assets/Imagenes/Logo Menu.png'

export function Menu() {
    return (
        <div>
            <div className="Barra_Opciones">
                <div className='CajaLogo'><Link to="/" className='Home'><img className='Logo' src={Logo} alt="" /></Link></div>
                <div className='OpcionesDefault'>Características principales</div>
                <div className='OpcionesDefault'>Merchandising oficial</div>
                <div className='Caja3'> <Link to="/Galeria" className='Galeria'>Galeria</Link> </div>
                <div className='Caja4'>   <Link to="/Iniciar_Sesion" className='Iniciar_Sesion'>Inicio de Sesion</Link> </div>
            </div>
            <Outlet/>
        </div>
    )
}