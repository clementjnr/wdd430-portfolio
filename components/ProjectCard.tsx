interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  linkLabel?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  link,
  linkLabel = "View project",
}: ProjectCardProps) {
  return (
    <article className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <p className="technology-line">
        <strong>Technologies:</strong> {technologies.join(", ")}
      </p>
      {link ? (
        <a className="project-link" href={link} target="_blank" rel="noreferrer">
          {linkLabel}
        </a>
      ) : (
        <p className="project-link" aria-label="Project link needs to be added">
          {linkLabel}
        </p>
      )}
    </article>
  );
}
