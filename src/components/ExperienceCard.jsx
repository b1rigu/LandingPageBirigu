import TechPill from "./TechPill";

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
        <p className="font-bold text-2xl">{company}</p>
        <p>
          {startDate} - {endDate}
        </p>
      </div>
      <div className="flex justify-between mb-4">
        <p className="font-bold text-xl text-primary-color">{position}</p>
        <p>{location}</p>
      </div>
      <p className="mb-4">{description}</p>
      <TechPill className="mb-4" items={techsUsed} />
      <hr className="opacity-20"></hr>
    </div>
  );
}
