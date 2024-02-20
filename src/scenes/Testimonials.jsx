import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <section id="testimonials" className="pt-32 pb-16">
      {/* HEADING */}
      <motion.div
        className="md:w-1/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-5 text-red">
          TESTIMONIALS
        </p>
        <LineGradient width="mx-auto w-2/5" />
        <p className="mt-10">
          Here's What People are Saying About My Work.
        </p>
      </motion.div>

      {/* TESTIMONIALS */}
      <div className="md:flex md:justify-between gap-8">
  <motion.div
    className="mx-auto relative bg-blue max-w-[400px] h-[350px] flex flex-col justify-end p-8 mt-48
      before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person1"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.6 }}
    variants={{
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    }}
  >
    <p className="font-playfair text-4xl text-center">“</p>
    <p className="text-center text-lg">
      Working with Rahil has been an absolute pleasure. His dedication to his work is evident in every project he undertakes. Rahil's attention to detail and innovative problem-solving skills have significantly contributed to our team's success. I highly recommend Rahil for any project or team looking for a reliable and talented individual.
    </p>
  </motion.div>

  <motion.div
    className="mx-auto relative bg-red max-w-[400px] h-[350px] flex flex-col justify-end p-8 mt-48
      before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person2"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    transition={{ delay: 0.2, duration: 0.6 }}
    variants={{
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    }}
  >
    <p className="font-playfair text-4xl text-center">“</p>
    <p className="text-center text-lg">
      Rahil is a true asset to our team. His professionalism, reliability, and positive attitude make him a joy to work with. He consistently delivers high-quality work under tight deadlines, and his ability to adapt to new challenges is impressive. I have no hesitation in recommending Rahil to any organization seeking a motivated and skilled team member.
    </p>
  </motion.div>

  <motion.div
    className="mx-auto relative bg-yellow max-w-[400px] h-[350px] flex flex-col justify-end p-8 mt-48
      before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person3"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    transition={{ delay: 0.4, duration: 0.6 }}
    variants={{
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    }}
  >
    <p className="font-playfair text-4xl text-center">“</p>
    <p className="text-center text-lg">
    I've collaborated with Rahil on several projects, and he consistently exceeds expectations. His strong work ethic, excellent communication, and ability to thrive under pressure make him invaluable. Rahil's positive attitude and dedication to excellence truly set him apart. I wholeheartedly recommend Rahil for any endeavor.
    </p>
  </motion.div>
</div>

    </section>
  );
};

export default Testimonials;