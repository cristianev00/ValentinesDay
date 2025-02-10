"use client";
import ResponseSection from "@/components/buttons";
import ConfettiComponent from "@/components/confetti";
import CountdownTimer from "@/components/countdown";
import Footer from "@/components/footer";
import Header from "@/components/header";
import PhoneMockup from "@/components/phone-mockup";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function InvitationPage() {
  const [isStorming, setIsStorming] = useState(false);
  return (
    <div className="max-h-screen flex flex-col relative overflow-hidden overflow-y-auto">
      <Header />
      <ConfettiComponent />
      <AnimatePresence>
        {isStorming && (
          <motion.div
            key="sweetOverlay"
            className="absolute inset-0 z-40 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              background: `radial-gradient(circle,
              rgba(255,192,203,0.3) 20%,
              rgba(255,105,180,0.7) 60%,
              rgba(255,105,180,0.9) 90%)`,
            }}
          />
        )}
      </AnimatePresence>

      <main className="flex-grow container mx-auto p-4 pt-16 md:pt-28 z-50">
        <div className="flex flex-col md:flex-row justify-center gap-8 items-center">
          <div className="w-full md:w-[400px] flex justify-center md:justify-start">
            <PhoneMockup />
          </div>

          <div className="w-full md:w-[400px] flex flex-col text-center md:text-left">
            <CountdownTimer onStormChange={setIsStorming} />
            <h1 className="text-4xl font-extrabold text-pink-600 mb-4 font-karla">
              Will You Be My Valentine?
            </h1>
            <ResponseSection />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
