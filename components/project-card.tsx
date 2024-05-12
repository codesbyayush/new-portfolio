import Link from "next/link";
import { IconType } from "react-icons";

type props = {
  slug: string;
  name: string;
  desc: string;
  icon: (props: string | undefined) => JSX.Element;
  url?: undefined | string;
};

function ProjectCard(propvalues: props) {
  const { slug, name, desc } = propvalues;
  const value = { icon: propvalues.icon as IconType };
  return (
    <Link
      href={`/projects/${slug}`}
      className="dark:hover:border-zinc-700 hover:border-zinc-200 border border-transparent rounded-md"
    >
      <div className="dark:bg-primary-bg bg-zinc-50 w-full p-4 rounded shadow-sm flex justify-between gap-4 h-full items-center">
        <div className="bg-zinc-100  rounded-sm dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 aspect-square h-full flex place-content-center flex-grow p-2">
          <value.icon className="h-full w-full " />
        </div>
        <div className="w-full">
          <h2 className=" pb-0.5 font-medium">{name}</h2>
          <p className="text-zinc-600 dark:text-zinc-400/95 text-sm text-wrap">
            {desc}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
