import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function UseInView() {
  const keduaRef = useRef<HTMLDivElement>(null);
  const ketigaRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(keduaRef);
  const isInViewKetiga = useInView(ketigaRef);

  if (isInView) {
    console.log("in view kedua");
  }

  if (isInViewKetiga) {
    console.log("in view ketiga");
  }

  return (
    <div>
      <div className="container">FramerScroll1</div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
        className={`border min-h-screen `}
      >
        pertama
      </motion.div>
      <motion.div
        ref={keduaRef}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
        className={`${isInView ? "bg-red-500" : "bg-white"} transition duration-500 border min-h-screen`}
      >
        kedua
      </motion.div>
      <motion.div
        ref={ketigaRef}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
        className="border min-h-screen"
      >
        ketiga
      </motion.div>
      <motion.div
        ref={ketigaRef}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
        className="border min-h-screen"
      >
        ketiga
      </motion.div>
    </div>
  );
}
