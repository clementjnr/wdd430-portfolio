interface SkillCardProps {
  title: string;
  description: string;
  skills: string[];
}

export default function SkillCard({
  title,
  description,
  skills,
}: SkillCardProps) {
  return (
    <article className="info-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <p><strong>Skills:</strong> {skills.join(", ")}</p>
    </article>
  );
}
