const CVPage = () => {
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

      <div className="flex space-x-2">
        <a href="mailto:hritikwork20@gmail.com" className="text-white">
          [Email]
        </a>
        <a href="https://github.com/Hritik-rr" className="text-white">
          [GitHub]
        </a>
        <a href="https://www.linkedin.com/in/hritik-r-304207172/" className="text-white">
          [LinkedIn]
        </a>
        <a href="https://x.com/HrxLeo17" className="text-white">
          [Twitter]
        </a>
      </div>

      <hr className="my-6 border-t border-white" />

      <section>
        <h2 className="mb-4 text-xl">Education</h2>

        <div>
          <div className="flex justify-between">
            <h3 className="font-medium">VIT University, India</h3>
            <span className="bg-klein px-2 text-white">Jun 2018 - Jul 2022</span>
          </div>
          <div className="mb-5">
            <p>Bachelor's Degree in Computer Science and Engineering</p>
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            <span className="bg-indigo-100 bg-opacity-50 px-2 text-klein">
              Object Oriented Programming
            </span>
            <span className="bg-indigo-100 bg-opacity-50 px-2 text-klein">
              Computer Architecture & Organization
            </span>
            <span className="bg-indigo-100 bg-opacity-50 px-2 text-klein">Computer Networks</span>
            <span className="bg-indigo-100 bg-opacity-50 px-2 text-klein">Operating Systems</span>
            <span className="bg-indigo-100 bg-opacity-50 px-2 text-klein">
              Data Structures & Algorithms
            </span>
            <span className="bg-indigo-100 bg-opacity-50 px-2 text-klein">
              Database Management Systems
            </span>
            <span className="bg-indigo-100 bg-opacity-50 px-2 text-klein">
              Artificial Intelligence
            </span>
            <span className="bg-indigo-100 bg-opacity-50 px-2 text-klein">Machine Learning</span>
            <span className="bg-indigo-100 bg-opacity-50 px-2 text-klein">
              Applied Linear Algebra
            </span>
            <span className="bg-indigo-100 bg-opacity-50 px-2 text-klein">
              Differential Equations
            </span>
            <span className="bg-indigo-100 bg-opacity-50 px-2 text-klein">Calculus</span>
            <span className="bg-indigo-100 bg-opacity-50 px-2 text-klein">Linear Algebra</span>
            <span className="bg-indigo-100 bg-opacity-50 px-2 text-klein">
              Discrete Mathematics
            </span>
            <span className="bg-indigo-100 bg-opacity-50 px-2 text-klein">
              Artificial Intelligence
            </span>
            <span className="bg-indigo-100 bg-opacity-50 px-2 text-klein">
              Theory Of Computation
            </span>
            <span className="bg-indigo-100 bg-opacity-50 px-2 text-klein">Compiler Design</span>
          </div>
        </div>

        {/* <div className="mb-8">
          <div className="flex justify-between">
            <h3 className="font-medium">Stanford University Graduate School of Engineering</h3>
            <span className="bg-klein px-2 text-white">Feb 2022 - Jun 2023</span>
          </div>
          <p>
            Master's Degree of Computer Science (concentration: Real-World Computing and Computer
            Graphics, advisor: Kayvon Fatahalian)
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            <span className="bg-klein px-2 text-white">Physically Based Rendering</span>
            <span className="bg-klein px-2 text-white">Natural Language Processing</span>
            <span className="bg-klein px-2 text-white">Diffusion Models</span>
            <span className="bg-klein px-2 text-white">Large Language Models</span>
            <span className="bg-klein px-2 text-white">Reinforcement Learning</span>
            <span className="bg-klein px-2 text-white">Robotics Design</span>
            <span className="bg-klein px-2 text-white">Interactive Computer Graphics</span>
            <span className="bg-klein px-2 text-white">Motion Planning & Robot Autonomy</span>
            <span className="bg-klein px-2 text-white">Machine Learning</span>
            <span className="bg-klein px-2 text-white">Operating Systems</span>
            <span className="bg-klein px-2 text-white">Game Design</span>
            <span className="bg-klein px-2 text-white">Set Theory</span>
            <span className="bg-klein px-2 text-white">Formal Logic</span>
            <span className="bg-klein px-2 text-white">AI Ethics</span>
            <span className="bg-klein px-2 text-white">Computer Organization</span>
            <span className="bg-klein px-2 text-white">Animation</span>
            <span className="bg-klein px-2 text-white">Simulation</span>
            <span className="bg-klein px-2 text-white">Image Manipulation</span>
            <span className="bg-klein px-2 text-white">Computational Logic</span>
            <span className="bg-klein px-2 text-white">Biomedical Image Analysis</span>
            <span className="bg-klein px-2 text-white">Complexity Theory</span>
          </div>
        </div> */}
      </section>

      <hr className="my-6 border-t border-white" />

      <section>
        <h2 className="mb-4 text-xl">Experience</h2>

        <div className="mb-8">
          <div className="mb-2 flex justify-between">
            <div>
              <h3 className="mb-1 font-medium">Freelance Engineer/ Software Architect</h3>
              <span className="bg-klein px-2 text-white">Remote, India</span>
            </div>
            <span className="bg-klein px-2 text-white">March 2024 - Present</span>
          </div>
          {/* <p className="font-medium">Freelancer</p> */}
          <p className="text-slate-300">
            <li>
              Worked on multiple projects writing backend code for MVPs and different softwares.
            </li>
            <li>
              Worked with different clients and agencies to build features for them on existing code
              using different APIs for different use-cases.
            </li>
            <li>
              Improved multiple codebases by rewriting old-unrealiable code and rewrote it following
              best practices.
            </li>
          </p>
        </div>

        <div className="mb-8">
          <div className="mb-2 flex justify-between">
            <div>
              <h3 className="font-medium">Procuzy</h3>
              <span className="bg-klein px-2 text-white">Bengaluru, India</span>
            </div>
            <span className="bg-klein px-2 text-white">Dec 2022 - Nov 2023</span>
          </div>
          <p className="font-medium">Software Engineer Intern</p>
          <p className="text-slate-300">
            <li>
              Build multiple core in-house services end to end and maintained it closely till
              stability.
            </li>
            <li>
              Worked on building a reusable download feature which is used across services that
              generates a responsive pdf/html file. [Used to create an html and that gets converted
              into pdf.]
            </li>
            <li>
              Created a mail service using TaskQueue of GCP, for automatically sending templated
              mails when some event triggers.
            </li>
            <li>
              Improved various features of multiple API(s) by debugging code, resolving dependency
              issues in queries, and adding new entries while maintaining and improving code
              quality.
            </li>
            <li>
              Researched on assembling a CI pipeline from scratch for building an e2e testing based
              development approach on production / distribution level.
            </li>
            <li>
              Ideated with the solution of using cypress testing along with cloudflare and GitHub
              actions for frontend based production level development.
            </li>
            <li>
              Wrote multiple e2e test cases for our services. new entries while maintaining and
              improving code quality.
            </li>
          </p>
        </div>

        <div className="mb-8">
          <div className="mb-2 flex justify-between">
            <div>
              <h3 className="font-medium">Procuzy</h3>
              <span className="bg-klein px-2 text-white">Bengaluru, India</span>
            </div>
            <span className="bg-klein px-2 text-white">Sept 2022 - Dec 2022</span>
          </div>
          <p className="font-medium">Software Engineer</p>
          <p className="text-slate-300">
            <li>
              Improved a lot of minor features and code debugging from adding new entries in API to
              resolving dependency issues in queries.
            </li>
            <li>
              Implemented an end to end feature on suspicious transactions taking place, by
              automatically sending a mail to the sales head, business head & CEO if any suspicious
              transaction took place within a designated span of time
            </li>
          </p>
        </div>

        {/* Add more experience entries here similar to the ones above */}
      </section>
    </>
  );
};

export default CVPage;
