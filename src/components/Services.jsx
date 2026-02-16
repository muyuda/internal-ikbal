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
    className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-300 text-center"
  >
    <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center rounded-full bg-blue-100">
      <item.icon className="text-[#007bff] h-10 w-10" />
    </div>
    <h3 className="text-2xl font-bold text-[#03045E] mb-3">{item.name}</h3>
    <p className="text-gray-600 leading-relaxed">{item.description}</p>
  </motion.div>
);

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[#03045E] mb-3">Our Services</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
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
