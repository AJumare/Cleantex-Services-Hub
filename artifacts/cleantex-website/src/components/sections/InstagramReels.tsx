import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

const reels = [
  "DVgGP50jNjF",
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export function InstagramReels() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-accent/30">
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

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className={`flex flex-wrap justify-center gap-6`}
        >
          {reels.map((shortcode) => (
            <motion.div
              key={shortcode}
              variants={item}
              className="rounded-3xl overflow-hidden shadow-lg border border-border bg-white"
              style={{ width: 328 }}
            >
              <iframe
                src={`https://www.instagram.com/reel/${shortcode}/embed/`}
                width="328"
                height="560"
                frameBorder="0"
                scrolling="no"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                title="Cleantex Instagram Reel"
                className="block"
              />
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <a
            href="https://www.instagram.com/cleantexnigeria"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white font-semibold shadow-lg hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200"
          >
            <Instagram size={18} />
            Follow @Cleantexnigeria
          </a>
        </div>
      </div>
    </section>
  );
}
