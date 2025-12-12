import { useState } from 'react';
import { Phone, Mail, MapPin, Award, Users, TrendingUp, CheckCircle, Shield, Target, Radio, DollarSign, ClipboardCheck } from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('success');
    setTimeout(() => {
      setFormStatus('idle');
      setFormData({ name: '', phone: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gold/20 sticky top-0 bg-black/95 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex items-center justify-center sm:justify-start">
            <img
              src="/image copy.png"
              alt="Best Investments Logo"
              className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
            />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
            Sprzedaj swoją <span className="text-gold">nieruchomość</span> szybko i korzystnie
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-12 leading-relaxed">
            Profesjonalna wycena, skuteczna sprzedaż, najlepsza cena.
            Zaufaj ekspertom z wieloletnim doświadczeniem na rynku nieruchomości w Bydgoszczy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToContact}
              className="w-full sm:w-auto bg-gold hover:bg-gold-dark text-black font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl shadow-gold/30 text-lg"
            >
              Bezpłatna wycena
            </button>
            <a
              href="tel:+48123456789"
              className="w-full sm:w-auto border-2 border-gold text-gold hover:bg-gold hover:text-black font-bold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-lg"
            >
              <Phone size={20} />
              Zadzwoń teraz
            </a>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-10 sm:mb-12">
            Dlaczego <span className="text-gold">my:</span>
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-black/50 border border-gold/20 rounded-xl p-6 sm:p-8 hover:border-gold/40 transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-gold/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <ClipboardCheck className="text-gold" size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold mb-3">Potrzebujemy od Ciebie tylko decyzji</h4>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Zajmujemy się wszystkim od A do Z. Od wyceny, przez sprawdzenie stanu formalno-prawnego po marketing, negocjacje i korzystną sprzedaż.
              </p>
            </div>

            <div className="bg-black/50 border border-gold/20 rounded-xl p-6 sm:p-8 hover:border-gold/40 transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-gold/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <DollarSign className="text-gold" size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold mb-3">Silniejszy potencjał negocjacyjny</h4>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Pobieramy prowizję od jednej strony, dlatego mamy lepsze warunki negocjacyjne i uzyskujemy lepsze ceny sprzedaży dla naszych klientów.
              </p>
            </div>

            <div className="bg-black/50 border border-gold/20 rounded-xl p-6 sm:p-8 hover:border-gold/40 transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-gold/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="text-gold" size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold mb-3">Doświadczenie Best Investments</h4>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Właściciel biura Filip Liberda ma 10 lat doświadczenia jako pośrednik i aktywny inwestor. Zna każdy zakamarek branży, bo sam wydał na pośredników setki tysięcy złotych i wie jak przeprowadzać każdą, nawet najtrudniejszą transakcję.
              </p>
            </div>

            <div className="bg-black/50 border border-gold/20 rounded-xl p-6 sm:p-8 hover:border-gold/40 transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-gold/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <Target className="text-gold" size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold mb-3">Nie współpracujemy z każdym</h4>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Jako biuro pracujemy na umowach na włączność, co pozwala nam wziąć pełną odpwowiedzialność za sprzedaż i odpowiednio w nią zainwestować. Tym samym unikamy "spalenia" oferty na rynku, ponieważ dbamy o interesy naszego klienta.
              </p>
            </div>

            <div className="bg-black/50 border border-gold/20 rounded-xl p-6 sm:p-8 hover:border-gold/40 transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-gold/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <Radio className="text-gold" size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold mb-3">Nowoczesne kanały sprzedaży</h4>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Nie ograniczamy się do portali ogłoszeniowych - współpracujemy z innymi biurami, inwestorami gotówkowymi, używamy mediów społecznościowych i inwestujemy w targetowane reklamy, które pozwalają nam docierać do odpowiednich kupujących.
              </p>
            </div>

            <div className="bg-black/50 border border-gold/20 rounded-xl p-6 sm:p-8 hover:border-gold/40 transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-gold/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="text-gold" size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold mb-3">Bezpieczeństwo transkacji</h4>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Dbamy o Twoje bezpieczeństwo i nie pozwolimy Ci stracić pieniędzy. Drobne błędy potrafią kosztować dziesiątki tysięcy złotych - z nami masz pewność, że nic takiego się nie wydarzy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
            Zobacz jak <span className="text-gold">pracujemy</span>
          </h3>
          <div className="relative aspect-video bg-gray-900 rounded-xl overflow-hidden border-2 border-gold/30 shadow-2xl shadow-gold/10">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-4">
                <div className="bg-gold/10 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <CheckCircle className="text-gold" size={36} />
                </div>
                <p className="text-lg sm:text-xl text-gray-300 font-medium">
                  Film prezentacyjny zostanie wkrótce dodany
                </p>
                <p className="text-sm sm:text-base text-gray-500 mt-2">
                  Przejrzyj formularz poniżej, aby umówić się na spotkanie
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-10 sm:mb-12">
            Co <span className="text-gold">zyskujesz</span> z nami?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {[
              'Bezpłatna wycena nieruchomości',
              'Profesjonalna fotografia i prezentacja',
              'Kompleksowa obsługa prawna',
              'Wsparcie w negocjacjach',
              'Marketing i promocja ogłoszenia',
              'Stały kontakt z doradcą'
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 sm:gap-4 bg-black/30 p-4 sm:p-5 rounded-lg border border-gold/10 hover:border-gold/30 transition-all duration-300">
                <CheckCircle className="text-gold flex-shrink-0 mt-1" size={20} />
                <span className="text-base sm:text-lg text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <h3 className="text-2xl sm:text-4xl font-bold mb-4">
              Skontaktuj się z <span className="text-gold">ekspertem</span>
            </h3>
            <p className="text-lg sm:text-xl text-gray-300">
              Wypełnij formularz, a nasz doradca skontaktuje się z Tobą w ciągu 24 godzin
            </p>
          </div>

          <div className="bg-gray-900 rounded-xl p-6 sm:p-10 border border-gold/20 shadow-2xl">
            {formStatus === 'success' ? (
              <div className="text-center py-8 sm:py-12">
                <div className="bg-gold/10 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <CheckCircle className="text-gold" size={40} />
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-gold mb-3 sm:mb-4">Dziękujemy!</h4>
                <p className="text-base sm:text-lg text-gray-300">
                  Twoja wiadomość została wysłana. Skontaktujemy się z Tobą wkrótce.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
                    Imię i nazwisko *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 sm:py-4 bg-black border border-gold/30 rounded-lg focus:outline-none focus:border-gold transition-colors text-white text-base sm:text-lg"
                    placeholder="Jan Kowalski"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2 text-gray-300">
                    Numer telefonu *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 sm:py-4 bg-black border border-gold/30 rounded-lg focus:outline-none focus:border-gold transition-colors text-white text-base sm:text-lg"
                    placeholder="+48 123 456 789"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
                    Adres e-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 sm:py-4 bg-black border border-gold/30 rounded-lg focus:outline-none focus:border-gold transition-colors text-white text-base sm:text-lg"
                    placeholder="jan.kowalski@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">
                    Wiadomość
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 sm:py-4 bg-black border border-gold/30 rounded-lg focus:outline-none focus:border-gold transition-colors text-white resize-none text-base sm:text-lg"
                    placeholder="Opisz swoją nieruchomość lub zadaj pytanie..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold hover:bg-gold-dark text-black font-bold px-8 py-4 sm:py-5 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-xl shadow-gold/30 text-base sm:text-lg"
                >
                  Wyślij wiadomość
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
            Dane <span className="text-gold">kontaktowe</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <a
              href="tel:+48123456789"
              className="bg-black/50 border border-gold/20 rounded-xl p-6 hover:border-gold/40 transition-all duration-300 text-center group"
            >
              <div className="bg-gold/10 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-all duration-300">
                <Phone className="text-gold" size={24} />
              </div>
              <h4 className="font-semibold mb-2 text-base sm:text-lg">Telefon</h4>
              <p className="text-gold text-base sm:text-lg">+48 123 456 789</p>
            </a>

            <a
              href="mailto:kontakt@bestinvestments.pl"
              className="bg-black/50 border border-gold/20 rounded-xl p-6 hover:border-gold/40 transition-all duration-300 text-center group"
            >
              <div className="bg-gold/10 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-all duration-300">
                <Mail className="text-gold" size={24} />
              </div>
              <h4 className="font-semibold mb-2 text-base sm:text-lg">Email</h4>
              <p className="text-gold break-all text-base sm:text-lg">kontakt@bestinvestments.pl</p>
            </a>

            <div className="bg-black/50 border border-gold/20 rounded-xl p-6 hover:border-gold/40 transition-all duration-300 text-center">
              <div className="bg-gold/10 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-gold" size={24} />
              </div>
              <h4 className="font-semibold mb-2 text-base sm:text-lg">Lokalizacja</h4>
              <p className="text-gold text-base sm:text-lg">Bydgoszcz</p>
            </div>
          </div>

          <div className="mt-12 sm:mt-16 flex justify-center">
            <div className="text-center">
              <div className="inline-block border-2 border-gold/20 rounded-xl overflow-hidden mb-4">
                <img
                  src="/photo_2025-12-12_18-33-27.jpg"
                  alt="Filip Liberda"
                  className="w-64 h-64 sm:w-80 sm:h-80 object-cover"
                />
              </div>
              <p className="text-xl sm:text-2xl font-semibold text-gold">Filip Liberda</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gold/20 bg-black">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 text-sm sm:text-base">
            © 2025 <a href="https://procesflow.pl/" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Procesflow</a>. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
