

import { socialLinks } from "@/lib/socials";

export default function HeroSection() {
  return (
    <div className="flex flex-col pb-16 gap-6 w-full">
      <div >
        <h1 className="text-4xl sm:text-5xl font-bold"> <span className="dark:text-green-500 ">FullStack</span>&nbsp; Developer</h1>
      </div>
      <div>
        <p className="sm:text-lg font-medium text-zinc-600 dark:text-zinc-400">
          I&apos;m Ayush Patel, fullstack developer with expertise in
          Javascript, React JS, NodeJS, Express and MongoDB .
        </p>
      </div>
          <div>
              <Social type="social"/>
      </div>
    </div>
  );
}





function Social({ type }: { type: string }) {
  return (
    <ul className="flex items-center flex-wrap gap-x-5 gap-y-4 py-6">
      {socialLinks
        .filter((item) => item.status === type)
        .map((value) => (
          <li key={value.id}>
            <a
              href={value.url}
              rel="noreferer noopener"
              target="_blank"
              className="flex items-center border-b dark:border-b-zinc-800 border-zinc-200 group"
            >
              <value.icon
                className="flex-shrink-0 h-5 w-5 text-zinc-500 group-hover:dark:text-white group-hover:text-zinc-800 duration-300"
                aria-hidden="true"
              />
              &nbsp;
              {value.name}
            </a>
          </li>
        ))}
    </ul>
  );
}
