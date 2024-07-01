export default function Link({ children, href, className }) {
  return (
    <a target="_blank" rel="nofollow" href={href} className={className}>
      {" " + children + " "}
    </a>
  );
}
