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
      <div className="flex items-start gap-12">
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1"
        >
          <h2
            className="text-3xl font-bold tracking-tight md:text-4xl"
            style={{ color: "var(--color-foreground)" }}
          >
            Hi, I'm Shlomi! 👋
          </h2>
          <p
            className="mt-6 text-lg leading-relaxed"
            style={{ color: "var(--color-foreground)" }}
          >
            I've been a product designer for over a decade now. While most people run away from messy, complex technical problems, I'm the guy who actually enjoys them.
          </p>
          <p
            className="mt-4 text-lg leading-relaxed"
            style={{ color: "var(--color-foreground)" }}
          >
            I was the Founding Designer at Snyk, where I spent 4 years helping turn a small startup into a unicorn. My main focus was making complicated developer tools feel simple and easy to use.
          </p>
          <p
            className="mt-4 text-lg leading-relaxed"
            style={{ color: "var(--color-foreground)" }}
          >
            I take the work seriously, but I don't take myself too seriously. I'm a fan of honest talk, clear communication, and keeping things chill.
          </p>
        </motion.div>
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="hidden md:block flex-shrink-0"
        >
          <img
            src="/images/shlomi.png"
            alt="Shlomi Rozilyo"
            className="w-64 h-64 object-cover rounded-2xl"
          />
        </motion.div>
      </div>

      {/* Info cards */}
      <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            icon: Briefcase,
            title: "Design + Engineering",
            items: [
              "I love bridging the gap between Figma and code. I want to make sure the final product feels as good as the original design.",
            ],
          },
          {
            icon: Heart,
            title: "AI & \"Vibe Coding\"",
            items: [
              "I'm constantly playing with AI workflows to speed things up and build smarter.",
            ],
          },
          {
            icon: GraduationCap,
            title: "Scale",
            items: [
              "Building design systems that don't just look pretty but actually work for large teams.",
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
