import { motion } from "framer-motion";
import { Users, Leaf, Clock, BadgeCheck } from "lucide-react";

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
            
            {/* Stock image via Unsplash for visual context */}
            {/* professional cleaners in uniform */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop" 
                alt="Professional cleaning service" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-md p-4 rounded-xl inline-flex items-center gap-4">
                  <div className="bg-primary text-white p-3 rounded-lg">
                    <BadgeCheck size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">100% Satisfaction</p>
                    <p className="text-sm text-muted-foreground">Guaranteed Results</p>
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
