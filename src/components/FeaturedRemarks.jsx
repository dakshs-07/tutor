import { feedbacks } from "../assets/data";
import { Marquee } from "./ui/marquee";

const FeaturedRemarks = () => {
  return (
    <div className="bg-gray-20 py-10">
      <h3 className="h3 text-center mt-7 mb-10">What parents and students say</h3>

      <Marquee className="gap-6 py-4" pauseOnHover>
        {feedbacks.map((fb, i) => (
          <div
            key={i}
            className="w-[450px] min-h-[150px] p-6 bg-white rounded-xl shadow-md flex flex-col justify-between"
          >
            <p className="italic text-gray-800 text-lg">“{fb.remark}”</p>
            <div className="mt-4 text-right">
              <span className="font-semibold text-gray-900">— {fb.name}</span>
              <br />
              <span className="text-sm text-gray-500">{fb.subject}</span>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default FeaturedRemarks;
