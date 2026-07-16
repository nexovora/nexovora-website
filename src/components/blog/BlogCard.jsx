import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  UserRound,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { categoryIcons } from "../../data/blogPosts";

function BlogCard({ post, index }) {
  const reduceMotion = useReducedMotion();
  const CategoryIcon = categoryIcons[post.category];

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.45,
        delay: reduceMotion ? 0 : index * 0.06,
      }}
      whileHover={reduceMotion ? undefined : { y: -5 }}
      className="group overflow-hidden rounded-[18px] border border-slate-200 bg-white shadow-[0_12px_34px_rgba(15,23,42,0.05)] transition hover:border-blue-300 hover:shadow-[0_20px_45px_rgba(37,99,235,0.10)]"
    >
      <div
        className={`relative aspect-video overflow-hidden bg-gradient-to-br ${post.accent}`}
      >
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.35),transparent_38%)]"
          aria-hidden="true"
        />

        <div className="absolute inset-0 flex items-center justify-center transition duration-500 group-hover:scale-105">
          <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-white/25 bg-white/15 text-white backdrop-blur">
            <CategoryIcon size={36} />
          </div>
        </div>

        <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-blue-600 shadow-sm">
          <CategoryIcon size={13} />
          {post.category}
        </span>
      </div>

      <div className="p-6">
        <h2 className="font-heading text-xl font-bold leading-snug text-slate-950">
          {post.title}
        </h2>

        <p className="mt-3 text-sm leading-6 text-slate-600">
          {post.summary}
        </p>

        <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 border-t border-slate-100 pt-5 text-xs text-slate-500">
          <span className="inline-flex items-center gap-1.5">
            <UserRound size={14} />
            {post.author}
          </span>

          <span className="inline-flex items-center gap-1.5">
            <CalendarDays size={14} />
            {post.date ?? post.status}
          </span>

          <span className="inline-flex items-center gap-1.5">
            <Clock3 size={14} />
            {post.readingTime}
          </span>
        </div>

        <NavLink
          to={`/blog/${post.slug}`}
          className="focus-visible-ring mt-5 inline-flex items-center gap-2 rounded-md text-sm font-semibold text-blue-600"
        >
          Read Article

          <ArrowRight
            size={16}
            className="transition group-hover:translate-x-1"
          />
        </NavLink>
      </div>
    </motion.article>
  );
}

export default BlogCard;