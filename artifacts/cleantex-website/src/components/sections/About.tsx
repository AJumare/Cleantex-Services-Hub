import { motion } from "framer-motion";

const stats = [
  { value: "500+", label: "Happy Clients" },
  { value: "5+", label: "Years Experience" },
  { value: "10+", label: "Services" },
  { value: "100%", label: "Satisfaction" },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-accent font-bold tracking-widest uppercase text-sm mb-3">Our Story</h2>
            <h3 className="text-4xl md:text-5xl font-display font-extrabold mb-6">
              About Cleantex Environmental Services
            </h3>
            <div className="space-y-6 text-primary-foreground/90 text-lg leading-relaxed">
              <p>
                Cleantex Environmental Services Limited is a leading cleaning and pest control company based in Abuja, Nigeria. We are dedicated to providing top-tier cleaning, fumigation and environmental services to residential and commercial clients across the capital territory.
              </p>
              <p>
                Our mission is to create healthier, cleaner and pest-free environments through professional expertise, high-quality products, and reliable service delivery. We believe that a clean space is fundamental to well-being and productivity.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4 sm:gap-6"
          >
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-3xl text-center hover:bg-white/15 transition-colors"
              >
                <div className="text-4xl sm:text-5xl font-display font-extrabold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base font-medium text-accent">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
