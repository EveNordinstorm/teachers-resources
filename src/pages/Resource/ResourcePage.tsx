import { useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { getResourceById } from "../Home/data/topicsData";

export default function ResourcePage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const resourceData = id ? getResourceById(Number(id)) : null;

  const handleBack = () => {
    navigate("/");
  };

  if (!resourceData) {
    return (
      <div>
        <Button
          onClick={handleBack}
          className="bg-core-blue hover:cursor-pointer hover:bg-active-blue text-white rounded-sm mb-5"
        >
          <FontAwesomeIcon className="w-5 h-5 mr-5" icon={faArrowLeft} />
          <div className="mr-6">Back</div>
        </Button>
        <div className="text-core-blue">
          <p className="font-bold text-xl">Resource not found</p>
        </div>
      </div>
    );
  }

  const { resource, educationLevel, topicLabel } = resourceData;

  return (
    <div>
      <Button
        onClick={handleBack}
        className="bg-core-blue hover:cursor-pointer hover:bg-active-blue text-white rounded-sm mb-5"
      >
        <FontAwesomeIcon className="w-5 h-5 mr-5" icon={faArrowLeft} />
        <div className="mr-6">Back</div>
      </Button>
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
  );
}
