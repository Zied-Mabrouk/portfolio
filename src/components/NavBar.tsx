import { Dispatch, SetStateAction } from "react";

type Props = {
  setPage: Dispatch<SetStateAction<number>>;
};

const NavBar = (props: Props) => {
  const items = ["Home", "Experience"];
  return (
    <div className="fixed top-0 left-0 flex items-center w-full justify-around z-10">
      <span className="text-white">Portfolio</span>
      <div className="flex justify-center">
        {items.map((item, index) => (
          <button
            key={index}
            onClick={() => props.setPage(index)}
            className="px-4 py-2 text-secondary hover:text-secondary-light transition-all cursor-pointer"
          >
            {item}
          </button>
        ))}
      </div>
      <div className="text-white">tel email</div>
    </div>
  );
};

export default NavBar;
