import LogoButton from "./LogoButton";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  return (
    <header>
      <LogoButton icon={faGithub} href="https://github.com/b1rigu" />
      <a
        className="btn btn-outline btn-primary"
        target="_blank"
        rel="nofollow"
        href="https://www.upwork.com/freelancers/~0117d745f818e520d1"
      >
        My resume
      </a>
    </header>
  );
}
