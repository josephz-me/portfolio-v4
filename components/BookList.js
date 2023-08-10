import React, { useState, useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { useTransition, animated, config } from "@react-spring/web";
import Image from "next/image";

const bookEntries = [
  {
    title: "Metaphors We Live By",
    image: "https://images.isbndb.com/covers/80/13/9780226468013.jpg",
    description:
      "Exploring how everyday language and thought are shaped by metaphors, revealing their profound influence on our perception and understanding of the world.",
    url: "https://isbndb.com/book/9780226468013",
  },
  {
    title: "Ruthless Elimination of Hurry",
    image: "https://images.isbndb.com/covers/30/97/9780525653097.jpg",
    description:
      "Discusses the detrimental effects of modern-day busyness on our well-being and provides insights on how to embrace a more intentional and meaningful life.",
    url: "https://isbndb.com/book/9780525653097",
  },
  {
    title: "Sapiens: A Brief History of Humankind",
    image: "https://images.isbndb.com/covers/85/01/9780771038501.jpg",
    description:
      "Presents a comprehensive overview of the evolution of Homo sapiens, from ancient times to the present, exploring how cultural, social, and technological developments have shaped human history.",
    url: "https://isbndb.com/book/9780771038501",
  },
  {
    title: "Steve Jobs",
    image: "https://images.isbndb.com/covers/85/46/9781451648546.jpg",
    description:
      "A comprehensive biography of the visionary co-founder of Apple, delving into his life, creativity, and impact on technology and business.",
    url: "https://isbndb.com/book/9781451648546",
  },
  // Add more book entries here
];

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
      mass: 1,
      tension: 400,
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
                className="flex flex-col overflow-auto bg-zinc-800 fixed m-2 rounded-md border border-solid border-white/10 h-[calc(100vh-16px)] w-[calc(100vw-16px)] max-w-[500px] top-0 left-0 bottom-0 z-10"
                style={styles}
              >
                <div className="py-4 mx-4 bg-zinc-800 sticky top-0 z-10 border-b border-dotted border-white/10">
                  <div className="flex">
                    <div className="flex w-full">
                      <Dialog.Title className="h2 text-white">
                        Reading List{" "}
                        <span className="ml-1 opacity-40 rounded-md">
                          {bookEntries.length}
                        </span>
                      </Dialog.Title>
                    </div>
                    <Dialog.Close>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-5 h-5 stroke-white opacity-40 hover:opacity-80"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </Dialog.Close>
                  </div>
                </div>

                <div className="flex flex-col gap-3 p-4">
                  {bookEntries.map((book, index) => (
                    <BookCard
                      key={index}
                      image={book.image}
                      title={book.title}
                      description={book.description}
                      url={book.url}
                    />
                  ))}
                </div>
              </animated.div>
            </Dialog.Content>
          </>
        ) : null
      )}
    </Dialog.Portal>
  );
}

export function BookCard(props) {
  return (
    <a
      href={props.url}
      rel="noreferrer"
      target="_blank"
      className="text-white p-4 bg-white/[.05] hover:bg-white/10 game-border border border-solid border-white/[.05] flex flex-col md:flex-row gap-4 "
    >
      <Image
        width={4}
        height={32}
        alt={"Book thumbnail"}
        className="md:mt-1 bg-white rounded-sm border border-solid border-white/10"
        src={props.image}
      />
      <div className="w-full flex flex-col">
        <h3 className="h3">{props.title}</h3>
        <p className="text-sm opacity-60 font-sans normal-case tracking-normal">
          {props.description}
        </p>
      </div>
    </a>
  );
}
