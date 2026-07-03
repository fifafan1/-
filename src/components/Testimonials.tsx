import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    text: "Най-доброто и винаги прясно свинско месо в града. Пазарувам само оттук за вкъщи.",
    author: "Клиент на магазин Център",
    rating: 5
  },
  {
    text: "Топлата кухня в централния магазин е спасение за обедната почивка. Готвят много вкусно!",
    author: "Редовен клиент",
    rating: 5
  },
  {
    text: "Огромно предимство е, че може да се плаща с карта и телефон (NFC). В много месарници това още липсва.",
    author: "Местен жител",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-stone-100 border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif text-stone-900 mb-6"
          >
            Доверието на нашите клиенти
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-stone-600"
          >
            С висока оценка в Google Maps и стотици доволни клиенти дневно, ние продължаваме да държим на качеството.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-sm shadow-sm border border-stone-100"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-red-600 text-red-600" />
                ))}
              </div>
              <p className="text-stone-700 italic mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              <p className="text-sm font-medium tracking-wide text-stone-900 uppercase">
                {testimonial.author}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
