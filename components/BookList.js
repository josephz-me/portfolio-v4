import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { motion, AnimatePresence } from "framer-motion";

export const DialogRoot = Dialog.Root;
export const DialogTrigger = Dialog.Trigger;

export function BookList() {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/50 fixed top-0 left-0 right-0 bottom-0 z-10" />
      <AnimatePresence>
        <Dialog.Content
          forwardedAs={motion.div}
          initial={{ opacity: 0, y: 0, scale: 1 }}
          animate={{ opacity: 1, y: 0, scaleX: 1, scaleY: 1 }}
          exit={{ scale: 0, opacity: 0, scale: 0 }}
          className="overflow-hidden overflow-auto p-4 bg-zinc-800 fixed m-2 rounded-md border border-solid border-white/10 h-[calc(100vh-16px)] w-[calc(100vw-16px)] max-w-[400px] top-0 left-0 bottom-0 z-10"
        >
          <Dialog.Title>
            <h1 className="h2 text-white">Reading List</h1>
          </Dialog.Title>
          <Dialog.Description className="text-white">
            A list of books I've found insightful or enjoyable to read.
          </Dialog.Description>
          <Dialog.Close />
        </Dialog.Content>
      </AnimatePresence>
    </Dialog.Portal>
  );
}
