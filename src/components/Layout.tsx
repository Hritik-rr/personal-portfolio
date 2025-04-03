import { Outlet, NavLink } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
  return (
    <main className="body flex h-full min-h-screen w-full flex-col items-center justify-start p-8 pt-16 text-sm sm:p-16 sm:pt-16">
      <div className="sm:space-y-15 duration-[2000ms] h-full w-full max-w-md space-y-10 transition-all sm:max-w-md md:max-w-lg lg:max-w-2xl">
        {/* Navigation */}
        <div className="flex w-full flex-wrap gap-x-1 print:hidden">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "bg-white text-klein transition-all duration-150"
                : "transition-all duration-150 hover:bg-white hover:text-klein"
            }
            end
          >
            <span tabIndex={0} role="text">
              [Hritik.works]
            </span>
          </NavLink>
          <p className="inline sm:invisible sm:block sm:pr-0">•</p>
          <NavLink
            to="/cv"
            className={({ isActive }) =>
              isActive
                ? "bg-white text-klein transition-all duration-150"
                : "transition-all duration-150 hover:bg-white hover:text-klein"
            }
          >
            <span tabIndex={0} role="text">
              [cv]
            </span>
          </NavLink>
          <p className="inline sm:invisible sm:block sm:pr-0">•</p>
          <NavLink
            to="/books"
            className={({ isActive }) =>
              isActive
                ? "bg-white text-klein transition-all duration-150"
                : "transition-all duration-150 hover:bg-white hover:text-klein"
            }
          >
            <span tabIndex={0} role="text">
              [books]
            </span>
          </NavLink>
          <p className="inline sm:invisible sm:block sm:pr-0">•</p>
          <NavLink
            to="/posts"
            className={({ isActive }) =>
              isActive
                ? "bg-white text-klein transition-all duration-150"
                : "transition-all duration-150 hover:bg-white hover:text-klein"
            }
          >
            <span tabIndex={0} role="text">
              [posts]
            </span>
          </NavLink>
          <p className="inline sm:invisible sm:block sm:pr-0">•</p>
          <NavLink
            to="/lists"
            className={({ isActive }) =>
              isActive
                ? "bg-white text-klein transition-all duration-150"
                : "transition-all duration-150 hover:bg-white hover:text-klein"
            }
          >
            <span tabIndex={0} role="text">
              [lists]
            </span>
          </NavLink>
        </div>

        {/* Main Content */}
        <div className="flex h-full w-full flex-col items-start space-y-5">
          <Outlet />
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </main>
  );
};

export default Layout;
