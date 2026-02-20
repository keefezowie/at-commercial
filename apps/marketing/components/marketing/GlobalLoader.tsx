"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./styles/loader.module.css"; // Create this CSS file next

export function GlobalLoader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Show loader for 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
// Use key to force re-render if needed, but AnimatePresence handles it
          key="loader"
          className={styles.loaderContainer}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, pointerEvents: "none" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            // When exiting, scale up slightly and fade out
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ 
              duration: 0.8, 
              repeat: Infinity, 
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          >
            <Image 
              src="/brand/transora-logo.png" 
              alt="Transora Loading" 
              width={80} 
              height={80} 
              priority
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
