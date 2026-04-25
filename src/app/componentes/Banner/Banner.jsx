
import estilo from "./Banner.module.css";
import React from "react";

export default function Banner() {
  console.log("Componente Banner carregado!");
  return (
    <div className={estilo.banner}>
      <h1 className={estilo.titulo}>BARBEARIA</h1>
    </div>
  );
}
