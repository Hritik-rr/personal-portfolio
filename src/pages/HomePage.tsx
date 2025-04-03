const HomePage = () => {
  return (
    <>
      <h1 className="text-2xl">
        <span tabIndex={0} role="text">
          Hritik Ranjan
        </span>
      </h1>
      <h3 className="text-slate-500">
        <span tabIndex={0} role="text">
          Currently in: Bengaluru, India
        </span>
      </h3>

      <div className="h-full w-full items-start space-y-4 font-serif text-lg">
        <p>Hi, I'm Hritik.</p>
        <p>
          I build scalable Fullstack systems, design APIs & interative UIs, and think deeply about
          how software architecture shapes user experiences. I'm also interested in the intersection
          of AI and creative workflows.
        </p>
        <p>
          With expertise in TypeScript, NestJS, and database technologies like PostgreSQL and
          Prisma, I've helped startups and agencies develop robust applications, optimize
          performance, and bring ideas to life.
        </p>
        <p>
          Currently, I’m freelancing—solving interesting problems, refining best practices, and
          collaborating on AI-powered solutions.
        </p>
        <p>
          Feel free to poke around this website, which serves as a sampling of what I am currently
          reading, writing, and thinking about.
        </p>
        <p>
          Take a look around. If what you find interests you, feel free to{" "}
          <a className="underline" href="mailto:hritikwork20@gmail.com">
            email me
          </a>{" "}
          or{" "}
          <a className="underline" href="https://x.com/HrxLeo17">
            find me on X
          </a>
          .
        </p>
      </div>
    </>
  );
};

export default HomePage;
