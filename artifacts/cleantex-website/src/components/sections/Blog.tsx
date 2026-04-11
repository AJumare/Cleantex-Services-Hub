import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, MessageCircle } from "lucide-react";
import { Link } from "wouter";
import { blogPosts } from "@/data/blogPosts";

const previewPosts = blogPosts.slice(0, 4);

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
    <section id="blog" className="pt-10 pb-24 bg-white">
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
          {previewPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={item}
              className="bg-background rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col"
            >
              <Link href={`/blog/${post.slug}`} className="block relative overflow-hidden aspect-[16/10]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary text-white text-xs font-semibold">
                  {post.category}
                </span>
              </Link>

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

                <Link href={`/blog/${post.slug}`}>
                  <h4 className="font-bold text-foreground text-base leading-snug mb-3 group-hover:text-primary transition-colors flex-1 cursor-pointer">
                    {post.title}
                  </h4>
                </Link>

                <p className="text-muted-foreground text-sm leading-relaxed mb-5 line-clamp-3">
                  {post.excerpt}
                </p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 text-primary font-semibold text-sm hover:gap-2 transition-all"
                >
                  Read more <ArrowRight size={14} />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="text-center mt-12 flex flex-col items-center gap-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold text-base shadow-lg shadow-primary/20 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30 transition-all duration-200"
          >
            See All Articles
            <ArrowRight size={18} />
          </Link>
          <a
            href="https://wa.me/2348064551684"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <MessageCircle size={14} />
            Have a question? Chat with us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
