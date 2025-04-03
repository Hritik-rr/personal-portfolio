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
            <span className="bg-klein px-2 text-white">Sept 2018 - Jul 2022</span>
          </div>
          <div className="mb-5">
            <p>Bachelor's Degree in Computer Science and Engineering</p>
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            <span className="bg-klein px-2 text-white">Object Oriented Programming</span>
            <span className="bg-klein px-2 text-white">Computer Architecture & Organization</span>
            <span className="bg-klein px-2 text-white">Computer Networks</span>
            <span className="bg-klein px-2 text-white">Operating Systems</span>
            <span className="bg-klein px-2 text-white">Data Structures & Algorithms</span>
            <span className="bg-klein px-2 text-white">Database Management Systems</span>
            <span className="bg-klein px-2 text-white">Artificial Intelligence</span>
            <span className="bg-klein px-2 text-white">Machine Learning</span>
            <span className="bg-klein px-2 text-white">Computer Networks</span>
            <span className="bg-klein px-2 text-white">Operating Systems</span>
            <span className="bg-klein px-2 text-white">Applied Linear Algebra</span>
            <span className="bg-klein px-2 text-white">Differential Equations</span>
            <span className="bg-klein px-2 text-white">Calculus</span>
            <span className="bg-klein px-2 text-white">Linear Algebra</span>
            <span className="bg-klein px-2 text-white">Discrete Mathematics</span>
            <span className="bg-klein px-2 text-white">Artificial Intelligence</span>
            <span className="bg-klein px-2 text-white">Machine Learning</span>
            <span className="bg-klein px-2 text-white">Theory Of Computation</span>
            <span className="bg-klein px-2 text-white">Compiler Design</span>
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
          <div className="flex justify-between">
            <div>
              <h3 className="font-medium">Freelancing</h3>
              <span className="bg-klein px-2 text-white">Bengaluru, India</span>
            </div>
            <span className="bg-klein px-2 text-white">Dec 2024 - Present</span>
          </div>
          <p className="font-medium">Freelance Engineer/ Software Architect</p>
          <p className="text-slate-300">Coming soon :).</p>
        </div>

        <div className="mb-8">
          <div className="flex justify-between">
            <div>
              <h3 className="font-medium">Residua</h3>
              <span className="bg-klein px-2 text-white">Brooklyn, NY</span>
            </div>
            <span className="bg-klein px-2 text-white">Sep 2023 - Nov 2024</span>
          </div>
          <p className="font-medium">Co-Founder, CEO</p>
          <p className="text-slate-300">
            We live in an era of data abundance, and with it comes a lot of noise. Residua's mission
            is to apply LLMs to help users sift through the noise to find what is truly relevant and
            meaningful to them.
          </p>
        </div>

        {/* Add more experience entries here similar to the ones above */}
      </section>
    </>
  );
};

export default CVPage;
