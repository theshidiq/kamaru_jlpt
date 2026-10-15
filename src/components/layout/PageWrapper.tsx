import { motion } from 'framer-motion'

interface Props {
  children: React.ReactNode
  className?: string
  /** Wider than the usual reading width, e.g. for a video next to a sidebar. */
  wide?: boolean
}

export function PageWrapper({ children, className = '', wide = false }: Props) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className={`${wide ? 'max-w-7xl' : 'max-w-5xl'} mx-auto px-4 py-6 ${className}`}
    >
      {children}
    </motion.main>
  )
}
