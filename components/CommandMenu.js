import { Command } from "cmdk";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./CommandMenu.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

export default function CommandMenu({ open, setOpen }) {
  const router = useRouter();
  const closeModal = () => {
    setOpen(false);
  };

  let allTabs = [];
  let currPos = 0;

  // Toggle the menu when ⌘K is pressed
  useEffect(() => {
    const down = (e) => {
      console.log(e.key);
      if (e.key === "k" && e.metaKey) {
        setOpen((open) => !open);
      }

      if (e.key === "Escape") {
        setOpen(false);
      }

      let current = allTabs[currPos];
      let down;
      let above;

      if (e.key == "ArrowUp" && above) {
        above.ariaSelected = "true";
        current.ariaSelected = "false";
      }

      if (e.key == "ArrowDown" && down) {
        down.ariaSelected = "true";
        current.ariaSelected = "false";
      }

      if (e.key === "Enter") {
        const page = document
          .querySelector('[aria-selected="true"]')
          .querySelector("a").href;
        router.push(page);
        setOpen(false);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  useEffect(() => {
    open
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "visible");

    allTabs = document.querySelectorAll("[cmdk-item]");
    console.log(allTabs[0]);

    const inputField = document.querySelector("input");
    inputField ? inputField.focus() : "";
  }, [open]);

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            className={`fixed top-0 left-0 w-full h-full z-[1000] ${styles.commandPalette}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.2 }}
          >
            <motion.div
              onClick={() => setOpen(false)}
              className="fixed top-0 left-0 bg-[rgba(0,0,0,.5)] w-full h-full z-[999]"
              initial={{ opacity: 0, scale: 1.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.5 }}
              transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.2 }}
            ></motion.div>
            <Command
              className="flex gap-2 flex-col overflow-hidden drop-shadow-2xl linear fixed top-0 left-1/2 top-1/4 translate-x-[-50%] z-[1000] mx-auto"
              label="Command Menu"
            >
              <Command.Input placeholder="Search" />
              <Command.List>
                <Command.Empty>No results found.</Command.Empty>

                <Command.Group heading="Projects">
                  <Item closeModal={closeModal} href="apple" icon="apple">
                    Apple
                  </Item>
                  <Item closeModal={closeModal} href="brain" icon="brain">
                    Brain Technologies
                  </Item>
                  <Item closeModal={closeModal} href="metalink" icon="metalink">
                    Metalink
                  </Item>
                  <Item closeModal={closeModal} icon="skiff">
                    Skiff
                  </Item>
                  <Item closeModal={closeModal} icon="azuki">
                    Azuki
                  </Item>
                </Command.Group>
                <Command.Group heading="Experiments">
                  <Item closeModal={closeModal} href="aiga" icon="aiga">
                    {`AIGA & Hue`}
                  </Item>
                  <Item
                    closeModal={closeModal}
                    href="pixelpush"
                    icon="pixelpush"
                  >
                    Pixel Push
                  </Item>
                  <Item
                    closeModal={closeModal}
                    href="thinkspace"
                    icon="thinkspace"
                  >
                    Thinkspace
                  </Item>
                </Command.Group>
                <Command.Group heading="Socials">
                  <ExternalItem
                    closeModal={closeModal}
                    href="mailto:jxsephz@gmail.com"
                    icon="email"
                  >
                    Email
                  </ExternalItem>
                  <ExternalItem
                    closeModal={closeModal}
                    href="https://twitter.com/__joz"
                    icon="twitter"
                  >
                    Twitter
                  </ExternalItem>
                  <ExternalItem
                    closeModal={closeModal}
                    href="https://read.cv/jo_"
                    icon="cv"
                  >
                    CV
                  </ExternalItem>
                  <Command.Separator />
                </Command.Group>
              </Command.List>
            </Command>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

const Item = ({ closeModal, href, children, icon }) => {
  return (
    <Command.Item>
      <Link passHref href={href ? href : ""}>
        <a
          onClick={closeModal}
          className="flex justify-between items-center w-full"
        >
          <div className="flex gap-4 items-center">
            {icon !== undefined && (
              <Image
                className="rounded-xl"
                width={40}
                height={40}
                src={`/project-icons/${icon}.svg`}
                alt={`${icon} icon`}
              />
            )}
            <p>{children}</p>
          </div>
          {!href && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </a>
      </Link>
    </Command.Item>
  );
};

const ExternalItem = ({ closeModal, href, children, icon }) => {
  return (
    <Command.Item>
      <a
        onClick={closeModal}
        className="flex gap-4 items-center w-full"
        href={href ? href : ""}
        target="_blank"
        rel="noreferrer"
      >
        {icon !== undefined && (
          <Image
            className="rounded-xl"
            width={40}
            height={40}
            src={`/project-icons/${icon}.svg`}
            alt={`${icon} icon`}
          />
        )}
        <p>{children}</p>
      </a>
    </Command.Item>
  );
};
