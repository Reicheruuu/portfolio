import { motion, AnimatePresence } from 'framer-motion'
import { HiArrowUp } from 'react-icons/hi2'
import { useScrollTop } from '../hooks/useScrollTop'

export default function BackToTop() {
  const { show, scrollToTop } = useScrollTop()

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-xl bg-accent/10 border border-accent/30
                     hover:bg-accent/20 hover:border-accent/50 flex items-center justify-center
                     text-accent transition-all duration-300 shadow-[0_0_20px_rgba(0,245,196,0.15)]
                     hover:shadow-[0_0_30px_rgba(0,245,196,0.25)] backdrop-blur-sm"
          aria-label="Back to top"
        >
          <HiArrowUp className="w-4 h-4" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}