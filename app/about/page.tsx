import { toolsAndTech } from "@/lib/about";

function AboutPage() {
  return (
    <div className="flex flex-col gap-8 w-full">
      <h1 className="text-3xl sm:text-4xl font-bold">
        I&apos;m Ayush Patel. I live in Gorakhpur, where I build the future.
      </h1>
      <p className=" text-zinc-600 dark:text-zinc-400">
        I am a self-driven, career-oriented software developer specializing in
        front-end development and open-source, currently pursuing a bachelors
        degree in computer science. My expertise lies in building interactive
        web applications. Primarily working with technologies
        like JavaScript, Next.js, TypeScript and Node.
      </p>
      <p className=" text-zinc-600 dark:text-zinc-400">
        I strongly believe in continuous learning and improving myself, so I try
        my best to learn in any situation possible, unfavorable or not.
      </p>
      <p className=" text-zinc-600 dark:text-zinc-400">
        Beyond learning, I enjoy writing technical articles and creating
        projects that both inspire and benefit fellow developers.
      </p>

      <div>
        <div className="py-6">
          <h2 className="text-2xl sm:text-3xl font-bold  pt-4">Usage</h2>
          <p className="pt-4 text-zinc-600 dark:text-zinc-400">
            Tools, technologies and gadgets I use on a daily basis but not
            limited to.
          </p>
        </div>
        <ToolAndTech />
      </div>
    </div>
  );
}

export default AboutPage;


function ToolAndTech() {
  return (
    <>
      {Object.entries(toolsAndTech).map(([key, val]) => (
        <div className="py-4" key={key}>
          <h3 className="text-xl font-semibold py-3 capitalize">{key}</h3>
          <ul className="flex flex-col gap-x-5 gap-y-4 py-2 px-3">
            {val.map((value) => (
              <li key={value.id} className="flex">
                <a
                  href={value.url}
                  rel="noreferer noopener"
                  target="_blank"
                  className="group flex gap-2 items-center underline text-blue-400 font-semibold"
                >
                  <value.icon className="h-4 w-4 dark:text-zinc-100 text-zinc-800" aria-hidden="true" />
                  {value.name}
                </a>
                <span className="dark:text-zinc-400 text-zinc-600">
                  &nbsp;-&nbsp; {value.info}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}
