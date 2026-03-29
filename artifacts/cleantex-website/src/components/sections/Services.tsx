import { motion } from "framer-motion";
import { Sparkles, Bug, HardHat, Shirt, Home, SprayCan } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Carpet & Upholstery",
    description: "Deep steam cleaning of carpets, sofas, chairs and fabric surfaces. Removes stains, allergens and odours.",
    icon: Sparkles,
    popular: true,
  },
  {
    id: 2,
    title: "Deep Cleaning",
    description: "Thorough top-to-bottom cleaning of homes, offices and commercial spaces. We leave no corner untouched.",
    icon: SprayCan,
  },
  {
    id: 3,
    title: "Fumigation & Pest Control",
    description: "Effective elimination of cockroaches, rodents, termites, mosquitoes, and all pests. Safe for families and pets.",
    icon: Bug,
  },
  {
    id: 4,
    title: "Post-Construction",
    description: "Removal of construction dust, debris and waste. We prepare your newly built or renovated space for immediate use.",
    icon: HardHat,
  },
  {
    id: 5,
    title: "Laundry Services",
    description: "Professional washing, drying, ironing and folding of clothes, curtains, linens and more with premium care.",
    icon: Shirt,
  },
  {
    id: 6,
    title: "Residential Cleaning",
    description: "Regular cleaning schedules for homes — daily, weekly or monthly. We keep your personal space consistently spotless.",
    icon: Home,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">What We Do</h2>
          <h3 className="text-4xl md:text-5xl font-display font-extrabold text-foreground mb-6">Our Services</h3>
          <p className="text-lg text-muted-foreground">
            Comprehensive environmental solutions tailored to your specific needs, delivered with precision and professional care.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={item}
              className={`rounded-3xl p-8 border transition-all duration-300 group relative overflow-hidden ${
                service.popular
                  ? "bg-primary border-primary shadow-2xl shadow-primary/30 scale-105 hover:shadow-3xl hover:-translate-y-1"
                  : "bg-background border-border shadow-sm hover:shadow-xl hover:border-primary/30"
              }`}
            >
              {service.popular && (
                <div className="absolute top-5 right-5">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold tracking-wide uppercase backdrop-blur-sm">
                    ⭐ Most Popular
                  </span>
                </div>
              )}

              {!service.popular && (
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-gradient-to-br from-accent to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"></div>
              )}
              
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 shadow-sm ${
                service.popular
                  ? "bg-white/20 text-white group-hover:bg-white/30 group-hover:scale-110"
                  : "bg-accent text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white"
              }`}>
                <service.icon size={28} strokeWidth={2} />
              </div>
              
              <h4 className={`text-xl font-bold mb-3 ${service.popular ? "text-white" : "text-foreground"}`}>
                {service.title}
              </h4>
              <p className={`leading-relaxed ${service.popular ? "text-white/80" : "text-muted-foreground"}`}>
                {service.description}
              </p>
              
              <div className={`mt-6 flex items-center font-semibold text-sm transition-all cursor-pointer ${
                service.popular ? "text-white/90" : "text-primary"
              }`}>
                <span>Learn more</span>
                <ArrowRight size={16} className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Ensure ArrowRight is imported at top
import { ArrowRight } from "lucide-react";
