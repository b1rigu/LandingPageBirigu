import techsIUse from "../data/techsIUse";
import Reveal from "./Reveal";
import TechPill from "./TechPill";

export default function TechList() {
  return (
    <>
      {Object.keys(techsIUse).map((key) => {
        return (
          <Reveal key={key} className="mb-12">
            <p className="font-bold text-2xl mb-6">{techsIUse[key].title}</p>
            <TechPill items={techsIUse[key].items} />
          </Reveal>
        );
      })}
    </>
  );
}
