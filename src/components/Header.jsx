import GithubLogo from "./GithubLogo";

export default function Header() {
  return (
    <header>
      <GithubLogo />
      <button className="btn btn-outline btn-primary">My resume</button>
    </header>
  );
}
