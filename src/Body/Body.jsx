import './Body.css'
import Imagen4_Body from "../assets/Imagenes/Imagen4_Body.png"
import Imagen5_Body from "../assets/Imagenes/Imagen5_Body.png"
import Imagen6_Body from "../assets/Imagenes/Imagen6_Body.png"
import Imagen7_Body from "../assets/Imagenes/Imagen7_Body.jpg"
import Imagen8_Body from "../assets/Imagenes/Imagen8_Body.jpg"
import Imagen10_Body from "../assets/Imagenes/Imagen10_Body.png"

export function Principal() {
    return (
        <div className="Cuerpo">
            
            <div className='Caja1'>
                <div className="Titulo1"><h1>ELDEN RING: Wiki, Guía y consejos</h1></div>
            </div>
            <section className='Seccion1'>
                <div className='Caja2'>
                    <div className='Subtitulo1'>Prepárate para tu viaje por las Tierras Intermedias</div>
                    <div className='Caja_Imagen2_Body'><img className='Imagen2_Body' src="https://static.bandainamcoent.eu/high/elden-ring/elden-ring/00-page-setup/Elden-ring-border4.png" alt="" /></div>
                    <div className='Texto1'>
                        Consulta la Guía para principiantes de Elden Ring, donde podrás conocer a tus aliados y enemigos con la presentación del sistema Multijugador y aprender de los campeones de las Tierras Intermedias gracias a este compendio del juego. <br />
                        Tanto consejos para dar tus primeros pasos como estrategias avanzadas; el contenido de la guía te ayudará a afrontar los desafíos que te esperan en las Tierras Intermedias. <br />
                        ELDEN RING está disponible para PlayStation 5, PlayStation 4, Xbox Series X|S, Xbox One y para PC desde STEAM. <br />
                        <button className='Boton_Comprar'>Comprar Ahora</button>
                    </div>
                    <div>
                        <div className='Caja3_Seccion1'>
                            <div className='Texto2'>
                            <h1>La Orden Dorada está rota.</h1><br />

                            <h2>Álzate, Sinluz, y que la gracia te guíe para abrazar el poder del Círculo de Elden y encumbrarte como señor del Círculo en las Tierras Intermedias. <br />
                            <br />En las Tierras Intermedias gobernadas por la Reina Márika, la Eterna, el Círculo de Elden, origen del Árbol Áureo, ha sido destruido. <br />
                            <br />Los descendientes de Márika, todos semidioses, reclamaron los fragmentos del Círculo de Elden conocidos como Grandes Runas. Fue entonces cuando la demencial corrupción de su renovada fuerza provocó una guerra: la Devastación. <br />
                            <br />Una guerra que supuso el abandono de la Voluntad Mayor. Y ahora, la gracia que nos guía recaerá sobre el Sinluz desdeñado por la gracia del oro y exiliado de las Tierras Intermedias. Tú que has muerto, pero vives, con tu gracia tiempo ha perdida, 
                            recorre la senda hacia las Tierras Intermedias más allá del neblinoso mar para postrarte ante el Círculo de Elden. <br /></h2>
                            
                            <h2 className='Texto2_Marcado'><br />Y conviértete en el señor del Círculo.<br /></h2>
                            </div>
                            <div>
                                <img className='Imagen8_Body' src={Imagen8_Body} alt="" />
                            </div>
                        </div>
                    </div>            
                </div>
            </section>

            <div className='Caja_Imagen1_Body'><img className='Imagen1_Body' src="https://static.bandainamcoent.eu/high/elden-ring/elden-ring/07-elden-ring-wiki/ER-wiki-page-header-desktop.jpg" alt="" /></div>
            
            <section className='Seccion2'>
                <div className='Caja3_Body'>
                    <div>
                        <img className='Caja3_Imagen1' src="https://static.bandainamcoent.eu/high/elden-ring/elden-ring/03-news/Starter_Guide/Elden_Ring_Starter_Guide_Cover.png" alt="" />
                        <h2>Guía de iniciación a ELDEN RING: consejos que debes conocer antes de jugar</h2>
                    </div>
                    <div>
                        <img className='Caja3_Imagen1' src={Imagen4_Body} alt="" />
                        <h2>ELDEN RING: Cinco consejos que debes conocer antes de jugar</h2>
                    </div>
                    <div>
                        <img className='Caja3_Imagen1' src={Imagen5_Body} alt="" />
                        <h2>ELDEN RING: Consejos para empezar a jugar a Elden Ring</h2>
                    </div>
                    <div>
                        <img className='Caja3_Imagen1' src={Imagen6_Body}  alt="" />
                        <h2>ELDEN RING: Introducción del sistema multijugador</h2>
                    </div>
                    <div>
                        <img className='Caja3_Imagen1' src={Imagen7_Body}  alt="" />
                        <h2>ELDEN RING: Consejos que te ayudarán en las Tierras Intermedias</h2>
                    </div>
                </div>
            </section>

            <section className='Seccion3'>
                <div className='Caja1_Saccion3'>
                    <div className='Titulo2'>
                        <h1>Los Sinluz de las Tierras Intermedias</h1>
                        <img src={Imagen10_Body} alt="" />
                    </div>
                    <div className='Texto3'>
                        <br />La Orden Dorada está rota. A lo largo y ancho de las Tierras Intermedias, semidioses poseedores de fragmentos del Círculo de Elden se enfrentan y combaten entre las ruinas de un reino otrora perfecto, hoy abandonado por las enseñanzas doradas de la Voluntad Mayor. <br />
                        <br />Mientras los ecos de la contienda retumban a lo lejos, una figura proscrita se acerca. Antaño, sus antepasados llamaron a las Tierras Intermedias su hogar, pero la bendita luz de la gracia se perdió para su pueblo y fueron expulsados del reino. Son los Sinluz, y han vuelto para reclamar el título de Elden prometido por la leyenda. <br />
                        <br />Este es el mundo de ELDEN RING. Conviértete en Sinluz y explora las Tierras Intermedias. Cabalgarás por vastas praderas, galoparás por suaves colinas y ascenderás hasta la cima de rocosos peñascos a lomos de tu efímero corcel para descubrir un mundo rebosante de vida y peligros. <br />
                        <br />En los vastos campos donde comienza tu periplo, criaturas míticas merodean en los páramos, horrores inimaginables acechan en las ciénagas y marismas y todo tipo de soldados y guerreros itinerantes esperan dar caza a los desprevenidos. Tímidas criaturas mordisquean la dulce hierba o se escabullen entre la maleza. <br />
                        <br />Los pocos habitantes que no han enloquecido o se han vuelto hostiles tratan de sobrevivir cerca de las ciudades en ruinas destruidas por la Devastación. Si los ayudas, puede que te ofrezcan las respuestas que buscas. Por encima de todos ellos, asentados en tierras usurpadas en las que trampas, secretos y guardianes abundan, los semidioses —señores corrompidos, 
                        otrora miembros de una noble familia real— regentan sus dominios con el implacable poder otorgado por los fragmentos del Círculo de Elden. <br />
                    </div>
                    <div>
                        
                    </div>
                </div>
            </section>

        </div>
    )
}