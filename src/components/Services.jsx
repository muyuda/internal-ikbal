import { motion } from 'framer-motion';
import { Layers, BarChart, Users } from 'lucide-react';

const services = [
  {
    name: 'Asset Management',
    description: 'Efficiently track and manage all corporate assets from a centralized dashboard.',
    icon: Layers,
  },
  {
    name: 'Data Analytics',
    description: 'Leverage data-driven insights to make informed business decisions and track KPIs.',
    icon: BarChart,
  },
  {
    name: 'Team Directory',
    description: 'Easily find and connect with colleagues across different departments.',
    icon: Users,
  },
];

const cardVariants = {
  offscreen: { opacity: 0, y: 50 },
  onscreen: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

const ServiceCard = ({ item, index }) => (
  <motion.div
    custom={index}
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: true, amount: 0.3 }}
    variants={cardVariants}
    className="bg-surface-dark rounded-2xl p-8 group relative overflow-hidden"
  >
    <div className="flex justify-start mb-6">
      <div className="bg-accent-green/20 p-4 rounded-full">
        <item.icon className="text-accent-green h-8 w-8" />
      </div>
    </div>
    <h3 className="text-2xl font-bold text-white mb-3">{item.name}</h3>
    <p className="text-slate-400 leading-relaxed">{item.description}</p>
    {/* Hover effect */}
    <div className="absolute bottom-0 left-0 h-1 w-full bg-accent-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></div>
  </motion.div>
);

export default function Services() {
  return (
    <section id="services" className="py-24 bg-body-dark">
      <div className="container mx-auto px-4">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-slate-400 max-w-3xl mx-auto text-lg">
            An overview of our internal operations, showcasing our projects, services, and dedicated team members.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, i) => (
            <ServiceCard key={item.name} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
