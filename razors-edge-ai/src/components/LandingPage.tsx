import React, { useState, useRef } from 'react';
import { 
  Scissors, 
  Sparkles, 
  Camera, 
  Star, 
  MapPin, 
  Clock, 
  Phone, 
  Menu, 
  X,
  Zap,
  Users,
  Award,
  ChevronRight
} from 'lucide-react';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAIMirror, setShowAIMirror] = useState(false);
  const [scanningAnimation, setScanningAnimation] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
        setScanningAnimation(true);
        setTimeout(() => {
          setScanningAnimation(false);
          setShowResults(true);
        }, 3000);
      };
      reader.readAsDataURL(file);
    }
  };

  const openAIMirror = () => {
    setShowAIMirror(true);
  };

  const closeAIMirror = () => {
    setShowAIMirror(false);
    setScanningAnimation(false);
    setShowResults(false);
    setSelectedImage(null);
  };

  const services = [
    {
      name: "The Algorithm Fade",
      price: "$45",
      duration: "45 min",
      description: "AI-precision fade with mathematical perfection",
      icon: <Scissors className="w-8 h-8" />
    },
    {
      name: "Virtual Reality Cut",
      price: "$65",
      duration: "60 min",
      description: "Experience your future style with our AI mirror",
      icon: <Camera className="w-8 h-8" />
    },
    {
      name: "Neural Network Beard",
      price: "$35",
      duration: "30 min",
      description: "AI-enhanced beard shaping and styling",
      icon: <Sparkles className="w-8 h-8" />
    },
    {
      name: "Precision Enhancement",
      price: "$55",
      duration: "50 min",
      description: "Micro-precision trimming with robotic accuracy",
      icon: <Zap className="w-8 h-8" />
    }
  ];

  const testimonials = [
    {
      name: "Alex Chen",
      rating: 5,
      text: "The AI mirror showed me exactly how I'd look - mind blown! Best haircut of my life.",
      avatar: "A"
    },
    {
      name: "Marcus Johnson",
      rating: 5,
      text: "This place is the future. The precision is incredible, and the atmosphere is amazing.",
      avatar: "M"
    },
    {
      name: "David Park",
      rating: 5,
      text: "Cyber-noir vibes with cutting-edge tech. My beard has never looked better.",
      avatar: "D"
    }
  ];

  const smoothScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-yellow-400 bg-clip-text text-transparent">
                The Razor's Edge AI
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button onClick={() => smoothScrollTo('home')} className="hover:text-cyan-400 transition-colors">Home</button>
                <button onClick={() => smoothScrollTo('services')} className="hover:text-cyan-400 transition-colors">Services</button>
                <button onClick={() => smoothScrollTo('ai-mirror')} className="hover:text-cyan-400 transition-colors">AI Mirror</button>
                <button onClick={() => smoothScrollTo('gallery')} className="hover:text-cyan-400 transition-colors">Gallery</button>
                <button onClick={() => smoothScrollTo('contact')} className="bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-2 rounded-full hover:from-cyan-600 hover:to-blue-600 transition-all">
                  Book Now
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-cyan-400 transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button onClick={() => smoothScrollTo('home')} className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors">Home</button>
              <button onClick={() => smoothScrollTo('services')} className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors">Services</button>
              <button onClick={() => smoothScrollTo('ai-mirror')} className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors">AI Mirror</button>
              <button onClick={() => smoothScrollTo('gallery')} className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors">Gallery</button>
              <button onClick={() => smoothScrollTo('contact')} className="block px-3 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all">Book Now</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/luxury-modern-black-gold-barber-chairs-salon-interior.jpg" 
            alt="Modern Barbershop Interior" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-yellow-400 bg-clip-text text-transparent">
              Precision
            </span>
            <br />
            <span className="text-white">Meets Prediction</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Step into the future of grooming. Where artificial intelligence meets the art of precision cutting in our cyber-noir barbershop experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={openAIMirror}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 rounded-full text-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/25"
            >
              <Camera className="w-6 h-6 inline mr-2" />
              Try AI Styler
            </button>
            <button 
              onClick={() => smoothScrollTo('services')}
              className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-400 hover:text-black transition-all"
            >
              View Services
            </button>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-8 h-8 text-cyan-400 rotate-90" />
        </div>
      </section>

      {/* AI Mirror Section */}
      <section id="ai-mirror" className="py-20 bg-gradient-to-b from-black to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                The Virtual Mirror
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of hairstyling. Our AI analyzes your features and predicts your perfect cut before you sit in the chair.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/20">
                <div className="flex items-center mb-4">
                  <Sparkles className="w-8 h-8 text-cyan-400 mr-3" />
                  <h3 className="text-2xl font-bold text-cyan-400">AI-Powered Analysis</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Our advanced neural networks analyze facial structure, hair texture, and growth patterns to recommend the perfect style for you.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center"><Zap className="w-4 h-4 text-yellow-400 mr-2" />Face shape detection</li>
                  <li className="flex items-center"><Zap className="w-4 h-4 text-yellow-400 mr-2" />Hair texture analysis</li>
                  <li className="flex items-center"><Zap className="w-4 h-4 text-yellow-400 mr-2" />Style recommendations</li>
                </ul>
              </div>
              
              <button 
                onClick={openAIMirror}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 rounded-xl text-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all transform hover:scale-105"
              >
                <Camera className="w-6 h-6 inline mr-2" />
                Launch Virtual Mirror
              </button>
            </div>

            <div className="relative">
              <img 
                src="/images/ai-gan-powered-ar-virtual-hairstyle-try-on-interface.jpg" 
                alt="AI Virtual Mirror Interface" 
                className="w-full rounded-2xl shadow-2xl shadow-cyan-500/20"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Precision Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Each service is enhanced by AI precision and executed with master craftsmanship.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all group hover:transform hover:scale-105">
                <div className="text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{service.name}</h3>
                <p className="text-gray-400 mb-4 text-sm">{service.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-yellow-400">{service.price}</span>
                  <span className="text-gray-500 text-sm">{service.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gradient-to-b from-slate-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-yellow-400 bg-clip-text text-transparent">
                Precision Gallery
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Witness the artistry. Every cut is a masterpiece crafted with mathematical precision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-2xl">
              <img 
                src="/images/professional-barber-precision-fade-haircut.jpg" 
                alt="Precision Fade" 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-bold">Precision Fade</h3>
                  <p className="text-gray-300 text-sm">AI-enhanced technique</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-2xl">
              <img 
                src="/images/luxury-black-gold-barber-chair-modern-salon.jpg" 
                alt="Luxury Experience" 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-bold">Luxury Experience</h3>
                  <p className="text-gray-300 text-sm">Premium comfort & style</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-2xl">
              <img 
                src="/images/mens-trendy-hairstyles-2025-fade-crop-collection.jpg" 
                alt="2025 Styles" 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-bold">2025 Trends</h3>
                  <p className="text-gray-300 text-sm">Cutting-edge styles</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Client Reviews
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-6 rounded-2xl border border-cyan-500/20">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.avatar}
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-black to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Book Your Session
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-6 rounded-2xl border border-cyan-500/20">
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-cyan-400 mr-3" />
                  <h3 className="text-xl font-bold text-white">Location</h3>
                </div>
                <p className="text-gray-300">123 Cyber Street, Future District<br />Neo City, NC 2025</p>
              </div>

              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-6 rounded-2xl border border-cyan-500/20">
                <div className="flex items-center mb-4">
                  <Clock className="w-6 h-6 text-cyan-400 mr-3" />
                  <h3 className="text-xl font-bold text-white">Hours</h3>
                </div>
                <p className="text-gray-300">Mon-Fri: 9AM - 8PM<br />Sat-Sun: 10AM - 6PM</p>
              </div>

              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-6 rounded-2xl border border-cyan-500/20">
                <div className="flex items-center mb-4">
                  <Phone className="w-6 h-6 text-cyan-400 mr-3" />
                  <h3 className="text-xl font-bold text-white">Contact</h3>
                </div>
                <p className="text-gray-300">(555) 123-EDGE<br />info@razorsedge.ai</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">Book Now</h3>
              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full p-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full p-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <select className="w-full p-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition-colors">
                    <option>Select Service</option>
                    <option>The Algorithm Fade - $45</option>
                    <option>Virtual Reality Cut - $65</option>
                    <option>Neural Network Beard - $35</option>
                    <option>Precision Enhancement - $55</option>
                  </select>
                </div>
                <div>
                  <textarea 
                    placeholder="Special Requests" 
                    rows={4}
                    className="w-full p-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-3 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all"
                >
                  Book Appointment
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-yellow-400 bg-clip-text text-transparent mb-4">
              The Razor's Edge AI
            </div>
            <p className="text-gray-400 mb-6">Where precision meets prediction</p>
            <div className="flex justify-center space-x-8">
              <div className="flex items-center text-gray-400">
                <Users className="w-5 h-5 mr-2 text-cyan-400" />
                <span>1000+ Happy Clients</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Award className="w-5 h-5 mr-2 text-yellow-400" />
                <span>Best of 2025</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Sparkles className="w-5 h-5 mr-2 text-blue-400" />
                <span>AI-Powered</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* AI Mirror Modal */}
      {showAIMirror && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
          <div className="bg-gradient-to-br from-slate-900 to-black p-8 rounded-2xl border border-cyan-500/30 max-w-2xl w-full mx-4">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-cyan-400">Virtual Barber Mirror</h3>
              <button onClick={closeAIMirror} className="text-gray-400 hover:text-white transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            {!selectedImage ? (
              <div className="text-center">
                <div className="border-2 border-dashed border-cyan-500/50 rounded-lg p-12 mb-6">
                  <Camera className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                  <p className="text-gray-300 mb-4">Upload your photo to see your perfect hairstyle</p>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all"
                  >
                    Choose Photo
                  </button>
                </div>
                <p className="text-sm text-gray-400">
                  Your photo is processed locally and never stored on our servers
                </p>
              </div>
            ) : (
              <div className="text-center">
                {scanningAnimation && (
                  <div className="mb-6">
                    <div className="relative">
                      <img src={selectedImage} alt="Scanning" className="w-full max-w-sm mx-auto rounded-lg" />
                      <div className="absolute inset-0 border-2 border-cyan-400 rounded-lg animate-pulse"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-cyan-400 font-bold text-lg animate-pulse">
                          Scanning... Analyzing features
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {showResults && (
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 p-6 rounded-lg border border-cyan-500/30">
                      <h4 className="text-xl font-bold text-cyan-400 mb-4">AI Recommendation</h4>
                      <p className="text-gray-300 mb-2">
                        Based on your oval face shape and hair texture, we recommend:
                      </p>
                      <p className="text-yellow-400 font-bold text-lg">Textured French Crop with High Fade</p>
                      <p className="text-gray-400 text-sm mt-2">
                        Perfect for your facial proportions and will add definition to your features.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-slate-800/50 p-4 rounded-lg border border-cyan-500/20">
                        <img 
                          src="/images/mens-textured-french-crop-skin-fade-hairstyle.jpg" 
                          alt="Recommended Style" 
                          className="w-full h-32 object-cover rounded mb-2"
                        />
                        <p className="text-sm text-cyan-400 font-semibold">Your Style Match</p>
                      </div>
                      <div className="bg-slate-800/50 p-4 rounded-lg border border-yellow-500/20">
                        <img 
                          src="/images/mens-trendy-hairstyles-fade-crop-collage.jpg" 
                          alt="Alternative Styles" 
                          className="w-full h-32 object-cover rounded mb-2"
                        />
                        <p className="text-sm text-yellow-400 font-semibold">Alternative Options</p>
                      </div>
                    </div>

                    <button 
                      onClick={() => {
                        closeAIMirror();
                        smoothScrollTo('contact');
                      }}
                      className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 px-6 py-3 rounded-lg font-semibold hover:from-yellow-600 hover:to-orange-600 transition-all"
                    >
                      Book This Style
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;