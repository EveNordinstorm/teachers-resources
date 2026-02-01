import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "motion/react";

interface ResourceCardProps {
  id: number;
  topicNumber: string;
  title: string;
  bgColor: string;
  pastelColor: string;
  activeColor: string;
}

export default function ResourceCard({
  id,
  topicNumber,
  title,
  bgColor,
  pastelColor,
  activeColor,
}: ResourceCardProps) {
  const navigate = useNavigate();

  const textColorMap: Record<string, string> = {
    "bg-dark-pink": "text-dark-pink",
    "bg-dark-blue": "text-dark-blue",
    "bg-dark-green": "text-dark-green",
    "bg-dark-gray": "text-dark-gray",
    "bg-core-blue": "text-core-blue",
  };

  const textColor = textColorMap[bgColor] || "text-dark-pink";

  const handleClick = () => {
    navigate(`/resource/${id}`);
  };

  return (
    <Card className="w-full max-w-sm rounded-none bg-white p-4 flex flex-col h-full">
      <CardHeader className="p-0 flex-1">
        <CardTitle className={textColor}>{topicNumber}</CardTitle>
        <CardDescription className="text-core-blue font-bold text-lg">
          {title}
        </CardDescription>
      </CardHeader>
      <CardFooter className="p-0 mt-auto">
        <motion.div
          className="w-full"
          whileHover="hover"
          initial="rest"
          animate="rest"
        >
          <Button
            onClick={handleClick}
            className={`w-full ${pastelColor} lg:text-lg ${textColor} font-bold rounded-sm hover:cursor-pointer ${activeColor} hover:text-white transition-colors duration-200 ease-in-out`}
          >
            Read
            <motion.span
              variants={{
                rest: { x: 0 },
                hover: {
                  x: [0, 10, 0],
                  transition: { duration: 0.7, ease: "easeInOut" },
                },
              }}
            >
              <FontAwesomeIcon className="w-5 h-5" icon={faArrowRight} />
            </motion.span>
          </Button>
        </motion.div>
      </CardFooter>
    </Card>
  );
}
