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

export default function ResourceCard() {
  return (
    <Card className="w-full max-w-sm rounded-none bg-white p-4">
      <CardHeader className="p-0">
        <CardTitle className="text-dark-pink">Topic Number</CardTitle>
        <CardDescription className="text-core-blue font-bold text-lg">
          Resource Title
        </CardDescription>
      </CardHeader>
      <CardFooter className="p-0">
        <Button className="w-full bg-pastel-pink lg:text-lg text-dark-pink font-bold rounded-none hover:cursor-pointer hover:bg-active-pink hover:text-white">
          Read
          <FontAwesomeIcon className="w-5 h-5" icon={faArrowRight} />
        </Button>
      </CardFooter>
    </Card>
  );
}
