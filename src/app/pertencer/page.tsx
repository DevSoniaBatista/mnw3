import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Heart, Users, Target, Zap, Check } from 'lucide-react'

export default function PertencerPage() {
  return (
    <div className="min-h-screen font-sans flex flex-col bg-[#181818]">
      <Header />

      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-200/20 via-purple-200/20 to-white/10" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl leading-tight tracking-[0.2em] mb-6">
              PERTENCER
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto">
              Encontre sua comunidade. Compartilhe valores. Construa o futuro junto com mulheres que acreditam na Web3.
            </p>
          </div>
        </section>

        {/* Nosso Manifesto Section */}
        <section className="bg-white py-20 md:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-center mb-6">
              Nosso Manifesto
            </h2>
            <blockquote className="text-xl md:text-2xl italic text-foreground text-center mb-8">
              &ldquo;Acreditamos em um futuro descentralizado construído com equidade, diversidade e inclusão.&rdquo;
            </blockquote>
            <div className="space-y-6 text-base md:text-lg text-gray-700 leading-relaxed">
              <p>
                Acreditamos que a tecnologia blockchain tem o poder de transformar a forma como nos relacionamos, 
                trabalhamos e construímos o futuro. A Web3 não é apenas uma evolução tecnológica, mas uma oportunidade 
                única de criar novas economias, novas formas de governança e novos espaços de acesso democratizado.
              </p>
              <p>
                Sabemos que a diversidade não é apenas um valor, mas uma necessidade para que essa transformação seja 
                verdadeiramente revolucionária. Por isso, criamos um espaço seguro, acolhedor e inclusivo onde mulheres 
                de todos os backgrounds podem se encontrar, aprender, colaborar e construir juntas.
              </p>
              <p className="text-secondary text-xl md:text-2xl font-semibold text-center py-4">
                Você pertence ao futuro. E o futuro é construído por nós.
              </p>
              <p>
                Se você é desenvolvedora, designer, empreendedora, educadora, ou simplesmente uma mulher curiosa sobre 
                o futuro da tecnologia, você tem um lugar aqui. Junte-se a nós e vamos construir juntas um ecossistema 
                Web3 mais justo, acessível e representativo.
              </p>
            </div>
          </div>
        </section>

        {/* Nossa Essência Section */}
        <section className="bg-[#242424] py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
                Nossa Essência
              </h2>
              <p className="text-base md:text-lg text-gray-300">
                Os valores e princípios que nos guiam
              </p>
            </div>

            {/* Valores Subsection */}
            <div className="mb-16">
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-8">
                Valores
              </h3>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {/* Card 1 - Inclusão */}
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="mb-4 inline-flex items-center justify-center rounded-full bg-secondary/10 p-3">
                    <Heart className="h-6 w-6 text-secondary" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    Inclusão
                  </h4>
                  <p className="text-sm text-gray-600">
                    Acreditamos que todas as mulheres têm espaço na Web3, independente de background técnico.
                  </p>
                </div>

                {/* Card 2 - Colaboração */}
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="mb-4 inline-flex items-center justify-center rounded-full bg-primary/10 p-3">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    Colaboração
                  </h4>
                  <p className="text-sm text-gray-600">
                    Crescemos juntas, compartilhando conhecimento e oportunidades.
                  </p>
                </div>

                {/* Card 3 - Transparência */}
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="mb-4 inline-flex items-center justify-center rounded-full bg-secondary/10 p-3">
                    <Target className="h-6 w-6 text-secondary" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    Transparência
                  </h4>
                  <p className="text-sm text-gray-600">
                    Operamos de forma aberta, com governança participativa e decisões coletivas.
                  </p>
                </div>

                {/* Card 4 - Inovação */}
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="mb-4 inline-flex items-center justify-center rounded-full bg-primary/10 p-3">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    Inovação
                  </h4>
                  <p className="text-sm text-gray-600">
                    Exploramos novas possibilidades e construímos o futuro descentralizado.
                  </p>
                </div>
              </div>
            </div>

            {/* Princípios Subsection */}
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-8">
                Princípios
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-6 w-6 text-secondary" />
                  </div>
                  <p className="text-base md:text-lg text-gray-300">
                    Respeito mútuo e escuta ativa
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-6 w-6 text-secondary" />
                  </div>
                  <p className="text-base md:text-lg text-gray-300">
                    Compromisso com a diversidade e equidade
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
