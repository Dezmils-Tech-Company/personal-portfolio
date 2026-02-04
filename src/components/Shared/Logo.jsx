import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="inline-flex items-center gap-2">
      <span className="text-2xl font-extrabold tracking-tight text-white">
       CEO
      </span>
      <span className="text-2xl font-bold tracking-wide text-cyan-500">
        Dezmils
      </span>
    </Link>
  );
};

export default Logo;
