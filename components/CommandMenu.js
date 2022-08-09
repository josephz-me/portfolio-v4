import { Command } from "cmdk";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./CommandMenu.module.scss";
import Link from "next/link";

export default function CommandMenu() {
  const [open, setOpen] = React.useState(false);
  const closeModal = () => {
    setOpen(false);
  };

  // Toggle the menu when ⌘K is pressed
  useEffect(() => {
    const down = (e) => {
      if (e.key === "k" && e.metaKey) {
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  useEffect(() => {
    open
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "visible");
  }, [open]);

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            className={`fixed top-0 left-0 w-full h-full z-[1000] ${styles.linear}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.2 }}
          >
            <motion.div
              onClick={() => setOpen(false)}
              className="fixed top-0 left-0 bg-[rgba(0,0,0,.3)] w-full h-full z-[999]"
            ></motion.div>
            <Command
              className="overflow-auto p-2 border-solid border-[.5px] border-neutral-700 rounded-xl drop-shadow-2xl linear bg-neutral-800 fixed top-0 left-1/2 top-1/2 translate-y-[-50%] translate-x-[-50%] z-[1000] mx-auto"
              label="Command Menu"
            >
              <Command.Input placeholder="Search" />
              <Command.List>
                <Command.Empty>No results found.</Command.Empty>

                <Command.Group heading="Projects">
                  <Item closeModal={closeModal} href="apple">
                    Apple
                  </Item>
                  <Item closeModal={closeModal} href="brain">
                    Brain Technologies
                  </Item>
                  <Item closeModal={closeModal} href="azuki">
                    {" "}
                    Azuki
                  </Item>
                  <Item closeModal={closeModal} href="metalink">
                    Metalink
                  </Item>
                  <Command.Separator />
                </Command.Group>
                <Command.Group heading="Socials">
                  <Item closeModal={closeModal}>Email</Item>
                  <Item closeModal={closeModal}>Twitter</Item>
                  <Item closeModal={closeModal}>CV</Item>
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

const Item = ({ closeModal, href, children }) => {
  return (
    <Command.Item>
      <Link className="w-full bg-black" href={href ? href : ""}>
        <a onClick={closeModal} className="w-full p-2">
          {children}
        </a>
      </Link>
    </Command.Item>
  );
};
