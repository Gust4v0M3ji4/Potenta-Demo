import { Link } from '@tanstack/react-router'
import { Card, CardContent, CardFooter } from '../components/ui/card'



const NOTICIAS = [
  {
    id: 1,
    title: 'TERMOCUPLAS: SENSORES DE TEMPERATURA',
    desc: 'Las termocuplas son sensores de temperatura ideales para medir variaciones térmicas en diversos procesos industriales, permitiendo el control y ajuste adecuado de las condiciones operativas.',
    date: '2 de diciembre de 2024',
    comments: 0,
    img: 'https://via.placeholder.com/400x300/e4e4e7/52525b?text=Termocuplas'
  },
  {
    id: 2,
    title: 'AUTOMATIZACIÓN CON PLC OMRON',
    desc: 'La evolución de los controladores lógicos programables está revolucionando las líneas de ensamblaje ecuatorianas gracias a su alta fiabilidad y velocidad de procesamiento.',
    date: '15 de noviembre de 2024',
    comments: 2,
    img: 'https://via.placeholder.com/400x300/e4e4e7/52525b?text=PLC+Omron'
  },
  {
    id: 3,
    title: 'CALIBRACIÓN DE EQUIPOS DE PRESIÓN',
    desc: 'La calibración periódica previene fallos catastróficos. Descubre la norma ISO para la calibración de válvulas y transmisores Winters.',
    date: '28 de octubre de 2024',
    comments: 5,
    img: 'https://via.placeholder.com/400x300/e4e4e7/52525b?text=Calibracion'
  }
]

export default function BlogComponent() {
  return (
    <div className="min-h-screen bg-white pb-24">
      
      {/* Hero Banner del Blog */}
      <section className="relative bg-[#06253a] py-20 lg:py-32 flex items-center justify-center overflow-hidden">
        {/* Placeholder de imagen de fondo industrial */}
        <div 
          className="absolute inset-0 z-0 opacity-20 bg-cover bg-center" 
          style={{ backgroundImage: 'url("https://via.placeholder.com/1920x600/06253a/ffffff?text=Industrial+Factory+Background")' }}
        />
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-black text-white uppercase tracking-wide">
            Blog
          </h1>
        </div>
      </section>

      {/* Título de Sección */}
      <div className="container mx-auto px-6 mt-16 mb-12 text-center md:text-left max-w-6xl">
        <h2 className="text-3xl font-bold text-[#ff5100] uppercase tracking-wide">
          Artículos y Noticias
        </h2>
      </div>

      {/* Grid de Artículos */}
      <section className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NOTICIAS.map((post) => (
            <Card key={post.id} className="rounded-none border-zinc-200 overflow-hidden hover:shadow-lg transition-shadow bg-white flex flex-col h-full">
              
              {/* Imagen del post */}
              <div className="aspect-[4/3] bg-zinc-100 overflow-hidden relative border-b border-zinc-100">
                <img src={post.img} alt={post.title} className="w-full h-full object-cover" />
              </div>

              {/* Contenido (Cuerpo) */}
              <CardContent className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[#ff5100] uppercase mb-4 leading-tight">
                  {post.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed flex-grow">
                  {post.desc}
                </p>
                <div className="mt-6">
                  <a href="#" className="text-blue-600 text-xs font-bold uppercase tracking-wider hover:underline">
                    Read More &raquo;
                  </a>
                </div>
              </CardContent>

              {/* Footer del Post */}
              <CardFooter className="px-6 py-4 border-t border-zinc-100 bg-white">
                <div className="text-xs font-semibold text-[#ff5100] flex items-center gap-1.5 w-full">
                  <span>{post.date}</span>
                  <span>&bull;</span>
                  <span>{post.comments === 0 ? 'No hay comentarios' : `${post.comments} comentarios`}</span>
                </div>
              </CardFooter>

            </Card>
          ))}
        </div>
      </section>
      
    </div>
  )
}