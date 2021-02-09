import React, { Component } from "react";
import Navigation from "../components/Navigation.jsx";
import "swiper/swiper.scss";
import Swiper from "react-id-swiper";
import Carrusel1 from "../assets/images/carrusel1.png";
import Carrusel2 from "../assets/images/carrusel2.png";
import Carrusel3 from "../assets/images/carrusel3.png";
import Carrusel4 from "../assets/images/carrusel4.png";
import SwiperCore, { Autoplay } from "swiper";
import Elipse from "../assets/images/Ellipse.png";
import Elipse2 from "../assets/images/Ellipse2.png";
import Elipse3 from "../assets/images/Ellipse3.png";
import Elipse4 from "../assets/images/Ellipse4.png";
import Elipse5 from "../assets/images/Ellipse5.png";
import Elipse6 from "../assets/images/Ellipse6.png";
import Elipse7 from "../assets/images/Ellipse7.png";
import "../styles/Home.scss";

export default class Home extends Component {


  sendEmail = (e) => {
    e.preventDefault();

    let formData = new FormData();

    formData.append("nombre", document.getElementById("nombre").value);
    formData.append("correo", document.getElementById("correo").value);
    formData.append("tel", document.getElementById("tel").value);
    formData.append("dudas", document.getElementById("dudas").value);

    
    fetch("/api/mail.php", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.text())
      .then((response) => {
        if (response === "\n1"){
          document.getElementById("botonEnviar").innerHTML = "<p>Gracias por tu mensaje<p>";
        } else {
          document.getElementById("contenedorEnviar").innerHTML = '<p>Hubo un problema, revisa los campos.</p>';
        }
      });
  };



