import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import ImgZooming from "../../component/Image_comp/ImgZooming";
import Contact_me from "./Contact_me";

/* ------------------ Animations ------------------ */
const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
};

const scrollAnimation = {
    x: "-50%",
    transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 30,
        ease: "linear",
    },
};

/* ------------------ Data ------------------ */
const portfolios = [
    {
        title: "Personal Brand Portfolio",
        img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    },
    {
        title: "Creative Developer Site",
        img: "https://images.unsplash.com/photo-1509395176047-4a66953fd231",
    },
    {
        title: "Startup Landing Page",
        img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    },
    {
        title: "Designer Showcase",
        img: "https://images.unsplash.com/photo-1559028012-481c04fa702d",
    },
];

/* ------------------ Carousel ------------------ */
function PortfolioCarousel() {
    const controls = useAnimation();

    useEffect(() => {
        controls.start(scrollAnimation);
    }, [controls]);

    return (
        <section className="px-6 py-28 bg-(--color-secondary)">
            {/* Heading */}
            <div className="max-w-6xl mx-auto text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                    Crafted for Excellence
                </h2>
                <p className="text-(--color-text-gray) max-w-2xl mx-auto">
                    Explore a selection of portfolios and websites we’ve designed
                    for our creative partners.
                </p>
            </div>

            {/* Carousel */}
            <div
                className="overflow-hidden touch-pan-y"
                onMouseEnter={() => controls.stop()}
                onMouseLeave={() => controls.start(scrollAnimation)}
                onTouchStart={() => controls.stop()}
                onTouchEnd={() => {
                    setTimeout(() => {
                        controls.start(scrollAnimation);
                    }, 300);
                }}
            >
                <motion.div className="flex gap-12 w-max" animate={controls}>
                    {[...portfolios, ...portfolios].map((item, index) => (
                        <div
                            key={index}
                            className="w-[340px] md:w-[420px] bg-[#0e0a26]
              border border-[#2a2a3d] rounded-3xl overflow-hidden"
                        >
                            {/* Image */}
                            <div className="overflow-hidden">
                                <motion.img
                                    src={item.img}
                                    alt={item.title}
                                    className="h-72 w-full object-cover"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                />
                            </div>

                            {/* Content */}
                            <div className="p-7">
                                <h3 className="font-semibold text-xl mb-1">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-(--color-text-gray)">
                                    View case study →
                                </p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

/* ------------------ Home ------------------ */
function Home() {
    return (
        <div className="bg-(--color-secondary) text-white overflow-hidden">

            {/* HERO */}
            <section className="px-6 py-24 text-center flex flex-col items-center gap-10">
                <motion.span
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.6 }}
                    className="bg-[#0e0a26] border border-(--color-button-background)
          px-6 py-2 rounded-full text-sm md:text-base font-semibold
          text-(--color-button-background)"
                >
                    Now accepting new clients for 2026
                </motion.span>

                <motion.h1
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.1, duration: 0.7 }}
                    className="font-orbitron-bold text-4xl md:text-7xl leading-tight"
                >
                    We build{" "}
                    <span className="text-(--color-button-background)">
                        digital legacies
                    </span>
                </motion.h1>

                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.2, duration: 0.7 }}
                    className="text-(--color-text-gray) max-w-2xl text-base md:text-2xl"
                >
                    Custom web experiences that turn your journey
                    into a timeless digital portfolio.
                </motion.p>
            </section>

            {/* FEATURES */}
            <section className="px-6 py-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
                {["Bespoke Design", "Fully Responsive", "Clean Code"].map(
                    (item, index) => (
                        <motion.div
                            key={item}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="border border-[#2a2a3d] rounded-2xl p-8 bg-[#0e0a26]"
                        >
                            <h3 className="text-xl font-bold mb-3">{item}</h3>
                            <p className="text-(--color-text-gray)">
                                Crafted with intention, clarity, and long-term scalability.
                            </p>
                        </motion.div>
                    )
                )}
            </section>

            {/* SHOWCASE */}
            <section className="px-6 py-20 max-w-7xl mx-auto flex flex-col gap-24">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 gap-12 items-center"
                >
                    <ImgZooming img_src="https://img.freepik.com/free-photo/rear-view-programmer-working-all-night-long_1098-18697.jpg" />
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-5xl font-bold">
                            Design meets purpose
                        </h2>
                        <p className="text-(--color-text-gray)">
                            Every layout, interaction, and animation is built
                            to serve a story — not distract from it.
                        </p>
                    </div>
                </motion.div>
            </section>
            <section className="px-6 py-20 max-w-7xl mx-auto flex flex-col gap-24">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 items-center gap-12"
                >
                    {/* Image */}
                    <div className="hidden md:block space-y-6 md:col-start-1">
                        <h2 className="text-3xl md:text-5xl font-bold">
                            Design your portfolio
                        </h2>
                        <p className="text-(--color-text-gray)">
                            Add your works , projects and skills to showcase your expertise.
                            Our services help you create a stunning portfolio that highlights your strengths and attracts potential clients or employers.
                        </p>
                    </div>

                    <div className="md:col-start-2">
                        <ImgZooming img_src="https://img.freepik.com/free-photo/male-developer-entering-binary-data-terminal-panel_482257-75385.jpg" />
                    </div>

                    {/* Text */}
                    <div className="md:hidden space-y-6 md:col-start-1">
                        <h2 className="text-3xl md:text-5xl font-bold">
                            Design your portfolio
                        </h2>
                        <p className="text-(--color-text-gray)">
                            Add your works , projects and skills to showcase your expertise.
                            Our services help you create a stunning portfolio that highlights your strengths and attracts potential clients or employers.
                        </p>
                    </div>
                </motion.div>
            </section>
            {/* CAROUSEL */}
            <PortfolioCarousel />
            <section className="px-6 py-20 max-w-7xl mx-auto flex flex-col gap-24">
                <Contact_me />
            </section>
            <footer className="bg-[#0b0820] border-t border-[#1f1f33] px-4 sm:px-6 py-16">
                <div className="max-w-6xl mx-auto flex flex-col gap-10">

                    {/* TOP CTA */}
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                            Get in Touch
                        </h2>
                        <p className="text-(--color-text-gray) text-base sm:text-lg max-w-xl mx-auto">
                            Have questions or ready to start your project?
                            Let’s build something meaningful together.
                        </p>
                    </div>

                    {/* ACTION */}
                    {/* <div className="flex justify-center">
                        <a
                            href="/contact"
                            className="bg-(--color-button-background)
        px-8 sm:px-10 py-3.5 sm:py-4
        rounded-lg font-semibold text-base sm:text-lg
        hover:scale-[1.03] transition-transform"
                        >
                            Request Portfolio Design
                        </a>
                    </div> */}

                    {/* DIVIDER */}
                    <div className="border-t border-[#1f1f33]" />

                    {/* BOTTOM BAR */}
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 items-center justify-between text-sm text-(--color-text-gray)">
                        <span>
                            © {new Date().getFullYear()} DevFolio.io , All rights reserved.
                        </span>

                        <span className="text-xs sm:text-sm">
                            Crafted with care · Design-first mindset
                        </span>
                    </div>

                </div>
            </footer>

        </div>
    );
}

export default Home;





