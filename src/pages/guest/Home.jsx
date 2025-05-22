import React, { useState } from "react";
import Footer from "../../components-guest/Footer";

export default function Home() {
  return (
    <div className="relative bg-black">
      <div className="lg:hidden">
        <img
          className="object-cover object-left w-full h-72 opacity-50"
          src="https://cdn.rareblocks.xyz/collection/bakerstreet/images/hero/6/bg-mobile.png"
          alt=""
        />
      </div>

      <div className="px-6 py-16 mx-auto sm:px-8 lg:px-12 max-w-7xl min-h-screen">
        <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h1 className="font-sans text-base font-normal tracking-tight text-white text-opacity-70">
              Dapatkan Diskon hari raya
            </h1>
            <p className="mt-6 tracking-tighter text-white">
              <span className="font-sans font-normal text-5xl sm:text-6xl">
                Restoran Halal
              </span>
              <br />
              <span className="font-serif italic font-normal text-6xl sm:text-7xl">
                Cepat Saji SEDAP
              </span>
            </p>
            <p className="mt-8 font-sans text-base font-normal leading-7 text-white text-opacity-70">
              Restoran cepat saji yang halal, bergizi, mantap, enak, semua orang
              suka! Jangan sampai ketinggalan untuk mencobanya juga yaa.. Kalau
              enggak, rugi banget lhooo..
            </p>
          </div>

          <div className="hidden lg:block">
            <img
              className="w-full mx-auto"
              src="https://cdn.rareblocks.xyz/collection/bakerstreet/images/hero/6/background.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
