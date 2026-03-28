import { motion } from 'framer-motion'

interface Props {
  children: React.ReactNode
  className?: string
}

export function PageWrapper({ children, className = '' }: Props) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className={`max-w-5xl mx-auto px-4 py-6 pb-24 md:pb-6 ${className}`}
    >
      {children}
    </motion.main>
  )
}
