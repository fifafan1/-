import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  {
    title: 'Пресни меса',
    description: 'Охладено свинско месо от собствени ферми. Пържоли, бут, врат и специализирани разфасовки. Кайма, смляна пред вас.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/12/17-09-21-Schmetterlingsschnitt-329_RR71584.jpg',
    quote: '"Каймата я мелят пред теб, което гарантира качество. Свинският врат е невероятно крехък!"'
  },
  {
    title: 'Майсторски колбаси',
    description: 'Малотрайни варено-пушени продукти и трайни сушени мезета. Приготвени с подбрани подправки и ниско съдържание на сол.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/59/Pastirma_entrecote.jpg',
    quote: '"Уникален вкус и чисти съставки. Страхотни пресни наденички за скара."'
  },
  {
    title: 'Топла кухня',
    description: 'Прясно приготвено дневно меню, печени меса и традиционни български ястия, създадени на място с наши продукти.',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800',
    quote: '"Топлата кухня в централния магазин е спасение. Готвят много вкусно като у дома!"'
  }
];

export default function Products() {
  return (
    <section id="products" className="py-24 bg-stone-900 text-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif mb-6"
          >
            Нашият Асортимент
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-stone-400"
          >
            От свежо месо до готови кулинарни изкушения – всичко е произведено с грижа и спазване на най-високите стандарти.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-stone-800 border border-stone-700 rounded-sm overflow-hidden flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-serif mb-3 text-stone-50">{product.title}</h3>
                <p className="text-stone-400 mb-6 flex-1">{product.description}</p>
                
                <div className="bg-stone-900/50 p-4 border border-stone-700/50 rounded-sm mb-6">
                  <p className="text-sm italic text-stone-300">{product.quote}</p>
                </div>
                
                <Link to="/locations" className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 font-medium text-sm tracking-wide uppercase transition-colors">
                  Намерете в магазините <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
