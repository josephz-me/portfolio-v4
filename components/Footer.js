import GridContainer from "./GridContainer";
import TextLink from "./TextLink";

export default function Footer() {
  return (
    <footer className={`text-[rgba(255,255,255,.9)] pt-12 pb-4`}>
      <GridContainer>
        <p className="col-start-1 col-end-5 opacity-20 hidden md:inline">
          Updated April 24, 2022
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
