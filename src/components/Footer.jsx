import { Link } from "react-router-dom";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-light mt-16 border-t-4">
      <div className="max-padd-container py-12 flex flex-col md:flex-row md:justify-between gap-10">
        {/* brand / intro */}
        <div>
          <Logo />
          <p className="text-sm text-slate-600 max-w-sm leading-relaxed mt-3">
            Math & CS graduate and India’s top SAT performer. With 3+ years of
            tutoring experience, I help students build clarity and confidence in
            math.
          </p>
        </div>

        {/* navigation */}
        <div>
          <h3 className="font-semibold mb-3">Navigation</h3>
          <ul className="flex flex-col gap-2">
            <li>
              <Link to="/" className="link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/tutors" className="link">
                Tutors
              </Link>
            </li>
            <li>
              <Link to="/contact" className="link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* bottom bar */}
      <div className="border-t border-white/10 py-4 text-center text-sm opacity-70">
        © {new Date().getFullYear()} PrimeTutor. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
