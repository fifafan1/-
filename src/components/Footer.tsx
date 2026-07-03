import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400 py-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 pb-8 border-b border-stone-800">
          <div>
            <h3 className="font-serif text-2xl font-bold text-stone-50 tracking-wider mb-4">
              АЯКС
            </h3>
            <p className="text-sm max-w-xs leading-relaxed mb-6">
              Най-големият производител на угоени свине от елитната порода датски хибрид в България. 100% затворен цикъл на производство.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-medium uppercase tracking-wide text-sm mb-4">Бързи връзки</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Начало</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">За нас</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Продукти</Link></li>
              <li><Link to="/gallery" className="hover:text-white transition-colors">Галерия</Link></li>
              <li><Link to="/locations" className="hover:text-white transition-colors">Магазини</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium uppercase tracking-wide text-sm mb-4">Централно управление</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 shrink-0 text-red-700" />
                <span>гр. Стара Загора, бул. „Ал. Батенберг“ 28, ет. 5, оф. 42</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 shrink-0 text-red-700" />
                <span>042 63 66 99</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 shrink-0 text-red-700" />
                <a href="mailto:office@ajaxgroup.bg" className="hover:text-white transition-colors">office@ajaxgroup.bg</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="text-xs text-stone-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Аякс Груп. Всички права запазени.</p>
          <p>Фирмени магазини за месо - гр. Казанлък</p>
        </div>
      </div>
    </footer>
  );
}
