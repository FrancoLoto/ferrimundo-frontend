import Image from "next/image"

const Guide = () => {
    return(
        <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <Image src="/herramientas2.svg" alt="herramientas" width={150} height={100} />
        <p className="uppercase lg:text-lg font-extrabold -mt-3 mb-3 text-red-600">
          Construyendo juntos
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">Guiando sus pasos</h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">En nuestra ferretería, estamos comprometidos a guiarte en cada paso de tu proyecto, desde el inicio hasta la finalización.
          Ya sea que estés embarcándote en una renovación de tu hogar, un proyecto de construcción o simplemente necesites ayuda para un pequeño trabajo de bricolaje, nuestro equipo de expertos está aquí para proporcionarte el apoyo y los consejos que necesitas. Nos esforzamos por ser más que una simple ferretería; somos tu socio en cada paso del camino hacia el éxito de tu proyecto.</p>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full">
        <Image 
          src="/img-3.png"
          alt="boat"
          width={1440}
          height={580}
          className="w-full object-cover blur-[6px] object-center 2xl:rounded-5xl"
        />

        <div className="absolute flex items-center justify-center bg-gray-90 py-8 pl-5 pr-7 gap-3 rounded-3xl shadow-xl">
          <div className="flexBetween flex-col">
            <div className='flex w-full flex-col'>
              
              <p className="bold-20 mt-1 mb-6 text-white regular-20">Pedí tu presupuesto</p>
            </div>

            <div className='flex items-center justify-center w-full flex-col'>
              <a href="/" target="_blank" rel="noopener noreferrer">
                <Image src="/whatsapp.svg" alt="Whatsapp logo" width={60} height={60} className="w-12 lg:w-16"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}

export default Guide