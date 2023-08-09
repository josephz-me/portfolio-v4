import React, { useState, useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { useTransition, animated, config } from "@react-spring/web";

export function DialogRoot(props) {
  return (
    <Dialog.Root open={props.open} onOpenChange={props.setOpen}>
      {props.children}
    </Dialog.Root>
  );
}

export const DialogTrigger = Dialog.Trigger;

export function BookList(props) {
  const transitions = useTransition(props.open, {
    from: { opacity: 0, transform: "translate3d(-20px,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0px,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-20px,0,0)" },
    config: {
      stiffness: 1000,
      damping: 40,
      mass: 1,
    },
  });
  return (
    <Dialog.Portal forceMount>
      {transitions((styles, item) =>
        item ? (
          <>
            <Dialog.Overlay forceMount asChild>
              <animated.div
                style={{ opacity: styles.opacity }}
                className="bg-black/50 fixed top-0 left-0 right-0 bottom-0 z-10"
              />
            </Dialog.Overlay>
            <Dialog.Content forceMount asChild>
              <animated.div
                className="overflow-hidden overflow-auto p-4 bg-zinc-800 fixed m-2 rounded-md border border-solid border-white/10 h-[calc(100vh-16px)] w-[calc(100vw-16px)] max-w-[400px] top-0 left-0 bottom-0 z-10"
                style={styles}
              >
                <Dialog.Title className="h2 text-white">
                  Reading List
                </Dialog.Title>
                <Dialog.Description className="text-white">
                  A list of books I've found insightful or enjoyable to read.
                </Dialog.Description>
                <Dialog.Close />
              </animated.div>
            </Dialog.Content>
          </>
        ) : null
      )}
    </Dialog.Portal>
  );
}
