import techsIUse from "../techsIUse";
import Reveal from "./Reveal";

export default function TechList() {
  return (
    <>
      {Object.keys(techsIUse).map((key) => {
        return (
          <Reveal key={key} className="mb-12">
            <p className="font-bold text-2xl mb-6">{techsIUse[key].title}</p>
            <div className="flex flex-wrap gap-2">
              {techsIUse[key].items.map((techName) => {
                return (
                  <div key={techName} className="py-1 px-2 bg-gray-700 rounded-badge">
                    <p>{techName}</p>
                  </div>
                );
              })}
            </div>
          </Reveal>
        );
      })}
    </>
  );
}
