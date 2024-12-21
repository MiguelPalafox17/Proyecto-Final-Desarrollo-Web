//Importo CSS
import './Footer.css'
//Importo los iconos de las redes sociales
import Facebook from '../assets/Imagenes/Iconos/facebook.svg'
import Youtube from '../assets/Imagenes/Iconos/youtube.svg'
import Instagram from '../assets/Imagenes/Iconos/instagram.svg'
import Twitch from '../assets/Imagenes/Iconos/twitch.svg'
import Twitter from '../assets/Imagenes/Iconos/twitter.svg'
import LoogoBandainamco from '../assets/Imagenes/Logo BandaiNamco.svg'



export function Footer() {
    return (
            <div className='CuerpoFooter'>
                <section>
                    <div className='Caja1_Footer'>
                        <div className='Imagen1_Footer'>
                            <h1>No te pierdas niguna noticia</h1>
                            <h2>Recibe las últimas actualizaciones de nuestros productos y servicios</h2>
                            <div className='Suscripcion'>
                                <input type="email" placeholder='CORREO ELECTRONICO'/>
                                <button>ME SUSCRIBO</button>
                            </div>
                        </div>
                        <div className='Redes'>
                            <h1>Síguenos</h1>
                            <h2>Forma parte de nuestra comunidad</h2>
                            <div className='Iconos_RedesSociales'>
                                <img src={Facebook} alt="" />
                                <img src={Youtube} alt="" />
                                <img src={Instagram} alt="" />
                                <img src={Twitch} alt="" />
                                <img src={Twitter} alt="" />
                            </div>
                        </div>
                    </div>
                    
                    <div className='Caja2_Footer'>
                        <div>
                            <img className='LogoBandainamco' src={LoogoBandainamco} alt="" />
                        </div>
                        <div className='Caja2_Texto1_Footer'>
                            <h1>Juegos</h1>
                            <h1>Acerca de Prensa</h1>
                            <h1>Reclutamiento</h1>
                            <h1>Licencias</h1>
                        </div>
                        <div className='Caja2_Texto2_Footer'>
                            <div className=' Caja2_Texto3'>
                                <h2>¿Tienes alguna pregunta?</h2>
                                <h2>Ir a Atención al cliente</h2>
                            </div>
                            <div className='Caja2_Subtexto1'>
                                <div>Registrar un juego</div>
                                <div>Únete al ¡Club!</div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
    ) 
}