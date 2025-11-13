import Hero from './components/Hero'
import StoryboardSection from './components/StoryboardSection'

const sections = [
  {
    id: 'story-1',
    title: 'Ignition: The Moment Power Wakes',
    description:
      'Dawn breaks over the city. The engine roars to life, precision and control syncing with pulse-quickening acceleration.',
    image:
      'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop',
    product: 'AeroCarbon Spoiler',
  },
  {
    id: 'story-2',
    title: 'Velocity: Cutting Through the Wind',
    description:
      'Aerodynamics refine every motion. Stability holds at speed as the car carves through air with purpose.',
    image:
      'https://images.unsplash.com/photo-1518558400941-68f8a09df0ff?q=80&w=2000&auto=format&fit=crop',
    product: 'MagRide Pro Suspension',
  },
  {
    id: 'story-3',
    title: 'Grip: Commanding Every Corner',
    description:
      'Tires lock with intent. Traction optimizes response time. The road becomes an ally, not an obstacle.',
    image:
      'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=2000&auto=format&fit=crop',
    product: 'HyperGrip Tires',
  },
  {
    id: 'story-4',
    title: 'Finish: Precision Meets Emotion',
    description:
      'Everything works in harmony. Power. Control. Design. The final stretch is a statement of mastery.',
    image:
      'https://images.unsplash.com/photo-1555626906-fcf10d71df6b?q=80&w=2000&auto=format&fit=crop',
    product: 'QuantumDrive ECU',
  },
]

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Hero />

      {/* Storyboard sections with high-motion transitions */}
      <div className="relative">
        {sections.map((s, i) => (
          <div key={s.id} className="relative">
            {/* Transition divider using parallax stripe */}
            {i > 0 && (
              <div className="relative h-24 w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              </div>
            )}
            <StoryboardSection
              id={s.id}
              index={i + 1}
              title={s.title}
              description={s.description}
              image={s.image}
              product={s.product}
            />
          </div>
        ))}
      </div>

      {/* Product rail */}
      <section className="bg-black py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h3 className="text-2xl font-bold sm:text-3xl">Featured Products</h3>
          <p className="mt-2 max-w-2xl text-white/70">
            Four flagship components designed for performance. Tap any badge in the story to learn more.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: 'AeroCarbon Spoiler', img: 'https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=1200&auto=format&fit=crop' },
              { name: 'MagRide Pro Suspension', img: 'https://images.unsplash.com/photo-1523537444950-6fdfc1f1e0c6?q=80&w=1200&auto=format&fit=crop' },
              { name: 'HyperGrip Tires', img: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1200&auto=format&fit=crop' },
              { name: 'QuantumDrive ECU', img: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1200&auto=format&fit=crop' },
            ].map((p) => (
              <div key={p.name} className="group relative overflow-hidden rounded-xl border border-white/10">
                <img src={p.img} alt={p.name} className="h-48 w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <h4 className="text-sm font-semibold">{p.name}</h4>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-black">Learn</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/80 py-10 text-center text-white/60">
        © {new Date().getFullYear()} Velocity Labs — All rights reserved.
      </footer>
    </div>
  )
}
