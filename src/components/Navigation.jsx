import React, { Component } from "react";
import Logo from "../assets/images/safetilogo.png";
import "../styles/Navigation.scss";
import Menu from "../assets/images/menu.png";



export default class Navigation extends Component {
  showMenu = () => {
    let menu = document.getElementById("menuMovil"); 
    if (menu.style.display === "" || menu.style.display === "none") {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
  };

  render() {
    return (
      <>
        <nav>
          <div className="contenedorNav">
            <a href="https://safeti.mx">
              <img src={Logo} alt="" />
            </a>
            <div className="contenedorEnlaces">
              <ul>
                <li>
                  <a href="../#servicios">Servicios</a>
                </li>
                <li>
                  <a href="../#como">Como funciona</a>
                </li>
                {/* <li>
                  <a href="../#nosotros">Nosotros</a>
                </li> */}
                <li>
                <a href="../#contacto"><strong>Contacto</strong></a>
                </li>
                <li>
                <a href="https://qrforce.mx/beta/login_client?accountid=9&p=74" className="loginColor"><strong>Login</strong></a>
                </li>
                <li>
                  <button>
                    <a href="https://qrforce.mx/beta/create-account-cte?accountid=9">Crea tu Cuenta</a>
                  </button>
                </li>
              </ul>
            </div>
            <div className="contenedorMovil">
              <button onClick={(e) => this.showMenu()}>
                <img src={Menu} alt="Menu" />
              </button>
              <ul id="menuMovil">
              <li>
                  <a href="../#servicios">Servicios</a>
                </li>
                <li>
                  <a href="../#como">Como funciona</a>
                </li>
                <li>
                  <a href="../#nosotros">Nosotros</a>
                </li>
                <li>
                <a href="../#contacto"><strong>Contacto</strong></a>
                </li>
                <li>
                <a href="https://qrforce.mx/beta/login_client?accountid=9&p=74" className="loginColor"><strong>Login</strong></a>
                </li>
                <li>
                  <button>
                    <a href="https://qrforce.mx/beta/create-account-cte?accountid=9">Crea tu Cuenta</a>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
