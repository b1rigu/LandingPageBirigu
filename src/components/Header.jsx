import GithubLogo from "./GithubLogo";

export default function Header() {
  return (
    <header>
      <GithubLogo />
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
