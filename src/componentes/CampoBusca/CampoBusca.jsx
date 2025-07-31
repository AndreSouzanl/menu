import Image from "next/image";
import Lupa from "/public/lupa.png";
import estilos from "./CampoBusca.module.css";

export default function CampoBusca(props) {
  return (
    <div className={estilos.container_input}>
      <Image src={Lupa} alt="icone lupa" />
      <input
        value={props.textoDigitado}
        onChange={(e) => props.onchangeBusca(e.target.value)}
        type="text"
        placeholder="Pesquise aqui um dos pratos do nosso cardápio"
      />
    </div>
  );
}
