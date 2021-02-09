import React, { Component } from "react";
import Navigation from "../components/Navigation.jsx";
import "swiper/swiper.scss";
import "../styles/Home.scss";
import tarjetas from "../assets/images/tarjetas.png";

export default class Home extends Component {


  componentDidMount(){
    var input = document.createElement("input");

    input.setAttribute("type", "hidden");
    input.setAttribute("name", "producto");
    input.setAttribute("id", "producto");

    var ul = document.getElementById("productos");
    var li = document.createElement("li");
    switch(this.props.location.search){
      case "?1":
        document.getElementById("precio").innerHTML = "$168.37";
        input.setAttribute("value", "basic");
        break;
      case "?2":
        document.getElementById("precio").innerHTML = "$194.88";
        li.appendChild(document.createTextNode("Respaldo semanal"));
        ul.appendChild(li);
        input.setAttribute("value", "bussiness");
        break;
      case "?3":
        document.getElementById("precio").innerHTML = "$330.60";
        li.appendChild(document.createTextNode("Respaldo semanal"));
        ul.appendChild(li);
        li = document.createElement("li");
        li.appendChild(document.createTextNode("Mantenimiento preventivo trimestral"));
        ul.appendChild(li);
        input.setAttribute("value", "pro");
        break;
      default:
        break;
    }  
    document.getElementById("card-form").appendChild(input);
  }

  changePrice = (e) => {
    let cantidad = document.getElementById("cantidad").value;
    let total;
    var formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    switch(this.props.location.search){
      case "?1":
        total = 168.37 * cantidad;
        document.getElementById("precio").innerHTML = formatter.format(total);
        document.getElementById("precioOriginal").value = 168.37;
        document.getElementById("precioTotal").value = formatter.format(total);
        break;
      case "?2":
        total = 194.88 * cantidad;
        document.getElementById("precio").innerHTML = formatter.format(total);
        document.getElementById("precioOriginal").value = 194.88;
        document.getElementById("precioTotal").value = formatter.format(total);
        break;
      case "?3":
        total = 330.60 * cantidad;
        document.getElementById("precio").innerHTML = formatter.format(total);
        document.getElementById("precioOriginal").value = 330.60;
        document.getElementById("precioTotal").value = formatter.format(total);
        break;
      default:
        break;
    }  
  }


  // sendPayment = (e) => {
  //   e.preventDefault();

  //   let formData = new FormData();

  //   formData.append("nombre", document.getElementById("nombre").value);
  //   formData.append("correo", document.getElementById("correo").value);
  //   formData.append("tel", document.getElementById("tel").value);
  //   formData.append("dudas", document.getElementById("dudas").value);

    
  //   fetch("/api/bindingConekta.php", {
  //     method: "POST",
  //     body: formData,
  //   })
  //     .then((res) => res.text())
  //     .then((response) => {
  //       if (response === "\n1"){
  //         document.getElementById("botonEnviar").innerHTML = "<p>Gracias por tu mensaje<p>";
  //       } else {
  //         document.getElementById("contenedorEnviar").innerHTML = '<p>Hubo un problema, revisa los campos.</p>';
  //       }
  //     });
  // };

  render() {
    return (
      <>
        <Navigation />
        <section className="pagos">
          <div className="contenedor">
            <div className="formularioPago">
              <form id="card-form">
                <input id="empresa" type="text" placeholder="Empresa" name="empresa" />
                <input id="rfc" type="text" placeholder="RFC"  name="rfc"/>
                <input id="correo" type="text" placeholder="Correo" name="correo"/>
                <input id="telefono" type="text" placeholder="Telefono" name="telefono"/>
                <input id="domicilio" type="text" placeholder="Domicilio Fiscal" name="domicilio" />
                <input id="nombre" type="text" data-conekta="card[name]" placeholder="Nombre en Tarjeta" name="nombre" />
                <input type="text" data-conekta="card[number]" placeholder="Número Tarjeta"/>
                <input type="text" size="4" data-conekta="card[cvc]"  placeholder="cvc"/>
                <div className="expDate"><input type="text" className="expiration" size="2" data-conekta="card[exp_month]" placeholder="Mes"/>
                <input type="text" size="4" data-conekta="card[exp_year]" placeholder="Año" /></div>
                {/* <button type="submit">Realizar Pago</button> */}
                <input type="hidden" id="precioOriginal"/>
                <input type="hidden" id="precioTotal"/>
                <input type="number" id="cantidad" min="1" max="50" placeholder="cantidad" onChange={(e) => this.changePrice(e)}></input>
                <span className="card-errors"></span>
              </form>
              
              <div className="datosPago">
                <h1>Total de compra</h1>
                <ul id="productos">
                  <li>Instalación Inicial</li>
                  <li>Fire Wall</li>
                  <li>Antivirus</li>
                  <li>SafeTi App</li>
                </ul>
                
                <p id="precio"></p>
                <img src={tarjetas} alt="" className="imagensita"></img>
                <button id="botonPago" type="submit" form="card-form" >Realizar Pago</button>
              </div>
              
            </div>
          </div>
        </section>
        <footer>
          <h5>©Safeti 2020 – Aviso de privacidad</h5>
        </footer>
      </>
    );
  }
}
