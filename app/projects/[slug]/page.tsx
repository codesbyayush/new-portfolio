import { toolsAndTech } from "@/lib/about";
import { projects } from "@/lib/projects";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

function ProjectDesc({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const project = projects.find((project) => slug === project.slug);
  if (!project)
    return (
      <div className="grid w-full h-full items-center">
        <h2>Not Found</h2>
      </div>
    );
  const val = Object.entries(toolsAndTech)
    .map((entry) =>
      entry[1].filter((item) => project.techused?.includes(item.id))
    )
    .flat();

  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl sm:text-4xl font-bold">{project?.name}</h1>

        <button className="dark:bg-zinc-800/80 dark:hover:border-zinc-700 hover:border-zinc-900 bg-white/75 border border-transparent px-4 py-2 rounded">
          <a href={project?.url}>Explore</a>
        </button>
      </div>

      <div></div>
      <div>
        <h3 className="text-xl sm:text-2xl font-semibold py-3 capitalize">
          Overview
        </h3>
        <p
          className="sm:text-lg text-zinc-600 dark:text-zinc-400"
          dangerouslySetInnerHTML={{ __html: project?.about }}
        >
          {/* {project?.about} */}
        </p>
      </div>
      <div className="py-4">
        <h3 className="text-xl font-semibold py-3 capitalize">
          Stack/Technologies
        </h3>
        <ul className="grid lg:grid-cols-2 gap-x-5 gap-y-4 py-2 px-3">
          {val.map((value) => (
            <li key={value.id} className="flex">
              <a
                href={value.url}
                rel="noreferer noopener"
                target="_blank"
                className="group flex gap-2 items-center underline text-blue-400 font-semibold"
              >
                <value.icon
                  className="h-4 w-4 dark:text-zinc-100 text-zinc-800"
                  aria-hidden="true"
                />
                {value.name}
              </a>
              <span className="dark:text-zinc-400 text-zinc-600">
                &nbsp;-&nbsp; {value.info}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProjectDesc;
