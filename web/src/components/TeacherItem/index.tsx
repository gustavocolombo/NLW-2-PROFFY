import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

export default function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars3.githubusercontent.com/u/66711378?s=400&u=1892f3e33fa834fb432991d37145567f42a6212c&v=4"
          alt="Gustavo Colombo"
        />
        <div>
          <strong>Gustavo Colombo</strong>
          <span>Matemática Discreta</span>
        </div>
      </header>

      <p>Cada dia mais interessado em ajudar pessoas e resolver problemas matemáticos!</p>
      <p>Apaixonado por Teoremas</p>
      <footer>
        <p>
          Preço/hora:
          <strong>R$ 85,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp Ícone" />
          Entrar em Contato
        </button>
      </footer>
    </article>
  );
}