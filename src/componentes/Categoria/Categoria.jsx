import Image from "next/image";
import estilos from "./Categoria.module.css";
import icone from "@/data/dados/icone.js";

export default function Categoria(props) {
  return (
    <section className={estilos.container_categoria}>
      <button
        className={
          props.botaoClicado === "Entradas"
            ? estilos.acenderBtn
            : estilos.apagarBtn
        }
        onClick={() => props.onclickFilter("Entradas")}
      >
        <Image src={icone.Entrada} alt="icone entrada" />
        <span>Entradas</span>
      </button>
      <button
        className={
          props.botaoClicado === "Massas"
            ? estilos.acenderBtn
            : estilos.apagarBtn
        }
        onClick={() => props.onclickFilter("Massas")}
      >
        <Image src={icone.Massa} alt="icone entrada" />
        <span>Massas</span>
      </button>
      <button
        className={
          props.botaoClicado === "Carnes"
            ? estilos.acenderBtn
            : estilos.apagarBtn
        }
        onClick={() => props.onclickFilter("Carnes")}
      >
        <Image src={icone.Carne} alt="icone entrada" />
        <span>Carne</span>
      </button>
      <button
        className={
          props.botaoClicado === "Bebidas"
            ? estilos.acenderBtn
            : estilos.apagarBtn
        }
        onClick={() => props.onclickFilter("Bebidas")}
      >
        <Image src={icone.Bebidas} alt="icone entrada" />
        <span>Bebidas</span>
      </button>
      <button
        className={
          props.botaoClicado === "Saladas"
            ? estilos.acenderBtn
            : estilos.apagarBtn
        }
        onClick={() => props.onclickFilter("Saladas")}
      >
       <Image src={icone.Saladas} alt="icone entrada" />
        <span>Saladas</span>
      </button>
      <button
        className={
          props.botaoClicado === "Sobremesas"
            ? estilos.acenderBtn
            : estilos.apagarBtn
        }
        onClick={() => props.onclickFilter("Sobremesas")}
      >
        <Image src={icone.Sobremessas} alt="icone entrada" />
        <span>Sobremessas</span>
      </button>
    </section>
  );
}
