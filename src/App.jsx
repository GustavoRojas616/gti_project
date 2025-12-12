import { useEffect, useState } from 'react'
import './App.css'
import logoESCOM from './assets/logoESCOM2x.png'

function App() {
  const [scrollY, setScrollY] = useState(0)
  const [showNav, setShowNav] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      setShowNav(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">

      {/* Floating Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${showNav ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}>
        <div className="mx-auto max-w-6xl px-6 py-4">
          <div className="glass-card rounded-2xl px-8 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">CF</span>
              </div>
              <span className="text-white font-bold text-xl">CloudForge</span>
            </div>
            <div className="hidden md:flex gap-8">
              <a href="#mision" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Misión</a>
              <a href="#vision" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Visión</a>
              <a href="#valores" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Valores</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-60 left-1/4 w-1 h-1 bg-cyan-300 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 right-1/3 w-2 h-2 bg-blue-300 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 right-20 w-1 h-1 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>

        {/* Gradient Orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/30 rounded-full filter blur-[120px] animate-float"></div>
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-blue-500/30 rounded-full filter blur-[120px] animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-500/20 rounded-full filter blur-[100px] animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Hero Content */}
        <div
          className="relative z-10 text-center px-6 max-w-6xl mx-auto"
          style={{ transform: `translateY(${scrollY * 0.3}px)`, opacity: 1 - scrollY / 600 }}
        >
          {/* Logo Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-2 mb-8 glass-card rounded-full animate-fade-in">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-300 font-medium">Transformación Digital en la Nube</span>
          </div>

          <h1 className="text-7xl md:text-9xl font-black text-white mb-6 animate-fade-in leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-2xl">
              CloudForge
            </span>
            <br />
            <span className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">
              Solutions
            </span>
          </h1>

          <p className="text-xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-12 animate-fade-in-delay leading-relaxed font-light">
            Transformando empresas a través de <span className="text-cyan-400 font-semibold">microservicios</span> y <span className="text-blue-400 font-semibold">arquitectura en la nube</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in-delay">
            <button className="group relative px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl font-bold text-lg text-white overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/50 hover:scale-105">
              <span className="relative z-10">Comenzar Ahora</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="px-10 py-5 glass-card rounded-2xl font-semibold text-lg text-white hover:bg-white/10 transition-all duration-300 hover:scale-105">
              Conocer Más
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce mt-16">
            <svg className="w-8 h-8 mx-auto text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>


      </section>

      {/* Misión Section */}
      <section id="mision" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 scroll-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full">
                <span className="text-cyan-400 font-bold">01</span>
                <span className="text-gray-400">•</span>
                <span className="text-sm text-gray-300">Nuestra Misión</span>
              </div>

              <h2 className="text-6xl md:text-7xl font-black text-white leading-tight">
                Impulsando la
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Transformación
                </span>
              </h2>

              <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>

              <p className="text-xl text-gray-300 leading-relaxed font-light text-justify">
                Brindar soluciones de consultoría en microservicios y arquitectura en la nube,
                optimizando la <span className="text-cyan-400 font-semibold">escalabilidad</span>, <span className="text-blue-400 font-semibold">seguridad</span> y <span className="text-purple-400 font-semibold">eficiencia</span> de los sistemas de nuestros clientes,
                para impulsar su transformación digital.
              </p>


            </div>

            <div className="relative scroll-fade-in-delay">
              <div className="glass-card p-12 rounded-3xl glow-on-hover">
                <div className="grid grid-cols-2 gap-8">
                  {[
                    { icon: '🚀', label: 'Escalabilidad' },
                    { icon: '🔒', label: 'Seguridad' },
                    { icon: '⚡', label: 'Rendimiento' },
                    { icon: '🎯', label: 'Precisión' },
                  ].map((item, idx) => (
                    <div key={idx} className="text-center space-y-3">
                      <div className="text-6xl">{item.icon}</div>
                      <div className="text-white font-semibold">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visión Section */}
      <section id="vision" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1 scroll-fade-in">
              <div className="glass-card p-12 rounded-3xl glow-on-hover">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl"></div>
                  <svg className="relative w-full h-48 text-blue-400/40" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="space-y-8 order-1 lg:order-2 scroll-fade-in-delay">
              <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full">
                <span className="text-blue-400 font-bold">02</span>
                <span className="text-gray-400">•</span>
                <span className="text-sm text-gray-300">Nuestra Visión</span>
              </div>

              <h2 className="text-6xl md:text-7xl font-black text-white leading-tight">
                El Futuro
                <span className="block bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
                  En la Nube
                </span>
              </h2>

              <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full"></div>

              <p className="text-xl text-gray-300 leading-relaxed font-light text-justify">
                Impulsar a las empresas a crecer de forma <span className="text-blue-400 font-semibold">ágil</span> y <span className="text-cyan-400 font-semibold">segura</span> en la nube,
                convirtiendo la tecnología en un habilitador real de sus objetivos.
              </p>


            </div>
          </div>
        </div>
      </section>

      {/* Valores Section */}
      <section id="valores" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 scroll-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full mb-8">
              <span className="text-purple-400 font-bold">03</span>
              <span className="text-gray-400">•</span>
              <span className="text-sm text-gray-300">Nuestros Valores</span>
            </div>

            <h2 className="text-6xl md:text-7xl font-black text-white mb-6 leading-tight">
              Lo Que Nos
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Define
              </span>
            </h2>

            <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '⚡', title: 'Agilidad', desc: 'Adaptación rápida a cambios y necesidades del cliente', color: 'from-cyan-500 to-blue-500' },
              { icon: '🤝', title: 'Confianza', desc: 'Relaciones sólidas basadas en transparencia y cumplimiento', color: 'from-blue-500 to-purple-500' },
              { icon: '🔄', title: 'Colaboración', desc: 'Trabajo en equipo y co-creación con nuestros clientes', color: 'from-purple-500 to-pink-500' },
              { icon: '💙', title: 'Lealtad', desc: 'Compromiso genuino con clientes, colaboradores y socios', color: 'from-blue-500 to-cyan-500' },
              { icon: '🔍', title: 'Transparencia', desc: 'Comunicación clara y honesta en cada proceso', color: 'from-cyan-500 to-teal-500' },
              { icon: '✅', title: 'Responsabilidad', desc: 'Cumplir lo prometido, haciéndonos cargo de resultados', color: 'from-teal-500 to-green-500' },
              { icon: '🙏', title: 'Respeto', desc: 'Consideración hacia cada persona, empresa y proyecto', color: 'from-green-500 to-emerald-500' },
              { icon: '⚖️', title: 'Integridad', desc: 'Actuar con ética en todas las decisiones', color: 'from-emerald-500 to-cyan-500' },
              { icon: '💚', title: 'Empatía', desc: 'Escuchar y entender las necesidades reales del cliente', color: 'from-cyan-500 to-blue-600' },
            ].map((valor, index) => (
              <div
                key={index}
                className="group glass-card p-8 rounded-2xl glow-on-hover scroll-fade-in relative overflow-hidden"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${valor.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <div className="relative">
                  <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{valor.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-3">{valor.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{valor.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 px-6 relative bg-slate-900/50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="scroll-fade-in space-y-8">
            <h2 className="text-5xl md:text-6xl font-black text-white">
              Un Equipo
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Extraordinario
              </span>
            </h2>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Desarrollado con pasión por el <span className="text-cyan-400 font-semibold">Equipo Tamalocos</span>
            </p>

            <div className="inline-flex items-center gap-3 glass-card px-8 py-4 rounded-2xl mt-8">
              <img src={logoESCOM} alt="ESCOM IPN" className="h-12 w-auto" />
              <div className="text-left">
                <div className="text-white font-bold">ESCOM IPN</div>
                <div className="text-sm text-gray-400">Instituto Politécnico Nacional</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">CF</span>
                </div>
                <span className="text-white font-bold text-xl">CloudForge</span>
              </div>
              <p className="text-gray-400 text-sm">
                Transformando empresas a través de la tecnología en la nube
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-white font-bold text-lg">Enlaces Rápidos</h3>
              <div className="flex flex-col gap-2">
                <a href="#mision" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Misión</a>
                <a href="#vision" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Visión</a>
                <a href="#valores" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Valores</a>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-white font-bold text-lg">Contacto</h3>
              <div className="flex flex-col gap-2 text-sm text-gray-400">
                <p>ESCOM - IPN</p>
                <p>Ciudad de México</p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800/50 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 <span className="text-cyan-400 font-semibold">CloudForge Solutions</span>. Equipo Tamalocos - ESCOM IPN
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Agregar observer para animaciones al scroll
if (typeof window !== 'undefined') {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  }, { threshold: 0.1 })

  setTimeout(() => {
    document.querySelectorAll('.scroll-fade-in, .scroll-fade-in-delay').forEach(el => {
      observer.observe(el)
    })
  }, 100)
}

export default App