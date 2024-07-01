import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LogoButton({ icon, className = "", href = "", text = "" }) {
  return (
    <span className={"h-full " + className}>
      {href ? (
        <a className="flex items-center gap-2 h-full" target="_blank" rel="nofollow" href={href}>
          <FontAwesomeIcon className="h-full" icon={icon} />
          <p className="hover:underline">{text}</p>
        </a>
      ) : (
        <div className="flex items-center gap-2 h-full">
          <FontAwesomeIcon className="h-full" icon={icon} />
          <p>{text}</p>
        </div>
      )}
    </span>
  );
}
