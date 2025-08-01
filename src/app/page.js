"use client";
import Image from "next/image";
import estilos from "./page.module.css";
import Categoria from "@/componentes/Categoria/Categoria";
import CampoBusca from "@/componentes/CampoBusca/CampoBusca";
import Card from "@/componentes/Card/Card";
import Banner from "/public/banner.png";
import { produtosEntradas } from "@/services";
import { useState } from "react";
import { filtrarProdutos, buscarProdutos } from "@/services";

export default function Home() {
  const [dadosFiltrados, setDadosFiltrados] = useState(produtosEntradas);
  const [botaoClicado, setBotaoClicado] = useState("Entrada");
  const [textoDigitado, setTextoDigitado] = useState("");
  function handleFiltrarProduto(categoria) {
    setTextoDigitado("");
    setDadosFiltrados(filtrarProdutos(categoria));
    setBotaoClicado(categoria);
  }
  function handleBuscarProduto(textoDigitado) {
    setTextoDigitado(textoDigitado);
    textoDigitado.length >= 3 &&
      setDadosFiltrados(buscarProdutos(textoDigitado));
    setBotaoClicado("");
  }
  return (
    <div className={estilos.container}>
      <header className={estilos.header}>
        <Image src={Banner} alt="Banner do site" />
        <div className={estilos.header_textos}>
          <h1>RESTAURANT</h1>
          <p>
            De pratos clássicos a criações surpreendentes, nosso cardápio é um
            requinte de sabores refinados
          </p>
        </div>
      </header>
      <main className={estilos.conteudo_principal}>
        <Categoria
          onclickFilter={handleFiltrarProduto}
          botaoClicado={botaoClicado}
        />
        <CampoBusca
          onchangeBusca={handleBuscarProduto}
          textoDigitado={textoDigitado}
        />
        <section>
          <h2>Cardapio</h2>
          <div className={estilos.container_card}>
            {dadosFiltrados.map((prod) => (
              <Card
                key={prod.id}
                imagem={prod.imagem}
                subtitulo={prod.nome}
                texto={prod.categoria}
                paragrafo={prod.descricao}
                preco={prod.preco}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
