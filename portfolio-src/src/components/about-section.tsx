"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Briefcase, GraduationCap, Heart } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export function AboutSection() {
  return (
    <section className="mx-auto max-w-[975px] px-6 pt-4 pb-24">
      {/* Intro */}
      <motion.div
        {...fadeUp}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-2xl"
      >
        <h2
          className="text-3xl font-bold tracking-tight md:text-4xl"
          style={{ color: "var(--color-foreground)" }}
        >
          About me
        </h2>
        <p
          className="mt-6 text-lg leading-relaxed"
          style={{ color: "var(--color-muted)" }}
        >
          I'm a Senior Product Designer with over 8 years of experience crafting
          digital products that millions of developers use every day. As the
          Founding Designer at Snyk, I built the design function from the ground
          up — from our first component to a full design system adopted by 12
          product teams.
        </p>
        <p
          className="mt-4 text-lg leading-relaxed"
          style={{ color: "var(--color-muted)" }}
        >
          I'm passionate about the intersection of AI and design, exploring how
          vibe coding and intelligent tools can reshape the way we build
          software. I believe great design is invisible — it removes friction and
          empowers people to do their best work.
        </p>
      </motion.div>

      {/* Info cards */}
      <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            icon: Briefcase,
            title: "Experience",
            items: [
              "Founding Designer — Snyk",
              "Senior Product Designer — 8+ years",
              "Design Systems Lead",
            ],
          },
          {
            icon: Heart,
            title: "Passions",
            items: [
              "AI-driven design workflows",
              "Vibe coding & creative tech",
              "Developer experience (DX)",
            ],
          },
          {
            icon: GraduationCap,
            title: "Expertise",
            items: [
              "Product & UX Design",
              "Design Systems at scale",
              "User Research & Strategy",
            ],
          },
        ].map((card, i) => (
          <motion.div
            key={card.title}
            {...fadeUp}
            transition={{
              duration: 0.6,
              delay: 0.1 + i * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="rounded-2xl p-6"
            style={{
              backgroundColor: "var(--color-card)",
              border: "1px solid var(--color-border)",
            }}
          >
            <card.icon
              size={20}
              style={{ color: "var(--color-muted)" }}
              className="mb-4"
            />
            <h3
              className="text-base font-semibold"
              style={{ color: "var(--color-foreground)" }}
            >
              {card.title}
            </h3>
            <ul className="mt-3 space-y-2">
              {card.items.map((item) => (
                <li
                  key={item}
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--color-muted)" }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Contact row */}
      <motion.div
        {...fadeUp}
        transition={{
          duration: 0.6,
          delay: 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mt-12 flex flex-wrap gap-6"
      >
        <div
          className="flex items-center gap-3 rounded-full px-5 py-3"
          style={{
            border: "1px solid var(--color-border)",
          }}
        >
          <MapPin size={16} style={{ color: "var(--color-muted)" }} />
          <span
            className="text-sm font-medium"
            style={{ color: "var(--color-muted)" }}
          >
            Tel Aviv, Israel
          </span>
        </div>
        <a
          href="mailto:shlomi@example.com"
          className="flex items-center gap-3 rounded-full px-5 py-3 transition-colors duration-200"
          style={{
            border: "1px solid var(--color-border)",
            color: "var(--color-muted)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "var(--color-foreground)";
            e.currentTarget.style.borderColor = "var(--color-muted)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "var(--color-muted)";
            e.currentTarget.style.borderColor = "var(--color-border)";
          }}
        >
          <Mail size={16} />
          <span className="text-sm font-medium">Get in touch</span>
        </a>
      </motion.div>
    </section>
  );
}
