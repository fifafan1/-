import { motion } from 'motion/react';

const galleryImages = [
  {
    url: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAFs2AfQZwRa9itWL1OAMEpwzbbfEp90qsWYdtX3IbYD0GVAY_gqpIzspuWoSqrpxEWOfeAz7ubH3jS_SXaKyxRCEFikeojoRRSMrOdC0yMiSd-BEDeQ1zaJo2MYfs55DmC_JQky=w1920-h1080-k-no',
    title: 'Фирмен магазин - Център'
  },
  {
    url: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&q=80&w=2070',
    title: 'Пресни разфасовки'
  },
  {
    url: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAH-jQq_Gp2NMNMEhypM7eFHULNg9BYaqoEvyXPxxvbAiqytPrCKUZ1dCph4WLs4mKJl3nLCHZpcmeXx9vfX210uA6QApN_nwVtQ6plfCzBtOzRTVsWsAsu3_HwJpXFlhcYg1jdO=w1920-h1080-k-no',
    title: 'Месарница Аякс - Изток'
  },
  {
    url: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&q=80&w=2070',
    title: 'Майсторски колбаси'
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-serif text-stone-900 mb-4"
            >
              Нашите Обекти
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-stone-600"
            >
              Разгледайте модерната визия на нашите магазини в Казанлък, където ви очаква винаги перфектно обслужване и безкомпромисна чистота.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-80 overflow-hidden rounded-sm cursor-pointer"
            >
              <img 
                src={image.url} 
                alt={image.title} 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-serif text-xl tracking-wide">{image.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
