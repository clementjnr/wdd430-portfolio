import ProjectCard from "@/components/ProjectCard";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  linkLabel?: string;
}

interface ProjectListProps {
  projects: Project[];
}

export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <div className="project-grid">
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  );
}
