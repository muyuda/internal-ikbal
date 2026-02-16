import { motion } from 'framer-motion';

const sectionVariants = {
    offscreen: { opacity: 0, y: 50 },
    onscreen: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: 'easeOut' }
    }
};

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-body-dark scroll-mt-20">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        className="container mx-auto px-4"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Contact Us</h2>
          <p className="text-slate-400 max-w-3xl mx-auto text-lg">
            Have a question or need support? Fill out the form below and we'll get back to you.
          </p>
        </div>
        
        <form action="#" className="max-w-2xl mx-auto space-y-6">
          <div>
            <label htmlFor="name" className="sr-only">Your Name</label>
            <input type="text" id="name" placeholder="Your Name" className="w-full bg-surface-dark border border-slate-700 rounded-lg p-4 text-white placeholder:text-slate-500 focus:ring-accent-green focus:border-accent-green transition" />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">Your Email</label>
            <input type="email" id="email" placeholder="Your Email" className="w-full bg-surface-dark border border-slate-700 rounded-lg p-4 text-white placeholder:text-slate-500 focus:ring-accent-green focus:border-accent-green transition" />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">Message</label>
            <textarea id="message" rows="6" placeholder="Your Message" className="w-full bg-surface-dark border border-slate-700 rounded-lg p-4 text-white placeholder:text-slate-500 focus:ring-accent-green focus:border-accent-green transition"></textarea>
          </div>
          <button type="submit" className="w-full py-4 px-6 bg-accent-green text-black font-bold uppercase rounded-md shadow-lg transition-transform duration-300 ease-in-out hover:scale-105">
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
}
