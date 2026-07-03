import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://lh3.googleusercontent.com/gps-cs-s/APNQkAFs2AfQZwRa9itWL1OAMEpwzbbfEp90qsWYdtX3IbYD0GVAY_gqpIzspuWoSqrpxEWOfeAz7ubH3jS_SXaKyxRCEFikeojoRRSMrOdC0yMiSd-BEDeQ1zaJo2MYfs55DmC_JQky=w1920-h1080-k-no")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute inset-0 bg-stone-950/70" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-red-500 font-medium tracking-[0.2em] uppercase mb-4 text-sm md:text-base"
        >
          Казанлък • От 1995 година
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight text-balance"
        >
          От нашите ферми до Вашата трапеза – 100% традиция в качеството.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-stone-300 mb-10 max-w-2xl mx-auto"
        >
          Прясно месо, майсторски колбаси и топла кухня от най-големия производител в България.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/products"
            className="bg-red-700 hover:bg-red-600 text-white px-8 py-4 rounded-sm transition-colors text-sm font-medium tracking-wide uppercase"
          >
            Вижте продуктите
          </Link>
          <Link
            to="/locations"
            className="bg-stone-800 hover:bg-stone-700 text-white px-8 py-4 rounded-sm transition-colors text-sm font-medium tracking-wide uppercase border border-stone-700"
          >
            Нашите магазини
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-stone-400"
      >
        <ArrowDown className="w-8 h-8 animate-bounce" />
      </motion.div>
    </section>
  );
}
