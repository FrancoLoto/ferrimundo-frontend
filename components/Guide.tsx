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
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">Guiando tus pasos</h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">Only with the hilink application you will no longer get lost and get lost again, because we already support offline maps when there is no internet connection in the field. Invite your friends, relatives and friends to have fun in the wilderness through the valley and reach the top of the mountain</p>
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
              
              <p className="bold-20 mt-2 text-white">Pida su presupuesto</p>
              <span className="bold-20 text-white text-center mb-4">por Whatsapp</span>
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