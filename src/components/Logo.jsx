import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div>
      <Link to={"/"} className="bold-24 flex py-5">
        <span className="inline-flex">
          <span className="inline-flex items-center justify-center p-2 h-18 w-18 bg-secondary text-deep -rotate-[30deg] rounded-full mr-1.5">
            Math{" "}
          </span>
          made simple
        </span>
      </Link>
    </div>
  );
};

export default Logo;
