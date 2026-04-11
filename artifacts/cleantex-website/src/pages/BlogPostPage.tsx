import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, ArrowRight, MessageCircle } from "lucide-react";
import { Link, useParams } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { blogPosts } from "@/data/blogPosts";

function renderContent(content: string) {
  const lines = content.split("\n");
  const elements: JSX.Element[] = [];
  let key = 0;

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) {
      key++;
      continue;
    }
    if (trimmed.startsWith("## ")) {
      elements.push(
        <h2 key={key++} className="text-2xl font-bold text-foreground mt-10 mb-4">
          {trimmed.slice(3)}
        </h2>
      );
    } else if (trimmed.startsWith("**") && trimmed.endsWith("**") && !trimmed.slice(2, -2).includes("**")) {
      elements.push(
        <p key={key++} className="font-semibold text-foreground mt-4 mb-1">
          {trimmed.slice(2, -2)}
        </p>
      );
    } else if (trimmed.startsWith("- ")) {
      elements.push(
        <li key={key++} className="ml-5 list-disc text-foreground/80 leading-relaxed">
          {trimmed.slice(2)}
        </li>
      );
    } else {
      // handle inline bold within paragraphs
      const parts = trimmed.split(/(\*\*[^*]+\*\*)/g);
      elements.push(
        <p key={key++} className="text-foreground/80 leading-relaxed text-lg mb-1">
          {parts.map((part, i) =>
            part.startsWith("**") && part.endsWith("**")
              ? <strong key={i}>{part.slice(2, -2)}</strong>
              : part
          )}
        </p>
      );
    }
  }
  return elements;
}

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-background font-sans text-foreground">
        <Navbar />
        <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
          <h1 className="text-3xl font-bold">Article not found</h1>
          <Link href="/blog" className="text-primary font-semibold hover:underline inline-flex items-center gap-2">
            <ArrowLeft size={16} /> Back to Blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Navbar />

      {/* Hero image */}
      <div className="relative h-[55vh] mt-0 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 max-w-3xl mx-auto px-4 sm:px-6 pb-10">
          <Link href="/blog" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-4 transition-colors">
            <ArrowLeft size={14} /> All Articles
          </Link>
          <span className="inline-block px-3 py-1 rounded-full bg-primary text-white text-xs font-semibold mb-3">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-display font-extrabold text-white leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-white/60 text-sm mt-4">
            <span className="flex items-center gap-1.5"><Calendar size={13} /> {post.date}</span>
            <span className="flex items-center gap-1.5"><Clock size={13} /> {post.readTime}</span>
          </div>
        </div>
      </div>

      {/* Article body */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto px-4 sm:px-6 py-14"
      >
        <div className="prose-spacing space-y-3">
          {renderContent(post.content)}
        </div>

        {/* WhatsApp CTA */}
        <div className="mt-14 p-8 rounded-3xl bg-primary text-white text-center">
          <h3 className="text-xl font-bold mb-2">Ready to book a service?</h3>
          <p className="text-white/80 mb-6">Chat with the Cleantex team on WhatsApp — we respond fast.</p>
          <a
            href="https://wa.me/2348064551684"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-white text-primary font-semibold hover:bg-white/90 transition-colors"
          >
            <MessageCircle size={18} />
            Chat on WhatsApp
          </a>
        </div>

        {/* Prev / Next navigation */}
        {(prevPost || nextPost) && (
          <div className="mt-12 flex flex-col sm:flex-row gap-4 border-t border-border pt-10">
            {prevPost && (
              <Link
                href={`/blog/${prevPost.slug}`}
                className="flex-1 p-5 rounded-2xl border border-border hover:border-primary/40 hover:shadow-md transition-all group"
              >
                <p className="text-xs text-muted-foreground mb-1 flex items-center gap-1"><ArrowLeft size={12} /> Previous</p>
                <p className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm leading-snug">{prevPost.title}</p>
              </Link>
            )}
            {nextPost && (
              <Link
                href={`/blog/${nextPost.slug}`}
                className="flex-1 p-5 rounded-2xl border border-border hover:border-primary/40 hover:shadow-md transition-all group text-right"
              >
                <p className="text-xs text-muted-foreground mb-1 flex items-center gap-1 justify-end">Next <ArrowRight size={12} /></p>
                <p className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm leading-snug">{nextPost.title}</p>
              </Link>
            )}
          </div>
        )}
      </motion.div>

      <Footer />
    </div>
  );
}
