import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

const reels = [
  "DVgGP50jNjF",
  "DNVgTovIXqO",
  "DJWetxAIU4T",
];

export function InstagramReels() {
  return (
    <section id="reels" className="py-24 bg-gradient-to-b from-white to-accent/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">See Our Work</h2>
          <h3 className="text-4xl md:text-5xl font-display font-extrabold text-foreground mb-5">
            Watch Us in Action
          </h3>
          <p className="text-lg text-muted-foreground">
            Real jobs. Real results. Follow us on Instagram to see more of our work across Abuja.
          </p>
        </div>

        {/* Horizontal scroll carousel */}
        <div className="overflow-x-auto pb-4 -mx-4 px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="flex gap-6 w-max mx-auto"
          >
            {reels.map((shortcode, i) => (
              <motion.div
                key={shortcode}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.4 }}
                className="rounded-3xl overflow-hidden shadow-lg border border-border bg-white flex-shrink-0 flex flex-col"
                style={{ width: 308 }}
              >
                {/* Crop the Instagram embed header (~56px) at the top */}
                <div className="overflow-hidden" style={{ height: 360 }}>
                  <iframe
                    src={`https://www.instagram.com/reel/${shortcode}/embed/`}
                    width="308"
                    height="540"
                    frameBorder="0"
                    scrolling="no"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                    title="Cleantex Instagram Reel"
                    className="block"
                    style={{ marginTop: -56 }}
                  />
                </div>

                {/* Follow CTA per card */}
                <a
                  href="https://www.instagram.com/cleantexnigeria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-4 text-sm font-semibold text-pink-600 hover:text-pink-700 transition-colors border-t border-border"
                >
                  <Instagram size={15} />
                  Follow @Cleantexnigeria
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
