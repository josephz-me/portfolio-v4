import React from "react";
import * as Dialog from "@radix-ui/react-dialog";

export function BookList() {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="text-white">Open!!!!!!!!!!</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/50 fixed top-0 left-0 right-0 bottom-0 z-10" />
        <Dialog.Content className="overflow-hidden overflow-auto p-4 bg-zinc-800 fixed m-2 rounded-md border border-solid border-white/10 h-[calc(100vh-16px)] w-[400px] top-0 left-0 bottom-0 z-10">
          <Dialog.Title>
            <h1 className="h2 text-white">Reading List</h1>
          </Dialog.Title>
          <Dialog.Description className="text-white">
            A list of books I've found insightful or enjoyable to read.
          </Dialog.Description>
          <Dialog.Close />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
