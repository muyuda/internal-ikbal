import { motion } from 'framer-motion';

const teamMembers = [
  { name: 'Yudha', role: 'Project Manager', img: 'https://i.pravatar.cc/150?img=5' },
  { name: 'Ikbal', role: 'Lead Developer', img: 'https://i.pravatar.cc/150?img=7' },
  { name: 'Gemini', role: 'UX/UI Designer', img: 'https://i.pravatar.cc/150?img=8' },
  { name: 'Bard', role: 'QA Engineer', img: 'https://i.pravatar.cc/150?img=10' },
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

const TeamMemberCard = ({ member, index }) => (
    <motion.div
        custom={index}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.5 }}
        variants={cardVariants}
        className="text-center"
    >
        <img src={member.img} alt={member.name} className="w-40 h-40 rounded-full mx-auto mb-5 border-4 border-surface-dark shadow-lg" />
        <h3 className="text-xl font-bold text-white">{member.name}</h3>
        <p className="text-accent-green font-semibold">{member.role}</p>
    </motion.div>
)

export default function Team() {
  return (
    <section id="team" className="py-24 bg-surface-dark scroll-mt-20">
      <div className="container mx-auto px-4">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Our Team</h2>
          <p className="text-slate-400 max-w-3xl mx-auto text-lg">
            Meet the talented individuals who power our internal applications and drive innovation.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {teamMembers.map((member, i) => (
                <TeamMemberCard member={member} index={i} key={i} />
            ))}
        </div>
      </div>
    </section>
  );
}
