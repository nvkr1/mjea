import React from "react";
import altex from "../assets/img/altex.png";
import capex from "../assets/logos/Capex/capexEdited.png";
import complex from "../assets/logos/Complex/Logo-black.png";
import corex from "../assets/img/corex.png";
import denode from "../assets/logos/Denode Logo/White-base.png";
import idax from "../assets/img/logo-dark.png";
import nce from "../assets/img/nce.png";
import octagon from "../assets/img/octagon.png";
import trade from "../assets/img/trade.svg";
import xmeta from "../assets/img/x-meta.png";
import zoos from "../assets/img/zoosdigital.png";
import coinhub from "../assets/img/coinhub.png";

export default function Partners() {
  return (
    <div id='partners' className='container mx-auto px-4 my-32 space-y-5'>
      <h1 className='text-[#09426C] font-[Roboto] font-bold text-2xl md:text-3xl mb-20'>
        ГИШҮҮН БАЙГУУЛЛАГУУД
      </h1>
      <div className='flex flex-col gap-y-16 justify-center'>
        <div className='flex items-center justify-between'>
          <a href='https://www.idax.exchange' target='_blank'>
            <img
              src={idax}
              alt=''
              className='w-12 sm:w-20 lg:w-32 mx-2 sm:mx-5'
            />
          </a>
          <a href='https://denode.io' target='_blank'>
            <img src={denode} alt='' className='w-16 sm:w-32 lg:w-52' />
          </a>
          <a href='https://trade.mn' target='_blank'>
            <img src={trade} alt='' className='w-16 sm:w-32 lg:w-48' />
          </a>
          <a href='https://zoos.digital' target='_blank'>
            <img
              src={zoos}
              alt=''
              className='w-12 sm:w-24 lg:w-36 mx-3 sm:mx-7'
            />
          </a>
        </div>
        <div className='flex items-center justify-between'>
          <a href='https://www.x-meta.com' target='_blank'>
            <img src={xmeta} alt='' className='w-16 sm:w-32 lg:w-48' />
          </a>
          <a href='https://capex.mn' target='_blank'>
            <img src={capex} alt='' className='w-14 sm:w-28 lg:w-40' />
          </a>
          <a href='https://www.coinhub.mn' target='_blank'>
            <img src={coinhub} alt='' className='w-16 sm:w-32 lg:w-48' />
          </a>
          <a href='https://complex.mn' target='_blank'>
            <img src={complex} alt='' className='w-16 sm:w-32 lg:w-48' />
          </a>
        </div>
        <div className='w-full flex items-center justify-between'>
          <a href='https://www.corex.mn' target='_blank'>
            <img src={corex} alt='' className='w-16 sm:w-32 lg:w-48' />
          </a>
          <a href='https://ncx.mn' target='_blank'>
            <img src={nce} alt='' className='w-16 sm:w-32 lg:w-48' />
          </a>
          <a href='https://octagon.mn' target='_blank'>
            <img src={octagon} alt='' className='w-20 sm:w-32 lg:w-64' />
          </a>
          <a href='https://altex.mn' target='_blank'>
            <img src={altex} alt='' className='w-16 sm:w-32 lg:w-48' />
          </a>
        </div>
      </div>
    </div>
  );
}
