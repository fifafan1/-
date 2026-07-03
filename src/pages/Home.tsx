import Hero from '../components/Hero';

export default function Home() {
  return (
    <>
      <Hero />
      <div className="bg-stone-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-6">Добре дошли в магазини Аякс</h2>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Разгледайте нашите фирмени магазини в гр. Казанлък. Предлагаме изключително разнообразие от винаги пресни меса от собствено производство, майсторски колбаси и вкусна топла кухня, приготвени с безкомпромисно качество и любов към традицията.
          </p>
        </div>
      </div>
    </>
  );
}
