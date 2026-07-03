import { motion } from 'motion/react';
import { MapPin, Clock, CreditCard, Utensils, Accessibility } from 'lucide-react';

const locations = [
  {
    name: 'Фирмен магазин – Център',
    address: 'кв. Къренски, бул. „23-ти пехотен Шипченски полк“ 21',
    hours: 'Пон – Съб: 09:00 – 19:00 ч.\nНед: 09:00 – 16:00 ч.',
    mapLink: 'https://www.google.com/maps/place/бул.+„23-ти+пехотен+Шипченски+полк“+21,+6100+Казанлък',
    features: [
      { icon: <CreditCard className="w-4 h-4" />, text: 'NFC и Карти' },
      { icon: <Accessibility className="w-4 h-4" />, text: 'Достъп с количка' },
      { icon: <Utensils className="w-4 h-4" />, text: 'Топла кухня' }
    ]
  },
  {
    name: 'Месарница „Аякс“ – Изток',
    address: 'кв. Първи май, ул. „Старозагорска“ 3',
    hours: 'Пон – Съб: 09:00 – 20:00 ч.\nНед: 09:00 – 16:00 ч.',
    mapLink: 'https://www.google.com/maps/place/ул.+„Старозагорска“+3,+6102+Казанлък',
    features: [
      { icon: <CreditCard className="w-4 h-4" />, text: 'Приема карти' },
      { icon: <Utensils className="w-4 h-4" />, text: 'Специализирани разфасовки' }
    ]
  }
];

export default function Locations() {
  return (
    <section id="locations" className="py-24 bg-stone-900 text-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif mb-6"
          >
            Намерете ни в Казанлък
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-stone-400"
          >
            Удобни локации, винаги прясно месо и безупречно обслужване близо до вас.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {locations.map((loc, index) => (
            <motion.div
              key={loc.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-stone-800 p-8 rounded-sm border border-stone-700"
            >
              <h3 className="text-xl font-serif mb-4 text-white">{loc.name}</h3>
              
              <div className="flex items-start gap-3 mb-4 text-stone-300">
                <MapPin className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <span>{loc.address}</span>
              </div>
              
              <div className="flex items-start gap-3 mb-6 text-stone-300">
                <Clock className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <span className="whitespace-pre-line">{loc.hours}</span>
              </div>

              <div className="space-y-2 pt-6 border-t border-stone-700">
                {loc.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-stone-400">
                    <span className="text-stone-500">{feature.icon}</span>
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>

              <a
                href={loc.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full flex items-center justify-center gap-2 bg-stone-700 hover:bg-red-700 text-white px-4 py-3 rounded-sm transition-colors text-sm font-medium tracking-wide uppercase"
              >
                Виж на картата
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
