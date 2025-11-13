import { motion, useScroll, useTransform } from 'framer-motion'
import ProductBadge from './ProductBadge'

export default function StoryboardSection({ id, title, description, image, product, index }) {
  const { scrollYProgress } = useScroll({ target: undefined })
  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.3], [0, 1, 1])

  return (
    <section id={id} className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0 -z-0">
        <img src={image} alt="section" className="h-full w-full object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-6 py-20">
        <motion.div style={{ y, opacity }} className="max-w-2xl">
          <h2 className="text-3xl font-bold sm:text-5xl">{title}</h2>
          <p className="mt-4 text-white/80 sm:text-lg">{description}</p>
        </motion.div>

        <div className="pointer-events-none absolute bottom-6 right-6 z-20">
          <ProductBadge index={index} name={product} onClick={() => {}} />
        </div>
      </div>
    </section>
  )
}
