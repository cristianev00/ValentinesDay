"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import MessageForm from "./message-form";
import { motion } from "framer-motion";

interface ConfirmationDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConfirmationDialog({
  isOpen,
  onClose,
}: ConfirmationDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="rounded-lg shadow-xl">
        <DialogHeader className="text-center text-slate-500 p-4 items-center">
          <DialogTitle>
            <motion.p
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-karla text-center"
            >
              💖 I Wanna Check It&lsquo;s You
            </motion.p>
          </DialogTitle>
          <DialogDescription className="text-center items-center">
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-pink-500 mt-2 font-karla text-center"
            >
              Please enter your phone number to continue with the special
              message.
            </motion.a>
          </DialogDescription>
        </DialogHeader>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <MessageForm />
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}
