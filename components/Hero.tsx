"use client"
import { useState } from "react";
import Image from "next/image";

const Hero = () => {
  const [showLocation, setShowLocation] = useState(true);

  const handleLocationClose = () => {
    setShowLocation(false);
  }

  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map"/>

        {/* IZQUIERDA */}
        <div className="relative z-20 flex flex-col xl:w-1/2">
          <h1 className="bold-52 lg:bold-88 text-focus-in">Herramientas para un mundo mejor</h1>
          <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
            Lorem ipsum loremm ipsum lorem ipsum loremm ipsumm loremm ipsum lorem ipsum lorem ipsum
          </p>
  
        </div>

        {/* DERECHA */}
        <div className="relative flex flex-1 items-start bounce-in-top">
          {showLocation && (
          <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-gray-90 px-7 py-8">
            <div className="flex flex-col">
              <div className="flexBetween">
                <p className="rergular-16 text-gray-20 -mb-1.5">Ubicación</p>
                <button onClick={handleLocationClose} className="mb-3">
                  <Image src="/close.svg" alt="close icon" width={24} height={24}/>
                </button>
              </div>
              <a href="https://maps.app.goo.gl/b2Yp8tpyfeYvdpcx6" target="_blank" rel="noopener noreferrer">
                <p className="bold-20 text-white">Avda. San Martín y A. Brown</p>
              </a>
              </div>
              <div className="flexBetween">
                <div className="flex flex-col">
                  <div className="regular-16 block  text-gray-20">
                    
                  </div>
                  <p className="bold-20 text-white">General Conesa, Río Negro, Argentina</p>
                </div>
                
              </div>
          </div>
          )}
        </div>
    </section>
  )
}

export default Hero