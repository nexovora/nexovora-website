import { detailedServices } from "../../data/servicesPageData";
import ServiceCard from "./ServiceCard";

function ServicesGrid() {
  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
            What We Do
          </p>

          <h2 className="font-heading mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
            Our Services
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            Professional digital services carefully designed to support your
            goals and improve your digital presence.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {detailedServices.map((service, index) => (
            <ServiceCard
              key={service.id}
              {...service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesGrid;