import { motion } from 'motion/react';
import { ShieldCheck, Factory, Leaf } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Factory className="w-6 h-6" />,
      title: 'Затворен цикъл',
      description: 'От производството на собствен фураж и отглеждането на животните до витрината. Пълен контрол над всяка стъпка.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: 'Датски хибрид',
      description: 'Над 30 години опит в индустриалното свиневъдство и най-големият производител на елитна порода в България.'
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: 'Натурален вкус',
      description: 'Подбрани миксове от подправки и ниско съдържание на сол. Чисто месо без излишни добавки.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-6">
              За нас: Традиция и безкомпромисно качество
            </h2>
            <p className="text-lg text-stone-600 mb-6 leading-relaxed">
              „Аякс“ стартира своята дейност през 1995 г. като производител на живи прасета в България. Днес, ние сме утвърден лидер с над 500 висококвалифицирани служители – зооинженери, ветеринарни лекари и технолози.
            </p>
            <p className="text-lg text-stone-600 mb-8 leading-relaxed">
              Нашата философия е проста: <strong>Натурално, селектирано и 100% собствено отгледано свинско месо.</strong> Вярваме в чистата храна и запазването на автентичния вкус на българската трапеза.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="text-red-700 mt-1">{feature.icon}</div>
                  <div>
                    <h3 className="font-medium text-stone-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-stone-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[600px] rounded-sm overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&q=80&w=2070" 
              alt="Свежо месо Аякс" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent flex items-end p-8">
              <div className="text-white">
                <p className="text-2xl font-serif font-medium mb-2">Над 30 години опит</p>
                <p className="text-stone-300">Гаранция за качество на всяка хапка</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
