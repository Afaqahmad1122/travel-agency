import { motion } from "framer-motion";
import Line from "../assets/stick.svg";
import Stars from "../assets/star.svg";
import Customer from "../assets/customer.png";
import { fadeIn, staggerContainer, travelVariants } from "../utils/motion";

// ! imports ends

const Customers = () => {
  return (
    <section>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="flex items-center justify-between w-5/6 mx-auto mt-10"
      >
        <motion.div variants={fadeIn("right", "tween", 0.2, 1)}>
          <img src={Line} alt="line" />
          <h1 className="text-secondary-100 font-bold text-5xl pt-2 pb-4 ">
            What Customers <br />
            Think About Us?
          </h1>
          <div className="py-7 px-2 rounded-xl bg-white">
            <p className="py-4 ">
              BestTravel helped to see great places with great offers. <br />
              The company also assure to refund
            </p>
            <img src={Stars} alt="Stars" />
            <p className="text-secondary-100 text-sm py-2">Josh Stones</p>
            <p className="text-xs">Traveller</p>
          </div>
        </motion.div>
        <motion.div variants={travelVariants("right")}>
          <img src={Customer} alt="customer" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Customers;
