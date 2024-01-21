import React, { useState, useEffect } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { useTransition, animated, config } from '@react-spring/web';
import Image from 'next/image';

const bookEntries = [
  {
    title: 'Tomorrow and Tomorrow and Tomorrow',
    image: 'https://m.media-amazon.com/images/I/91HwoNG6iqL._SL1500_.jpg',
    description:
      'Sam and Sadie—two college friends, often in love, but never lovers—become creative partners in a dazzling and intricately imagined world of video game design, where success brings them fame, joy, tragedy, duplicity, and, ultimately, a kind of immortality.',
    url: 'https://www.amazon.com/Tomorrow-novel-Gabrielle-Zevin-ebook/dp/B09JBCGQB8/ref=sr_1_1?crid=1RZILIV61XAUB&keywords=tomorrow+and+tomorrow&qid=1702098739&s=digital-text&sprefix=tomorrow+and+tomorro%2Cdigital-text%2C197&sr=1-1',
  },
  {
    title: 'The Almanack of Naval Ravikant',
    image: 'https://m.media-amazon.com/images/I/61VbL0FspqL._SL1500_.jpg',
    description:
      'A collection of Naval’s wisdom and experience from the last ten years, shared as a curation of his most insightful interviews and poignant reflections.',
    url: 'https://www.amazon.com/Almanack-Naval-Ravikant-Wealth-Happiness-ebook/dp/B08FF8MTM6',
  },
  {
    title: 'Notes on the Synthesis of Form',
    image:
      'https://m.media-amazon.com/images/P/0674627512.01._SCLZZZZZZZ_SX500_.jpg',
    description:
      'Notes on the process of design: the process of inventing things which display new physical order, organization, form, in response to function.',
    url: 'https://isbndb.com/book/9780674627505',
  },
  {
    title: 'The Echo Wife',
    image: 'https://images.isbndb.com/covers/46/66/9781250174666.jpg',
    description:
      "A famed geneticist whose husband uses her methods to clone her — and has an affair with the clone. When he's murdered, the two women must figure out to do next.",
    url: 'https://isbndb.com/book/9781250174666',
  },
  {
    title: 'Metaphors We Live By',
    image: 'https://images.isbndb.com/covers/80/13/9780226468013.jpg',
    description:
      'Exploring how everyday language and thought are shaped by metaphors, revealing their profound influence on our perception and understanding of the world.',
    url: 'https://isbndb.com/book/9780226468013',
  },
  {
    title: 'Ruthless Elimination of Hurry',
    image: 'https://images.isbndb.com/covers/30/97/9780525653097.jpg',
    description:
      'Discusses the detrimental effects of modern-day busyness on our well-being and provides insights on how to embrace a more intentional and meaningful life.',
    url: 'https://isbndb.com/book/9780525653097',
  },
  {
    title: 'Sapiens: A Brief History of Humankind',
    image: 'https://images.isbndb.com/covers/85/01/9780771038501.jpg',
    description:
      'Presents a comprehensive overview of the evolution of Homo sapiens, from ancient times to the present, exploring how cultural, social, and technological developments have shaped human history.',
    url: 'https://isbndb.com/book/9780771038501',
  },
  {
    title: 'Steve Jobs',
    image: 'https://images.isbndb.com/covers/85/46/9781451648546.jpg',
    description:
      'A comprehensive biography of the visionary co-founder of Apple, delving into his life, creativity, and impact on technology and business.',
    url: 'https://isbndb.com/book/9781451648546',
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
  const isMobile =
    typeof navigator !== 'undefined' && /Mobi/i.test(navigator.userAgent);

  let motionDirection = isMobile
    ? 'translate3d(0px,20px,0)'
    : 'translate3d(-30px,0%,0)';
  const transitions = useTransition(props.open, {
    from: { opacity: 0, transform: motionDirection },
    enter: { opacity: 1, transform: `translate3d(0px,0px,0)` },
    leave: { opacity: 0, transform: motionDirection },
    config: {
      mass: 1,
      tension: 300,
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
                className="flex flex-col overflow-auto bg-neutral-800 fixed m-2 rounded-md border border-solid border-white/10 h-[calc(100vh-16px)] w-[calc(100vw-16px)] max-w-[550px] top-0 left-0 bottom-0 z-10 scrollbar-hide"
                style={styles}
              >
                <div className="p-4 bg-neutral-800 sticky top-0 z-10 border-b border-dotted border-white/10">
                  <div className="flex">
                    <div className="flex w-full">
                      <Dialog.Title className="h2 text-white">
                        Books
                        <span className="ml-2 text-yellow-300 rounded-md">
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

                <div className="flex flex-col gap-3 p-4 z-0">
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
      className="text-white p-4 bg-white/[.05] hover:bg-white/10 game-border border border-solid border-white/[.05] flex flex-col md:flex-row gap-5 "
    >
      <div className="md:mt-1 w-[45px] h-[69px] border border-solid border-white shadow-xl rounded-sm">
        <Image
          width={43}
          height={67}
          layout="fixed"
          alt={'Book thumbnail'}
          src={props.image}
          objectFit="cover"
        />
      </div>
      <div className="w-full flex flex-col">
        <h1 className="h4 tracking-[.04rem] uppercase mb-1">{props.title}</h1>
        <p className="body text-sm opacity-60">{props.description}</p>
      </div>
    </a>
  );
}
