import Button from "../components/Button"

const SuperQuality = () => {
  return (
    <section
    id='about-us'
    className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">

      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You
          <span className="text-coral-red"> Super </span>
          <span className="text-coral-red"> Quality </span>
          <span className="text-coral-red inline-block mt-3"></span> Shoes      
        </h2>
        <p className="font-montserrat text-slate-grey text-lg leading-8 w-full mt-20 gap-16">Discover stylish Nike arrivals, quality comfort, and innovation for your active life</p>
        <Button label = 'View details'/>
      </div>

    </section>
  )
}

export default SuperQuality