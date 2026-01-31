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
  const textColorMap: Record<string, string> = {
    "bg-dark-pink": "text-dark-pink",
    "bg-dark-blue": "text-dark-blue",
    "bg-dark-green": "text-dark-green",
    "bg-dark-gray": "text-dark-gray",
    "bg-core-blue": "text-core-blue",
  };

  const textColor = textColorMap[bgColor] || "text-dark-pink";

  const handleClick = () => {
    // Navigate to resource by ID
    window.location.href = `/resource/${id}`;
  };

  return (
    <Card className="w-full max-w-sm rounded-none bg-white p-4">
      <CardHeader className="p-0">
        <CardTitle className={textColor}>{topicNumber}</CardTitle>
        <CardDescription className="text-core-blue font-bold text-lg">
          {title}
        </CardDescription>
      </CardHeader>
      <CardFooter className="p-0">
        <Button
          onClick={handleClick}
          className={`w-full ${pastelColor} lg:text-lg ${textColor} font-bold rounded-none hover:cursor-pointer ${activeColor} hover:text-white`}
        >
          Read
          <FontAwesomeIcon className="w-5 h-5" icon={faArrowRight} />
        </Button>
      </CardFooter>
    </Card>
  );
}
