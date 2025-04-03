import { useScrambleEffect } from "./scrambleEffect";

const Footer = () => {
  useScrambleEffect([
    {
      id: "scrambleText3",
      originalText: "[Twitter]",
    },
    {
      id: "scrambleText4",
      originalText: "[LinkedIn]",
    },
    {
      id: "scrambleText5",
      originalText: "[GitHub]",
    },
    {
      id: "scrambleText6",
      originalText: "[Instagram]",
    },
    {
      id: "scrambleText7",
      originalText: "[Substack]",
    },
  ]);

  return (
    <div className="flex h-full w-full flex-wrap items-end justify-end space-x-1 space-y-10 text-sm">
      <div>
        <a
          href="https://x.com/HrxLeo17"
          className="transition-all duration-150 hover:bg-white hover:text-klein"
        >
          <span id="scrambleText3" tabIndex={0} role="text">
            [Twitter]
          </span>
        </a>
      </div>
      <p className="inline sm:invisible sm:block sm:pr-0">•</p>
      <div>
        <a
          href="https://www.linkedin.com/in/hritik-r-304207172/"
          className="transition-all duration-150 hover:bg-white hover:text-klein"
        >
          <span id="scrambleText4" tabIndex={0} role="text">
            [linkedin]
          </span>
        </a>
      </div>
      <p className="inline sm:invisible sm:block sm:pr-0">•</p>
      <div>
        <a
          href="https://github.com/Hritik-rr"
          className="transition-all duration-150 hover:bg-white hover:text-klein"
        >
          <span id="scrambleText5" tabIndex={0} role="text">
            [github]
          </span>
        </a>
      </div>
      <p className="inline sm:invisible sm:block sm:pr-0">•</p>
      <div>
        <a
          href="https://instagram.com/"
          className="transition-all duration-150 hover:bg-white hover:text-klein"
        >
          <span id="scrambleText6" tabIndex={0} role="text">
            [instagram]
          </span>
        </a>
      </div>
      <p className="inline sm:invisible sm:block sm:pr-0">•</p>
      <div>
        <a
          href="https://substack.com/@hrx17"
          className="transition-all duration-150 hover:bg-white hover:text-klein"
        >
          <span id="scrambleText7" tabIndex={0} role="text">
            [substack]
          </span>
        </a>
      </div>
    </div>
  );
};

export default Footer;
