import { motion } from "framer-motion";
import { Users, Leaf, Clock, BadgeCheck, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

const carouselImages = [
  { src: "/images/carousel-1.jpg", alt: "Cleantex technician cleaning light fixture" },
  { src: "/images/carousel-2.jpg", alt: "Cleantex team cleaning large carpet" },
  { src: "/images/carousel-3.jpg", alt: "Carpet before and after deep cleaning" },
  { src: "/images/carousel-4.jpg", alt: "Cleantex technician servicing air conditioning unit" },
  { src: "/images/carousel-5.jpg", alt: "Cleantex technician cleaning sofa upholstery" },
  { src: "/images/carousel-6.jpg", alt: "Cleantex technician cleaning ceiling lights" },
  { src: "/images/carousel-7.jpg", alt: "Kitchen surface before and after cleaning" },
  { src: "/images/carousel-8.jpg", alt: "Cleantex technician cleaning sofa with machine" },
  { src: "/images/carousel-9.jpg", alt: "Cleantex fumigation technician fogging" },
  { src: "/images/carousel-10.jpg", alt: "Carpet deep cleaning with brush machine" },
  { src: "/images/carousel-11.jpg", alt: "Cleantex pest control technician with sprayer" },
];

const reasons = [
  {
    title: "Experienced & Trained Staff",
    description: "Our team is professionally trained, thoroughly background-checked, and always uniformed for your security and peace of mind.",
    icon: Users,
  },
  {
    title: "Eco-Friendly Products",
    description: "We use safe, non-toxic and environmentally responsible cleaning agents that protect your family, pets, and the planet.",
    icon: Leaf,
  },
  {
    title: "Reliable & Punctual",
    description: "We show up on time, every time. Your schedule is our priority, and we pride ourselves on efficient, timely service delivery.",
    icon: Clock,
  },
  {
    title: "Affordable & Transparent",
    description: "Competitive rates without compromising on quality. We offer flexible packages with no hidden fees or surprise charges.",
    icon: BadgeCheck,
  },
];

export function WhyChooseUs() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % carouselImages.length);
  }, []);

  const prev = () => {
    setCurrent((c) => (c - 1 + carouselImages.length) % carouselImages.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="why-us" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[800px] bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">The Cleantex Difference</h2>
            <h3 className="text-4xl md:text-5xl font-display font-extrabold text-foreground mb-6 leading-tight">
              Why Choose Cleantex?
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              We don't just clean; we care. Our commitment to excellence, environmental safety, and customer satisfaction sets us apart as Abuja's premier environmental services company.
            </p>
            
            {/* Image carousel */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] group">
              {carouselImages.map((img, i) => (
                <img
                  key={i}
                  src={img.src}
                  alt={img.alt}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0"}`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

              {/* Prev / Next buttons */}
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow hover:bg-white transition-colors opacity-0 group-hover:opacity-100"
                aria-label="Previous image"
              >
                <ChevronLeft size={18} className="text-foreground" />
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow hover:bg-white transition-colors opacity-0 group-hover:opacity-100"
                aria-label="Next image"
              >
                <ChevronRight size={18} className="text-foreground" />
              </button>

              {/* Dot indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {carouselImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-white w-5" : "bg-white/50"}`}
                    aria-label={`Go to image ${i + 1}`}
                  />
                ))}
              </div>

              {/* Badge */}
              <div className="absolute bottom-10 left-6">
                <div className="bg-white/90 backdrop-blur-md p-3 rounded-xl inline-flex items-center gap-3">
                  <div className="bg-primary text-white p-2 rounded-lg">
                    <BadgeCheck size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-sm">100% Satisfaction</p>
                    <p className="text-xs text-muted-foreground">Guaranteed Results</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-lg shadow-black/5 border border-border/50 hover:-translate-y-1 transition-transform"
              >
                <div className="w-12 h-12 rounded-full bg-accent/50 flex items-center justify-center text-primary mb-6">
                  <reason.icon size={24} strokeWidth={2.5} />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3">{reason.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
