import { FaUserTie, FaClock, FaUserFriends } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import { NumberTicker } from "./ui/number-ticker";
const Features = () => {
  return (
    <section className="mx-auto max-w-[1440px] px-6 lg:px-12 flex justify-center relative z-20 -mt-20">
      <div className="flex flex-wrap justify-center gap-10 bg-light rounded-3xl p-8">
        <div className="flex flex-col gap-y-2 rounded-xl p-4 max-w-[233px]">
          <FaClock className="text-xl mb-2" size={25} />
          <h1 className="h1">
            <NumberTicker value={600} />+
          </h1>
          <p>Hours of 1-on-1 Tutoring</p>
        </div>
        <div className="flex flex-col gap-y-2 rounded-xl p-4 max-w-[233px]">
          <PiStudentFill className="text-xl mb-2" size={30}/>
          <h1 className="h1">
            <NumberTicker value={78} />+
          </h1>{" "}
          <p>Students Taught Across Grades 6–12</p>
        </div>
        <div className="flex flex-col gap-y-2 rounded-xl p-4 max-w-[233px]">
          <FaUserTie className="text-xl mb-2" />
          <h5 className="h5">Qualified Instructors</h5>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="flex flex-col gap-y-2 rounded-xl p-4 max-w-[233px]">
          <FaUserTie className="text-xl mb-2" />
          <h5 className="h5">Qualified Instructors</h5>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
