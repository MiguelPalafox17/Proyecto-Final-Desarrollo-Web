import './Galeria.css'

import Imagen1 from './Imagenes Galeria/Imagen 1.jpg'
import Imagen2 from './Imagenes Galeria/Imagen 2.jpg'
import Imagen3 from './Imagenes Galeria/Imagen 3.jpg'
import Imagen4 from './Imagenes Galeria/Imagen 4.jpg'
import Imagen5 from './Imagenes Galeria/Imagen 5.jpg'
import Imagen6 from './Imagenes Galeria/Imagen 6.png'
import Imagen7 from './Imagenes Galeria/Imagen 7.png'
import Imagen8 from './Imagenes Galeria/Imagen 8.jpeg'
import Imagen9 from './Imagenes Galeria/Imagen 9.jpeg'

export function Galeria () {
    return (
        <div className="Caja1_Galeria">
            <div><img src={Imagen1} alt="" /></div>
            <div><img src={Imagen2} alt="" /></div>
            <div><img src={Imagen3} alt="" /></div>
            <div><img src={Imagen4} alt="" /></div>
            <div><img src={Imagen5} alt="" /></div>
            <div><img src={Imagen6} alt="" /></div>
            <div><img src={Imagen7} alt="" /></div>
            <div><img src={Imagen8} alt="" /></div>
            <div><img src={Imagen9} alt="" /></div>
        </div>
    )
}
