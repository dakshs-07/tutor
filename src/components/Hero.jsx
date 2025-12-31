import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="z-10 min-h-[590px] w-full relative text-2xl flex justify-center -mt-15">
      <div className="pt-40 xl:pt-42 max-w-[677px] text-center">
        <h1 className="h1 max-w-[44rem] mt-6">Hi! I am Nishtha.</h1>
        <p className="text-xl">
          I’ve helped <span className="highlight text-black">70+ students</span>{" "}
          raise their math scores through strategic 1-on-1 tutoring in Math and
          SAT prep. Backed by{" "}
          <span className="highlight text-black">600+ hours of tutoring</span>,
          my approach focuses on clarity, confidence, and efficient
          problem-solving.
        </p>{" "}
        <div className="mt-9">
          <Link
            to="/login"
            className="btn-light bg-transparent ring-white !py-3"
          >
            Register Now
          </Link>
          <Link to="/tutors" className="btn-secondary text-gray-900 !py-3 ml-3">
            Book a Session
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
