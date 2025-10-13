import { links } from "../data";
const Navbar = () => {
  return (
    <nav className="bg-sky-100">
      <div className="mx-auto max-w-7xl px-8 py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8">
        <h2 className="text-3xl capitalize font-bold">
          web<span className="text-sky-600">Dev</span>
        </h2>
        <div className="flex gap-x-3">
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                className="capitalize text-lg tracking-wide hover:text-sky-600 duration-300"
                key={id}
                href={href}
              >
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
