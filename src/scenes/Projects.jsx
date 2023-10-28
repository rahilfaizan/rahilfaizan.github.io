import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";


const projectVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  
};

const Project = ({ title, color, ImageURL, value, link }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-${color} z-30 flex flex-col justify-center items-center text-center p-16 text-white rounded-md shadow-md`; // Updated overlay styles
  return (
    <motion.div className="relative"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5 }}
    variants={{
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 },
    }}>
      <a href={link} className="block" target="_blank">
        <div className={overlayStyles}>
          <p className="text-3xl  font-bold font-playfair">{title}</p>
          <p className="mt-7  font-bold">{value}</p>
        </div>
        <img src={ImageURL} alt={title} className="object-cover h-80 w-full rounded-md " />
      </a>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="md-flex">
      {/* PROJECTS */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-screen-xl mx-auto px-8"
        >
          <motion.div
          className="col-span-1 mb-2 md:col-span-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
            <p className="font-playfair font-semibold text-4xl mb-5">
              <span className="text-red">PRO</span>JECTS
            </p>
            <LineGradient width="w-32" />
</motion.div>

          {/* ROW 1 */}
          <Project
            title="Taxi Fare Prediction"
            color="gradient-rainblue" 
            value="Predicting Taxi Fare Prices using XGBoost and Random Forest in R"
            link="https://github.com/rahilfaizan/Taxi_Fare_pred"
            ImageURL="https://images.unsplash.com/photo-1519566657253-e37fbcf36dfb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2360&q=80"
          />

          <Project
            title="Trip Advisor Reviews Sentiment Analysis"
            color="gradient-rainblue" 
            value="Analyzing Sentiment in Trip Advisor Reviews using Hugging Face’s Transformers Model in Python"
            link="https://github.com/rahilfaizan/sentiment_analysis"
            ImageURL="https://images.unsplash.com/photo-1587483166702-bf9aa66bd791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZW1vaml8ZW58MHx8MHx8fDI%3D&auto=format&fit=crop&w=600&q=60"
          />

          {/* ROW 2 */}
          <Project
            title="Nike Us sales dashboard"
            color="gradient-rainblue" 
            value="Enhancing Nike US Sales Data Insights with an Interactive Excel Dashboard Visualization"
            link="https://github.com/rahilfaizan/nike_dashboard/tree/main"
            ImageURL="https://user-images.githubusercontent.com/51293067/259884891-4c18beea-5c47-434e-a573-168029c28e6f.png"
          />

          <Project title="Project 4" color="gradient-rainblue"  />

          <Project title="Project 5" color="gradient-rainblue"  />

          {/* ROW 3 */}
          <Project 
            title="Project 6" 
            color="gradient-rainblue" 
            ImageURL="https://images.unsplash.com/photo-1583422409516-2895a77efded?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFyY2Vsb25hfGVufDB8fDB8fHwy&auto=format&fit=crop&w=600&q=60"
          />
        </div>
        <br />
      </div>
    </section>
  );
};

export default Projects;
