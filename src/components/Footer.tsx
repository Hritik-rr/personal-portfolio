const Footer = () => {
  return (
    <div className="flex h-full w-full flex-wrap items-end justify-end space-x-1 space-y-10 text-sm">
      <a
        href="https://x.com/HrxLeo17"
        className="transition-all duration-150 hover:bg-white hover:text-klein"
      >
        <span tabIndex={0} role="text">
          [X]
        </span>
      </a>
      <p className="inline sm:invisible sm:block sm:pr-0">•</p>
      <a
        href="https://www.linkedin.com/in/hritik-r-304207172/"
        className="transition-all duration-150 hover:bg-white hover:text-klein"
      >
        <span tabIndex={0} role="text">
          [linkedin]
        </span>
      </a>
      <p className="inline sm:invisible sm:block sm:pr-0">•</p>
      <a
        href="https://github.com/Hritik-rr"
        className="transition-all duration-150 hover:bg-white hover:text-klein"
      >
        <span tabIndex={0} role="text">
          [github]
        </span>
      </a>
      <p className="inline sm:invisible sm:block sm:pr-0">•</p>
      <a
        href="https://instagram.com/"
        className="transition-all duration-150 hover:bg-white hover:text-klein"
      >
        <span tabIndex={0} role="text">
          [instagram]
        </span>
      </a>
      <p className="inline sm:invisible sm:block sm:pr-0">•</p>
      <a
        href="https://substack.com/@hrx17"
        className="transition-all duration-150 hover:bg-white hover:text-klein"
      >
        <span tabIndex={0} role="text">
          [substack]
        </span>
      </a>
    </div>
  );
};

export default Footer;
