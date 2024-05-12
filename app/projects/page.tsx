import ProjectCard from "@/components/project-card";
import { projects } from "@/lib/projects";

function ProjectPage() {
  return (
    <div className="flex flex-col gap-8 w-full">
      <h1 className="text-3xl sm:text-4xl font-bold">Projects</h1>
      <p className="sm:text-lg text-zinc-600 dark:text-zinc-400">
        I&apos;ve worked on tons of little projects over the years but these are
        the ones that I&apos;m most proud of. Many of them are open-source, so
        if you see something that piques your interest, check out the code and
        contribute if you have ideas on how it can be improved.
      </p>
      <div className="grid md:grid-cols-2 gap-x-7 gap-y-5 py-8">
        {projects.map((project) => (
          <ProjectCard {...project} key={project.slug} />
        ))}
      </div>
    </div>
  );
}

export default ProjectPage;
