import {
  FigmaLogo,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
} from "phosphor-react";
import { SocialMediasStyles } from "./styles";

const SocialMedias: React.FC = () => {
  return (
    <SocialMediasStyles>
      <a
        href="https://www.linkedin.com/in/josevictordev/"
        aria-label="Visit my professional profile on LinkedIn"
        rel="author"
        target="_blank"
        title="Go to LinkedIn"
      >
        <LinkedinLogo size={24} color="var(--lightGray)" />
      </a>
      <a
        href="https://github.com/victormedeiros1"
        aria-label="Visit my GitHub profile to see more projects"
        rel="author"
        target="_blank"
        title="Go to GitHub"
      >
        <GithubLogo size={24} color="var(--lightGray)" />
      </a>
      <a
        href="https://www.figma.com/@victormedeiros1"
        aria-label="Visit my Figma profile to see interfaces of my projects"
        rel="author"
        target="_blank"
        title="Go to Figma"
      >
        <FigmaLogo size={24} color="var(--lightGray)" />
      </a>
      <a
        href="https://www.instagram.com/victor_mdrss/"
        aria-label="Visit my Instagram profile"
        rel="author"
        target="_blank"
        title="Go to Instagram"
      >
        <InstagramLogo size={24} color="var(--lightGray)" />
      </a>
    </SocialMediasStyles>
  );
};

export default SocialMedias;
