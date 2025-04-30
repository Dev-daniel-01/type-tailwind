"use client"

import Image from "next/image";
import { useState } from "react";
import { Menu } from "./components/menu";
import logoLp from "./assets/images/logoLP.png";

export default function Home() {
  const [aparecerVideo, setAparecerVideo] = useState(false);
  const [aparecerBotao, setAparecerBotao] = useState(false);

  return (
    <>
      <Menu option01="Início" option02="Personagens" />

      <section className="w-full min-h-80 h-full relative overflow-hidden">
        {/* <video autoPlay muted loop className={style.backgroundVideo}>
          <source src={luta} type="video/mp4" />
        </video> */}
        <div className="mt-[4.3rem] flex justify-center items-center flex-col">
          <Image
            src={logoLp}
            alt="logo"
            className="w-[300px] h-auto mb-2"
          />

          <div className="pt-[3%] flex justify-center items-center flex-col gap-4 p-3 rounded-[16px] mb-4 bg-[rgb(228,103,20)] shadow-[0_4px_12px_rgba(255,165,0,0.6)] transition-all duration-300 ease-in-out hover:scale-105">
            <p className="w-[85vw] text-center text-black">
              Durante o Torneio do Poder em "Dragon Ball Super", Goku enfrenta
              Jiren, o guerreiro mais forte do Universo 11. Em uma luta intensa
              e cheia de reviravoltas, Goku ultrapassa seus limites ao despertar
              o Instinto Superior, uma técnica que permite movimentos quase
              automáticos. Mesmo com o imenso poder de Jiren, Goku mostra seu
              espírito de luta incansável, resultando em uma das batalhas mais
              emocionantes de toda a franquia.
            </p>

            <button
              className="bg-[rgb(251,192,45)] text-black rounded-[8px] p-2 cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-[0_4px_8px_rgba(255,0,0,0.8)] hover:bg-orange-600"
              onClick={() => setAparecerBotao(true)}
            >
              Quero ver a luta!
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center pt-4 gap-4 rounded-[16px] p-2">
          {aparecerBotao && (
            <button
              className="bg-[rgb(251,192,45)] text-black rounded-[8px] p-2 cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-[0_4px_8px_rgba(255,0,0,0.8)] hover:bg-orange-600"
              onClick={() => setAparecerVideo(true)}
            >
              Tenho certeza de que quero ver!
            </button>
          )}

          {aparecerVideo && (
            <iframe
              width="90%"
              height="200"
              src="https://www.youtube.com/embed/mFoOlpKQiMk?si=9qOW0fnxcX56vi06"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </section>
    </>
  );
}
