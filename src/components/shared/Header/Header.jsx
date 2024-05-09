import Logo from "@/components/elements/Logo/Logo";
import NavElement from "@/components/elements/NavElement/NavElement";

const Header = () => {
  return (
    <div className="w-full navbar bg-base-300 sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="flex-none lg:hidden">
          <label
            htmlFor="my-drawer-3"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div className="flex-1 px-2 mx-2">Navbar Title</div>
        <div className="flex-none hidden lg:block">
          <ul className="menu menu-horizontal">
            {/* Navbar menu content here */}
            <NavElement />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
