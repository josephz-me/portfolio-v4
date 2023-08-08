import React, { useState, useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { motion, AnimatePresence } from "framer-motion";

export const DialogTrigger = Dialog.Trigger;
export const DialogRoot = Dialog.Root;

export function BookList(props) {
  return (
    <Dialog.Portal>
      <AnimatePresence>
        <>
          <Dialog.Overlay>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.1,
              }}
              className="bg-black/50 fixed top-0 left-0 right-0 bottom-0 z-10"
            />
          </Dialog.Overlay>
          <Dialog.Content>
            <motion.div
              className="overflow-hidden overflow-auto p-4 bg-zinc-800 fixed m-2 rounded-md border border-solid border-white/10 h-[calc(100vh-16px)] w-[calc(100vw-16px)] max-w-[400px] top-0 left-0 bottom-0 z-10"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{
                duration: 0.2,
                ease: [0.05, 0.7, 0.1, 1.0],
              }}
            >
              <Dialog.Title className="h2 text-white">
                Reading List
              </Dialog.Title>
              <Dialog.Description className="text-white">
                A list of books I've found insightful or enjoyable to read.
              </Dialog.Description>
              <Dialog.Close />
            </motion.div>
          </Dialog.Content>
        </>
      </AnimatePresence>
    </Dialog.Portal>
  );
}
