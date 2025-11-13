import { motion } from 'framer-motion'

export default function ProductBadge({ index = 1, name = 'Product', onClick }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="group pointer-events-auto flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-black shadow-lg backdrop-blur-md transition hover:bg-white"
    >
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-black text-white">{index}</span>
      <span className="pr-1">{name}</span>
      <svg className="h-4 w-4 opacity-60 transition group-hover:translate-x-0.5 group-hover:opacity-100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </motion.button>
  )
}
