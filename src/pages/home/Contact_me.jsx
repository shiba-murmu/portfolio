import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

function Contact_me() {
  return (
    <section className="bg-(--color-secondary) text-white min-h-screen px-1 sm:px-6 md:py-10 flex items-center">
      <div className="max-w-6xl mx-auto w-full">

        {/* Wrapper */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">

          {/* TEXT CONTENT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6"
          >
            <h1 className="font-bold leading-tight
              text-3xl sm:text-4xl md:text-6xl">
              Design your
              <span className="text-(--color-button-background)"> portfolio</span>
            </h1>

            <p className="text-(--color-text-gray)
              text-base sm:text-lg max-w-md">
              Share your details and vision. We’ll help you build a clean,
              professional portfolio that represents you properly.
            </p>

            <p className="text-sm text-(--color-text-gray)">
              ⏱ Response within 24–48 hours
            </p>
          </motion.div>

          {/* FORM */}
          <motion.form
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[#0e0a26] border border-[#2a2a3d]
            rounded-2xl sm:rounded-3xl
            p-5 sm:p-7 md:p-10
            space-y-5 sm:space-y-6"
          >
            {/* Full Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs sm:text-sm text-(--color-text-gray)">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your full name"
                className="bg-transparent border border-[#3a3a4d]
                rounded-lg px-3 sm:px-4 py-2.5 sm:py-3
                text-sm sm:text-base
                focus:outline-none
                focus:border-(--color-button-background)"
                required
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs sm:text-sm text-(--color-text-gray)">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="bg-transparent border border-[#3a3a4d]
                rounded-lg px-3 sm:px-4 py-2.5 sm:py-3
                text-sm sm:text-base
                focus:outline-none
                focus:border-(--color-button-background)"
                required
              />
            </div>

            {/* Description */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs sm:text-sm text-(--color-text-gray)">
                What do you want to build?
              </label>
              <textarea
                rows="4"
                placeholder="Tell us about your background, goals, and what kind of portfolio you want…"
                className="bg-transparent border border-[#3a3a4d]
                rounded-lg px-3 sm:px-4 py-2.5 sm:py-3
                text-sm sm:text-base resize-none
                focus:outline-none
                focus:border-(--color-button-background)"
                required
              />
            </div>

            {/* CTA */}
            <button
              type="submit"
              className="w-full bg-(--color-button-background)
              py-3.5 sm:py-4
              rounded-lg font-semibold sm:font-bold
              text-base sm:text-lg
              hover:scale-[1.02] cursor-pointer transition-transform"
            >
              Request Portfolio Design
            </button>

            <p className="text-[11px] sm:text-xs text-center text-(--color-text-gray)">
              No spam. Just thoughtful design.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact_me;
