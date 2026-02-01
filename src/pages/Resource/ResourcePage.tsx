import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { getResourceById } from "../Home/data/topicsData";
import logo from "../../assets/BDA_Logo_Legacy_RGB.svg";
import { motion } from "motion/react";

export default function ResourcePage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isBookletLoading, setIsBookletLoading] = useState(true);

  const resourceData = id ? getResourceById(Number(id)) : null;

  const handleBack = () => {
    navigate("/");
  };

  if (!resourceData) {
    return (
      <div>
        <motion.div
          className="inline-block"
          whileHover="hover"
          initial="rest"
          animate="rest"
        >
          <Button
            onClick={handleBack}
            className="bg-core-blue hover:cursor-pointer hover:bg-active-blue text-white rounded-sm mb-5 transition-colors duration-200 ease-in-out"
          >
            <motion.span
              variants={{
                rest: { x: 0 },
                hover: {
                  x: [0, -10, 0],
                  transition: { duration: 2, ease: "easeInOut" },
                },
              }}
            >
              <FontAwesomeIcon className="w-5 h-5 mr-5" icon={faArrowLeft} />
            </motion.span>
            <div className="mr-6">Back</div>
          </Button>
        </motion.div>
        <div className="text-core-blue">
          <p className="font-bold text-xl">Resource not found</p>
        </div>
      </div>
    );
  }

  const { resource, educationLevel, topicLabel } = resourceData;

  return (
    <div>
      <div className="flex flex-col md:flex-row md:justify-between mb-6">
        <div className="order-2 md:order-1">
          <motion.div
            className="inline-block"
            whileHover="hover"
            initial="rest"
            animate="rest"
          >
            <Button
              onClick={handleBack}
              className="bg-core-blue hover:cursor-pointer hover:bg-active-blue text-white rounded-sm mb-5 transition-colors duration-200 ease-in-out"
            >
              <motion.span
                variants={{
                  rest: { x: 0 },
                  hover: {
                    x: [0, -4, 0],
                    transition: { duration: 0.4, ease: "easeInOut" },
                  },
                }}
              >
                <FontAwesomeIcon className="w-5 h-5 mr-5" icon={faArrowLeft} />
              </motion.span>
              <div className="mr-6">Back</div>
            </Button>
          </motion.div>
          <div className="text-core-blue">
            <p className="font-bold text-xl mb-5">
              {educationLevel} {topicLabel}
            </p>
            <p>{resource.topicNumber}</p>
            <h1 className="font-bold text-core-blue text-xl md:text-3xl lg:text-4xl mb-3">
              {resource.title}
            </h1>
          </div>
        </div>

        <img
          className="w-32 lg:w-52 self-end mb-5 md:mb-0 md:self-start order-1 md:order-2"
          src={logo}
          alt="Logo"
        />
      </div>

      {resource.bookletUrl && (
        <div
          className="w-full relative"
          style={{ height: "80vh", minHeight: "500px" }}
        >
          {isBookletLoading && (
            <div className="absolute inset-0 bg-gray-100 flex items-center justify-center z-10">
              <p className="text-core-blue text-lg">Loading booklet...</p>
            </div>
          )}
          <iframe
            src={resource.bookletUrl}
            title={resource.title}
            className="w-full h-full border-0"
            allowFullScreen
            onLoad={() => setIsBookletLoading(false)}
          />
        </div>
      )}
    </div>
  );
}
