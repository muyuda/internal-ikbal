import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';

const portfolioItems = [
  { img: 'https://picsum.photos/seed/port1/600/400', category: 'Branding', title: 'Corporate Identity' },
  { img: 'https://picsum.photos/seed/port2/600/400', category: 'Development', title: 'Internal Dashboard' },
  { img: 'https://picsum.photos/seed/port3/600/400', category: 'Design', title: 'Mobile App Mockup' },
  { img: 'https://picsum.photos/seed/port4/600/400', category: 'Marketing', title: 'Campaign Website' },
  { img: 'https://picsum.photos/seed/port5/600/400', category: 'Development', title: 'API Integration' },
  { img: 'https://picsum.photos/seed/port6/600/400', category: 'Branding', title: 'Logo System' },
];

const cardVariants = {
    offscreen: { opacity: 0, scale: 0.8 },
    onscreen: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: 'easeOut',
      },
    }),
  };

const PortfolioCard = ({ item, index }) => (
    <motion.div
        custom={index}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
        variants={cardVariants}
        className="group relative overflow-hidden rounded-lg"
    >
        <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
        <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-xl font-bold text-white">{item.title}</h3>
            <p className="text-slate-300">{item.category}</p>
            <div className="mt-4 p-3 bg-accent-green rounded-full">
                <Eye className="text-black" />
            </div>
        </div>
    </motion.div>
)

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-body-dark scroll-mt-20">
      <div className="container mx-auto px-4">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Our Portfolio</h2>
          <p className="text-slate-400 max-w-3xl mx-auto text-lg">
            A showcase of our successfully completed internal and external projects.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, i) => (
                <PortfolioCard item={item} index={i} key={i} />
            ))}
        </div>
      </div>
    </section>
  );
}
