import Image from "next/image";
import estilos from "./Card.module.css";

export default function Card(props) {
  return (
    <div className={estilos.container_card}>
      <figure><Image src={props.imagem} /></figure>
      <div >
        <div className={estilos.container_card_textos}>
          <h3>{props.subtitulo}</h3>
          <small>{props.texto}</small>
          <p>{props.paragrafo}</p>
        </div>
        <div className={estilos.container_span}>
          <span>{new Intl.NumberFormat("pt-br", {style: "currency", currency: "BRL"}).format(props.preco)}</span>
        </div>
      </div>
    </div>
  );
}