  render() {
    SwiperCore.use([Autoplay]);

    const params = {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 8000,
        disableOnInteraction: false,
      },
    };
    return (
      <>
        <Navigation />
        <section className="contenedor carrusel">
          <Swiper {...params}>
            <div className="contenedorCarrusel">
              <div className="textoCarrusel">
                <h1> Soporte en tu casa y oficina.</h1>
                <button>Conoce nuestros servicios</button>
              </div>
              <div className="imagenCarrusel">
                <img src={Carrusel1} alt="Carrusel1" />
              </div>
            </div>
            <div className="contenedorCarrusel">
              <div className="textoCarrusel">
                <h1> En la nueva normalidad no arriesgues tu seguridad.</h1>
                <button>Conoce nuestros servicios</button>
              </div>
              <div className="imagenCarrusel">
                <img src={Carrusel2} alt="Carrusel1" />
              </div>
            </div>
            <div className="contenedorCarrusel">
              <div className="textoCarrusel">
                <h1> Mantén tu equipo protegido, en todo lugar.</h1>
                <button>Conoce nuestros servicios</button>
              </div>
              <div className="imagenCarrusel">
                <img src={Carrusel3} alt="Carrusel1" />
              </div>
            </div>
            <div className="contenedorCarrusel">
              <div className="textoCarrusel">
                <h1> Asegura que tu información este a salvo.</h1>
                <button>Conoce nuestros servicios</button>
              </div>
              <div className="imagenCarrusel">
                <img src={Carrusel4} alt="Carrusel1" />
              </div>
            </div>
          </Swiper>
        </section>
        <section className="contenedor beneficios" id="nosotros">
          <article>
            <img src={Elipse} alt="Elipse" />
            <p>Servicio de backup y antivirus en todo lugar.</p>
          </article>
          <article>
            <img src={Elipse2} alt="Elipse" />
            <p>Resolvemos todos tus problemas en una plataforma.</p>
          </article>
          <article>
            <img src={Elipse3} alt="Elipse" />
            <p>Constante inventario de tu equipo de manera gratuita, aún en home office.</p>
          </article>
          <article>
            <img src={Elipse4} alt="Elipse" />
            <p>
            Obtén soporte de un especialista de confianza rápidamente.
            </p>
          </article>
        </section>
        <section className="servicios" id="servicios">
          <h1>Conoce nuestros servicios.</h1>
          <p>Nuestros servicios empaquetados se adaptan a tus necesidades.</p>
          <div className="contenedor tipos">
            <article className="primerTipo">
              <h3>Safeti basic</h3>
              <p>Instalación Inicial</p>
              <p>Fire Wall</p>
              <p>Antivirus</p>
              <p>SafeTi App</p>
              <p>Descuento de 15% soporte técnico por hora</p>
              <h3>$ 169 + iva</h3>
              <button>
                <a href="https://qrforce.mx/beta/login_client?accountid=9&p=51">Contrátanos</a>
              </button>
            </article>
            <article className="segundoTipo">
              <h3>Safeti business</h3>
              <p>Instalación Inicial</p>
              <p>Fire Wall</p>
              <p>Antivirus</p>
              <p>Respaldo semanal</p>
              <p>SafeTi App</p>
              <p>Descuento de 25% soporte técnico por hora</p>
              <h3>$ 199 + iva</h3>
              <button>
                <a href="https://qrforce.mx/beta/login_client?accountid=9&p=74">Contrátanos</a>
              </button>
            </article>
            <article className="tercerTipo">
              <h3>Safeti Pro</h3>
              <p>Instalación Inicial</p>
              <p>Fire Wall</p>
              <p>Antivirus</p>
              <p>Respaldo semanal</p>
              <p>
                Mantenimiento <br />
                preventivo trimestral
              </p>
              <p>SafeTi App</p>
              <p>Descuento de 35% soporte técnico por hora</p>
              <h3>$ 329 + iva</h3>
              <button>
                <a href="https://qrforce.mx/beta/login_client?accountid=9&p=53">Contrátanos</a>
              </button>
            </article>
          </div>
          <div className="contenedor cuenta">
            <h1>Crea tu cuenta SafeTi hoy</h1>
            <p>Crear y mantener tu inventario de computadoras con SafeTi es <b >totalmente gratis.</b >
            <br />Sin límite de tiempo y sin necesidad de ingresar tu tarjeta de crédito. </p>
            <button>
              <a href="https://qrforce.mx/beta/create-account-cte?accountid=9">Crear cuenta SafeTi</a>
            </button>
          </div>
        </section>
        <section className="contenedor funcionamiento" id="como">
          <h1>Cómo funciona</h1>
          <div className="pasos">
            <article>
              <img src={Elipse5} alt="Elipse" />

              <h3>Crea tu cuenta SafeTi </h3>
              <p>
                Desde tu cuenta podrás hacer inventario de tus equipos de 
                manera gratuita, contratar el paquete que más se acomode 
                a tus necesidades y solicitar soporte de uno de 
                nuestros técnicos especialistas.
              </p>
            </article>
            <article>
              <img src={Elipse6} alt="Elipse" />

              <h3>Contrata nuestro servicio</h3>
              <p>
                Mantén tu servicio al día para que las complicaciones se
                mantengan fuera de tu compañía.
              </p>
            </article>
            <article>
              <img src={Elipse7} alt="Elipse" />

              <h3>Disfruta de los beneficios</h3>
              <p>
                Al gozar de un equipo completo de TI podrás enfócarte en las
                áreas más importantes de tu empresa.
              </p>
            </article>
          </div>
        </section>
        <section className="contacto" id="contacto">
          <div className="contenedor contactanos">
            <div className="datos">
              <h1>Ponte en contacto con nosotros.</h1>
              <p>T.88 4657 234</p>
              <p>C.be@safeti.mx</p>
            </div>
            <div className="formulario">
              <form onSubmit={(e) => this.sendEmail(e)}>
                <input id="nombre" type="text" placeholder="Nombre" />
                <input id="tel" type="tel" placeholder="Teléfono" />
                <input id="correo" type="email" placeholder="Correo" />
                <textarea id="dudas" placeholder="Escribe tu mensaje aqui"></textarea>
                <div className="botonEnviar" id="botonEnviar">
                  <button type="submit">Contáctanos</button>
                  <span id="contenedorEnviar"></span>
                </div>
                <span id="contenedorEnviar"></span>
              </form>
            </div>
          </div>
        </section>
        <footer>
          <h5>©Safeti 2020 – <a href="/aviso">Aviso de privacidad</a></h5>
        </footer>
      </>
    );
  }
}
