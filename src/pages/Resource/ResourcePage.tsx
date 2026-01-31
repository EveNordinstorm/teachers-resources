import { useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { getResourceById } from "../Home/data/topicsData";
import logo from "../../assets/BDA_Logo_Legacy_RGB.svg";

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
      <div className="flex flex-col md:flex-row md:justify-between mb-6">
        <div className="order-2 md:order-1">
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

        <img
          className="w-32 lg:w-52 self-end mb-5 md:mb-0 md:self-start order-1 md:order-2"
          src={logo}
          alt="Logo"
        />
      </div>

      {resource.bookletUrl && (
        <div className="w-full">
          <iframe
            src={resource.bookletUrl}
            title={resource.title}
            className="w-full border-0"
            style={{ height: "80vh", minHeight: "500px" }}
            allowFullScreen
          />
        </div>
      )}
    </div>
  );
}
