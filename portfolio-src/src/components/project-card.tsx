"use client";

import { useState, useRef, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import type { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  variant: "featured" | "grid";
  onClick: (project: Project) => void;
}

/* ── Skeleton shimmer while image loads ── */
function Skeleton({ className }: { className?: string }) {
  return (
    <div
      className={`absolute inset-0 ${className ?? ""}`}
      style={{ backgroundColor: "var(--color-card)" }}
    >
      <div
        className="absolute inset-0 animate-pulse"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.04) 50%, transparent 100%)",
          backgroundSize: "200% 100%",
          animation: "shimmer 1.8s ease-in-out infinite",
        }}
      />
    </div>
  );
}

export function ProjectCard({
  project,
  index,
  variant,
  onClick,
}: ProjectCardProps) {
  const isFeatured = variant === "featured";
  const [loaded, setLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // If the image is already cached, mark loaded immediately
  useEffect(() => {
    if (imgRef.current?.complete && imgRef.current?.naturalWidth > 0) {
      setLoaded(true);
    }
  }, []);

  const gradientFallback = isFeatured
    ? `linear-gradient(135deg, ${
        index === 0
          ? "hsl(220, 15%, 18%), hsl(220, 15%, 25%)"
          : index === 1
          ? "hsl(250, 15%, 18%), hsl(250, 15%, 25%)"
          : "hsl(200, 15%, 18%), hsl(200, 15%, 25%)"
      })`
    : `linear-gradient(135deg, hsl(${180 + index * 30}, 12%, 18%), hsl(${
        180 + index * 30
      }, 12%, 25%))`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      onClick={() => onClick(project)}
      className="group cursor-pointer"
    >
      {/* Image Container */}
      <motion.div
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-2xl"
        style={{
          backgroundColor: "var(--color-card)",
          border: "1px solid var(--color-border)",
        }}
      >
        <div
          className={`relative w-full ${
            isFeatured ? "aspect-[975/401]" : "aspect-[421/391]"
          }`}
        >
          {/* Skeleton loader — visible until image loads */}
          {!loaded && <Skeleton />}

          {/* Gradient fallback (always behind the image) */}
          <div
            className="absolute inset-0 transition-opacity duration-500"
            style={{
              background: gradientFallback,
              opacity: loaded && !hasError ? 0 : 1,
            }}
          />

          {/* Actual image with lazy loading */}
          {project.image && !hasError && (
            <img
              ref={imgRef}
              src={project.image}
              alt={project.title}
              loading="lazy"
              decoding="async"
              onLoad={() => setLoaded(true)}
              onError={() => {
                setHasError(true);
                setLoaded(true);
              }}
              className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700"
              style={{ opacity: loaded ? 1 : 0 }}
            />
          )}

          {/* Category tag */}
          <div className="absolute left-4 top-4 z-10">
            <span
              className="rounded-full px-3 py-1 text-xs font-medium backdrop-blur-md"
              style={{
                backgroundColor: "rgba(255,255,255,0.08)",
                color: "rgba(255,255,255,0.7)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {project.category}
            </span>
          </div>

          {/* Hover arrow */}
          <div className="absolute right-4 top-4 z-10">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-full opacity-0 transition-all duration-300 group-hover:opacity-100"
              style={{
                backgroundColor: "rgba(255,255,255,0.1)",
                backdropFilter: "blur(8px)",
              }}
            >
              <ArrowUpRight
                size={18}
                style={{ color: "rgba(255,255,255,0.8)" }}
              />
            </div>
          </div>

          {/* Project title overlay on hover */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span
              className="text-lg font-medium"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              {project.title}
            </span>
          </div>
        </div>
      </motion.div>

      {/* Text content below card */}
      <div className="mt-4 space-y-1 px-1">
        <h3
          className="text-base font-semibold transition-colors duration-200 md:text-lg"
          style={{ color: "var(--color-foreground)" }}
        >
          {project.title}
        </h3>
        <p
          className="text-sm leading-relaxed"
          style={{ color: "var(--color-muted)" }}
        >
          {project.subtitle}
        </p>
        <div className="pt-2">
          <span
            className="inline-flex items-center gap-1.5 text-sm font-medium transition-all duration-200 group-hover:gap-2.5"
            style={{ color: "var(--color-foreground)" }}
          >
            Explore work
            <ArrowUpRight
              size={14}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </span>
        </div>
      </div>
    </motion.article>
  );
}
