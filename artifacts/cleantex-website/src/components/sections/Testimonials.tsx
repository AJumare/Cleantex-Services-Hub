import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Amaka O.",
    role: "Office Manager",
    text: "Cleantex did an outstanding job with our office deep clean. Very professional, thorough, and completely transformed our workspace. We'll definitely use them again!",
    rating: 5,
  },
  {
    name: "Emeka C.",
    role: "Homeowner, Abuja",
    text: "The fumigation was incredibly effective and the team was courteous. No more pests! They explained the process clearly and made sure my family was safe.",
    rating: 5,
  },
  {
    name: "Fatima A.",
    role: "Resident",
    text: "My carpets look brand new after their cleaning service. The stubborn stains are gone and the house smells incredibly fresh. Highly recommend their services!",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">Client Reviews</h2>
          <h3 className="text-4xl md:text-5xl font-display font-extrabold text-foreground mb-6">What Our Clients Say</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-3xl p-8 border border-border shadow-sm relative"
            >
              <Quote className="absolute top-6 right-8 text-accent opacity-50" size={48} />
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              
              <p className="text-foreground/80 mb-8 leading-relaxed italic relative z-10">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-4 border-t border-border pt-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
