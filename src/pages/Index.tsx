import { Button } from "@/components/ui/button";
import { Check, Phone, Mail, MapPin, Shield, Zap, Award, Settings } from "lucide-react";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto border-b border-gray-100">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-700 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">В</span>
            </div>
            <div className="text-xl font-bold text-gray-900">НПО «Волна»</div>
          </div>
          <nav className="hidden md:flex items-center space-x-6 text-sm text-gray-600">
            <a href="#products" className="hover:text-blue-700 transition-colors">Продукция</a>
            <a href="#features" className="hover:text-blue-700 transition-colors">Преимущества</a>
            <a href="#applications" className="hover:text-blue-700 transition-colors">Применение</a>
            <a href="#about" className="hover:text-blue-700 transition-colors">О компании</a>
            <a href="#contacts" className="hover:text-blue-700 transition-colors">Контакты</a>
          </nav>
        </div>
        <Button className="bg-blue-700 text-white hover:bg-blue-800 rounded-full px-6">
          Запросить КП
        </Button>
      </header>

      {/* Hero Section */}
      <section className="text-center px-6 py-16 max-w-4xl mx-auto">
        <div className="inline-flex items-center bg-blue-700 text-white text-sm px-4 py-2 rounded-full mb-8">
          <span className="bg-white text-blue-700 text-xs px-2 py-1 rounded-full mr-3 font-medium">
            ООО
          </span>
          Поставка промышленных рукавов и трубопроводов
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">
          Рукава и трубопроводы
          <br />
          для <span className="text-blue-700">газотурбинных</span> установок
        </h1>

        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto text-pretty">
          Фторопластовые рукава, металлорукава, сильфонные компенсаторы и трубопроводы
          для газотурбинных установок. Поставка по всей России.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-blue-700 text-white hover:bg-blue-800 rounded-full px-8 py-3">
            <Icon name="FileText" size={16} className="mr-2" />
            Запросить коммерческое предложение
          </Button>
          <Button variant="outline" className="rounded-full px-8 py-3 bg-transparent border-gray-300 hover:border-blue-700">
            <Icon name="Phone" size={16} className="mr-2" />
            Позвонить нам
          </Button>
        </div>
      </section>

      {/* Partners / Clients Strip */}
      <section className="py-10 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-sm text-gray-400 mb-6">Работаем с предприятиями отрасли</p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Нефтегаз</div>
            <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Энергетика</div>
            <div className="text-sm font-semibold text-gray-800 font-bold text-base uppercase tracking-wide">ГТУ</div>
            <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Машиностроение</div>
            <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">ВПК</div>
          </div>
        </div>
      </section>

      {/* Testimonial / Quote Section */}
      <section id="about" className="py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="w-16 h-16 rounded-full bg-blue-100 mx-auto mb-6 flex items-center justify-center">
            <Icon name="Award" size={28} className="text-blue-700" />
          </div>
          <h3 className="text-xl font-semibold mb-4">Надёжный поставщик специальной трубопроводной арматуры</h3>
          <p className="text-gray-600 mb-2">
            «Компания НПО "Волна" специализируется на поставке высококачественных рукавов
            и трубопроводных систем для ответственных применений в промышленности и энергетике.»
          </p>
          <p className="text-sm text-gray-500">ООО «НПО "Волна"» — официальный поставщик</p>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-gray-500 mb-4">Продукция</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Наш ассортимент
          </h2>
          <p className="text-gray-600 mb-12">
            Поставляем специализированные рукава и трубопроводы для промышленных и энергетических объектов
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button className="bg-blue-700 text-white rounded-full">Фторопластовые рукава</Button>
            <Button variant="outline" className="rounded-full bg-transparent">Металлорукава</Button>
            <Button variant="outline" className="rounded-full bg-transparent">Сильфонные компенсаторы</Button>
            <Button variant="outline" className="rounded-full bg-transparent">Трубопроводы ГТУ</Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <Icon name="Shield" size={24} className="text-blue-700" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Качество и надёжность
              <br />
              в каждой поставке
            </h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <Check className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                <span>Соответствие ГОСТ и техническим регламентам</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                <span>Сертификаты качества на всю продукцию</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                <span>Работа с нестандартными и крупными заказами</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                <span>Поставка в короткие сроки по всей России</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-80 h-96 bg-gray-100 rounded-2xl p-4 shadow-lg">
              <div className="bg-white rounded-xl h-full p-6 flex flex-col justify-between">
                <div>
                  <div className="text-xs text-gray-400 mb-2">Пример заявки</div>
                  <div className="text-sm font-bold text-gray-800 mb-1">Фторопластовый рукав</div>
                  <div className="text-xs text-gray-500 mb-4">DN25 × 1000 мм, давление 25 бар</div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-500">Тип соединения</span>
                      <span className="font-medium">Ниппель-гайка</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-500">Материал оплётки</span>
                      <span className="font-medium">Нержавеющая сталь</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-500">Температура</span>
                      <span className="font-medium">до +200°C</span>
                    </div>
                  </div>
                </div>
                <div className="bg-blue-700 text-white text-center text-xs py-2 rounded-lg font-medium">
                  Запросить цену
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section id="applications" className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm text-gray-500 mb-4">Применение</p>
            <h2 className="text-3xl font-bold text-gray-900">Где используется наша продукция</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="w-80 h-96 bg-white rounded-2xl p-4 shadow-lg border border-gray-100">
                <div className="h-full flex flex-col justify-between">
                  <div className="space-y-3">
                    {[
                      { icon: "Flame", label: "Газотурбинные установки" },
                      { icon: "Factory", label: "Нефтегазовые предприятия" },
                      { icon: "Zap", label: "Энергетические объекты" },
                      { icon: "Settings", label: "Машиностроительные заводы" },
                    ].map(({ icon, label }) => (
                      <div key={label} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon name={icon} size={16} className="text-blue-700" />
                        </div>
                        <span className="text-sm font-medium text-gray-800">{label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-center text-xs text-gray-400">и другие промышленные объекты</div>
                </div>
              </div>
            </div>
            <div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Icon name="Zap" size={24} className="text-blue-700" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Специализация
                <br />
                на сложных задачах
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Высокотемпературные и высоконагруженные среды</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Агрессивные химические и топливные среды</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Компенсация вибраций и термических расширений</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Изготовление по чертежам и техническому заданию</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contacts" className="py-20 px-6 bg-blue-700 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Нужна поставка? Запросите КП</h2>
          <p className="text-blue-100 mb-8">
            Опишите задачу — подберём нужный тип рукава или трубопровода
            и предоставим коммерческое предложение в короткие сроки.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-700 hover:bg-blue-50 rounded-full px-8 py-3 font-semibold">
              <Icon name="FileText" size={16} className="mr-2" />
              Отправить заявку
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-blue-600 rounded-full px-8 py-3 bg-transparent">
              <Icon name="Phone" size={16} className="mr-2" />
              Позвонить
            </Button>
          </div>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-8 text-sm text-blue-100">
            <div className="flex items-center justify-center gap-2">
              <Icon name="Phone" size={16} />
              <span>+7 (___) ___-__-__</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Icon name="Mail" size={16} />
              <span>info@npo-volna.ru</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Icon name="MapPin" size={16} />
              <span>Россия</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-6 h-6 bg-blue-700 rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs">В</span>
            </div>
            <div className="text-xl font-bold text-gray-900">ООО «НПО "Волна"»</div>
          </div>
          <div className="flex space-x-6 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-900">Политика конфиденциальности</a>
            <a href="#" className="hover:text-gray-900">Реквизиты</a>
            <a href="#contacts" className="hover:text-gray-900">Контакты</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
