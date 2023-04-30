import WFly from "../assets/w-fly.svg";

const Contact = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center text-center md:mt-32 mt-12 ">
        <h1 className="text-5xl font-semibold text-secondary-100">
          Contact us to be informed <br /> about news
        </h1>
        <p className="font-medium text-xl py-4">
          Recieve latest news, update and many other <br />
          things every week.
        </p>
        <div className="flex gap-3">
          <input
            type="email"
            placeholder="Enter your email please"
            className="text-secondary-300 pl-4 md:pr-40 pr-12 rounded-xl"
          />
          <img
            src={WFly}
            alt="w-fly"
            className="bg-primary-500 rounded-xl pt-2.5 px-1 w-12 h-12 shadow-black  shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
