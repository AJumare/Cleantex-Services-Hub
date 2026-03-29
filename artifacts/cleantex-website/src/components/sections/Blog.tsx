import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const posts = [
  {
    id: 1,
    category: "Cleaning Tips",
    title: "How Often Should You Deep Clean Your Home in Abuja?",
    excerpt: "Abuja's dust and harmattan season can cause rapid buildup of allergens and grime. Here's a practical schedule to keep your home spotless year-round.",
    date: "March 15, 2025",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1527515545081-5db817172677?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    category: "Pest Control",
    title: "5 Warning Signs You Need Professional Fumigation Right Now",
    excerpt: "From unexplained droppings to strange odours, don't ignore these red flags. Catching a pest problem early saves you time, money and stress.",
    date: "February 28, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1584813470613-5b1c1cad3d69?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    category: "Post-Construction",
    title: "Why Post-Construction Cleaning Is Essential Before Moving In",
    excerpt: "Cement dust, paint residue and construction debris are more harmful than they look. Discover why professional cleaning makes your new space truly ready.",
    date: "January 20, 2025",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 4,
    category: "Carpet Care",
    title: "Protecting Your Carpets & Upholstery During Rainy Season",
    excerpt: "Nigeria's wet season brings mud, humidity and mould risk. Learn professional tips for keeping your fabrics fresh and mould-free all through the rains.",
    date: "December 10, 2024",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export function Blog() {
  return (
    <section id="blog" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">Insights & Tips</h2>
          <h3 className="text-4xl md:text-5xl font-display font-extrabold text-foreground mb-6">
            Our Blog
          </h3>
          <p className="text-lg text-muted-foreground">
            Expert advice on cleaning, pest control, and maintaining a healthy environment — straight from the Cleantex team.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7"
        >
          {posts.map((post) => (
            <motion.article
              key={post.id}
              variants={item}
              className="bg-background rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col"
            >
              <div className="relative overflow-hidden aspect-[16/10]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary text-white text-xs font-semibold">
                  {post.category}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={12} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={12} />
                    {post.readTime}
                  </span>
                </div>

                <h4 className="font-bold text-foreground text-base leading-snug mb-3 group-hover:text-primary transition-colors flex-1">
                  {post.title}
                </h4>

                <p className="text-muted-foreground text-sm leading-relaxed mb-5 line-clamp-3">
                  {post.excerpt}
                </p>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-primary font-semibold text-sm hover:gap-2 transition-all"
                >
                  Read more <ArrowRight size={14} />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-all duration-200"
          >
            Get Cleaning Advice
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
