import { useEffect } from "react";

const Calendly = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <h2 className="h2 flex justify-center mt-20">Book a session</h2>
      <div
        className="calendly-inline-widget mt-10"
        data-url="https://calendly.com/nishthapinjore/30min"
        style={{ minWidth: "320px", height: "700px" }}
      />
    </>
  );
};

export default Calendly;
