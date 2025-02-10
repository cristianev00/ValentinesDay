"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import ConfirmationDialog from "./confirmation-dialog";
import { motion } from "framer-motion";

export default function ResponseSection() {
  const [isNoButtonClicked, setIsNoButtonClicked] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [buttonText, setButtonText] = useState("No");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleYesClick = () => {
    setIsDialogOpen(true);
    setShowMessage(true);
  };

  const handleNoClick = () => {
    setIsNoButtonClicked(true);
    setButtonText("Yes");
    setTimeout(() => {
      setIsDialogOpen(true);
      setShowMessage(true);
    }, 1000);
  };

  const handleMouseEnter = (e: React.MouseEvent) => {
    const button = e.currentTarget;
    const buttonRect = button.getBoundingClientRect();
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const distance = Math.sqrt(
      Math.pow(mouseX - (buttonRect.left + buttonRect.width / 2), 2) +
        Math.pow(mouseY - (buttonRect.top + buttonRect.height / 2), 2)
    );

    if (distance < 50) {
      const offsetX = Math.random() * 200 - 100;
      const offsetY = Math.random() * 200 - 100;
      setNoButtonPosition({ x: offsetX, y: offsetY });
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4 font-karla justify-center">
      <p className="text-lg text-gray-700 text-center">
        I would love to spend this special day with you.
      </p>
      <div className="flex space-x-4">
        <Button variant="outline" onClick={handleYesClick}>
          Yes
        </Button>
        <Button
          variant="outline"
          onClick={handleNoClick}
          onMouseEnter={handleMouseEnter}
          style={{
            transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
            transition: "transform 0.3s ease",
          }}
          disabled={isNoButtonClicked}
        >
          {buttonText}
        </Button>
      </div>

      {showMessage && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-xl font-semibold text-pink-600 mt-6"
        >
          &quot;You become responsible, forever, for what you have tamed.&quot;
          — Le Petit Prince
        </motion.p>
      )}

      <ConfirmationDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </div>
  );
}
