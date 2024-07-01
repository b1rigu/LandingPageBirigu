import TechPill from "./TechPill";
import Reveal from "./Reveal";

export default function ExperienceCard({
  company,
  startDate,
  endDate,
  position,
  location,
  description,
  techsUsed,
}) {
  return (
    <div className="mb-8">
      <div className="flex justify-between mb-4">
        <Reveal>
          <p className="font-bold text-2xl">{company}</p>
        </Reveal>
        <Reveal>
          <p>
            {startDate} - {endDate}
          </p>
        </Reveal>
      </div>
      <div className="flex justify-between mb-4">
        <Reveal>
          <p className="font-bold text-xl text-primary-color">{position}</p>
        </Reveal>
        <Reveal>
          <p>{location}</p>
        </Reveal>
      </div>
      <Reveal>
        <p className="mb-4">{description}</p>
      </Reveal>
      <Reveal>
        <TechPill className="mb-4" items={techsUsed} />
      </Reveal>
      <hr className="opacity-20"></hr>
    </div>
  );
}
