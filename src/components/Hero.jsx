import { motion } from 'framer-motion';

const FADE_UP_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { type: 'spring' } },
};

export default function Hero() {
  return (
    <section 
      className="relative h-screen flex items-center justify-center text-center text-white bg-cover bg-center"
      style={{ backgroundImage: `url(https://picsum.photos/seed/nova-hero/1920/1080)` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-body-dark via-black/70 to-black/50"></div>

      <motion.div
        initial="hidden"
        animate="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        className="relative z-10 flex flex-col items-center p-4"
      >
        <motion.h1
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="text-6xl md:text-8xl font-bold uppercase tracking-widest mb-4"
        >
          Nova
        </motion.h1>
        <motion.p
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-8"
        >
          A modern and professional theme for your internal applications, built with React and Tailwind CSS.
        </motion.p>
        <motion.div variants={FADE_UP_ANIMATION_VARIANTS}>
          <a
            href="#services"
            className="inline-block px-10 py-4 bg-accent-green text-black font-bold uppercase rounded-md shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
          >
            Get Started
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
