import GridContainer from "./GridContainer";
import TextLink from "./TextLink";
import { useRouter } from "next/router";

export default function Footer() {
  const pageName = useRouter().asPath;

  return (
    <footer
      className={`text-zinc-100 pb-4 ${pageName == "/" ? " pt-12" : "pt-32"}`}
    >
      <GridContainer>
        <p className="col-start-1 col-end-5 text-zinc-700 hidden md:inline">
          Joseph Zhang © 2022
        </p>

        <span className="col-start-1 md:col-start-5">
          <TextLink link="/josephzhang-resume.pdf">Resume</TextLink>
        </span>
        <span className="col-start-5 md:col-start-7">
          <TextLink link="https://www.linkedin.com/in/josephzme/">
            LinkedIn
          </TextLink>
        </span>
        <span className="col-start-10 md:col-start-9">
          <TextLink link="https://twitter.com/__joz">Twitter</TextLink>
        </span>
        <span className="col-start-7 md:col-start-11 hidden md:inline">
          <TextLink link="mailto:jxsephz@gmail.com">jxsephz@gmail.com</TextLink>
        </span>
      </GridContainer>
    </footer>
  );
}
