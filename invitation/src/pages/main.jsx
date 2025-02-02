import { motion } from "framer-motion";
import { useState } from "react";

export default function Invitation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container" onClick={() => setIsOpen(true)}>
      {/* 문이 닫혀 있을 때 "클릭해주세요!" 문구 표시 */}
      {!isOpen && <div className="click-text">🔔 클릭해주세요! 🔔</div>}

      {/* 초대장 내용 (문이 열리면 나타남) */}
      <motion.div 
        className="content"
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        💌 초대합니다 💌
      </motion.div>

      {/* 왼쪽 문 (이미지 배경) */}
      <motion.div
        className="door left"
        initial={{ rotateY: 0 }}
        animate={{ rotateY: isOpen ? -100 : 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />

      {/* 오른쪽 문 (이미지 배경) */}
      <motion.div
        className="door right"
        initial={{ rotateY: 0 }}
        animate={{ rotateY: isOpen ? 100 : 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
    </div>
  );
}
