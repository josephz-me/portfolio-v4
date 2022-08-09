import { Command } from "cmdk";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./CommandMenu.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

export default function CommandMenu() {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const closeModal = () => {
    setOpen(false);
  };

  // Toggle the menu when ⌘K is pressed
  useEffect(() => {
    // console.log("input field");
    // console.log(document.getElementById(":ru:"));

    // inputField.focus();
    // inputField.select();

    const down = (e) => {
      if (e.key === "k" && e.metaKey) {
        setOpen((open) => !open);
      }

      let current = document.querySelector('[aria-selected="true"]');
      let above;
      let down;
      if (current && current.previousElementSibling) {
        above = current.previousElementSibling;
      }

      if (current && current.nextElementSibling) {
        down = current.nextElementSibling;
      }

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
      <Link href={href ? href : ""}>
        <a
          onClick={closeModal}
          className="flex gap-4 items-center px-[20px] py-1 w-full"
        >
          {icon !== undefined && (
            <img
              src={`/project-icons/${icon}.svg`}
              alt={`${icon} icon`}
              className={`w-8 h-8 rounded-md inline-block`}
            />
          )}
          <p>{children}</p>
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
        className="flex gap-4 items-center px-[20px] py-1 w-full"
        href={href ? href : ""}
        target="_blank"
        rel="noreferrer"
      >
        {icon !== undefined && (
          <img
            src={`/project-icons/${icon}.svg`}
            alt={`${icon} icon`}
            className={`w-8 h-8 rounded-md inline-block`}
          />
        )}
        <p>{children}</p>
      </a>
    </Command.Item>
  );
};
