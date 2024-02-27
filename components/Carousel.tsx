import Image from "next/image";

interface CarouselProps {
    backgroundImage: string
    title?: string
    subtitle?: string
}

const CarouselSite = ({ backgroundImage, title, subtitle}: CarouselProps) => {
    return(
        <div className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}>
     <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
      <div className="flexCenter gap-4">
        <div className="rounded-full bg-red-90 py-2 px-2">
        <Image
            src="/ferreteria.svg"
            alt="map"
            width={40}
            height={22}
          />
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="bold-18 text-white">{title}</h4>
          <p className="regular-14 text-white">{subtitle}</p>
        </div>
      </div>

      <div className="flexCenter gap-6">
        <span className="flex -space-x-4 overflow-hidden">
          
        </span>
        
      </div>
     </div>
    </div>
    )
}

const Carousel = () => {
    return(
        <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <CarouselSite 
          backgroundImage="bg-bg-img-1"
          title="Herramientas"
          subtitle="Palas, mangueras, baldes, guantes."
        />
        <CarouselSite 
          backgroundImage="bg-bg-img-2"
          title="Materiales"
          subtitle="Ladrillos, cemento, caños, "
        />
      </div>

      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-red-90 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <strong>Feeling Lost</strong> And Not Knowing The Way?
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
            Starting from the anxiety of the climbers when visiting a new climbing location, the possibility of getting lost is very large. That's why we are here for those of you who want to start an adventure
          </p>
          
        </div>
      </div>
    </section>
    )
}

export default Carousel