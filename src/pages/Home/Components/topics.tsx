import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { topics, resourcesByEducationLevel, type Topic } from "../data/topicsData";
import ResourceCard from "./resourceCard";

interface TopicTriggerProps {
  topic: Topic;
  isLastTwo: boolean;
}

function TopicTrigger({ topic, isLastTwo }: TopicTriggerProps) {
  return (
    <TabsTrigger
      className={`w-full p-0 rounded-t-xl bg-white text-core-blue block ${
        isLastTwo ? "" : "rounded-b-xl md:rounded-b-none"
      }`}
      value={topic.value}
    >
      <div
        className={`${topic.bgColor} rounded-t-xl aspect-square w-full flex items-center justify-center p-3 sm:p-4 md:p-3`}
      >
        <img
          className="w-full h-full object-contain max-w-[60px] sm:max-w-[90px] md:max-w-[96px] lg:max-w-[150px]"
          src={topic.icon}
          alt={topic.label}
        />
      </div>
      <div className="py-1 sm:py-2 text-center font-bold text-sm sm:text-base md:text-base lg:text-lg">
        {topic.label}
      </div>
    </TabsTrigger>
  );
}

interface TopicContentProps {
  topic: Topic;
  educationLevel: string;
}

function TopicContent({ topic, educationLevel }: TopicContentProps) {
  const resources = resourcesByEducationLevel[educationLevel]?.topics[topic.value] || [];

  return (
    <TabsContent
      value={topic.value}
      className="bg-white p-3 rounded-b-xl shadow-sm relative"
    >
      <div
        className={`relative ${topic.bgColor} text-white text-sm rounded-xl p-6 mt-3`}
      >
        <div
          className={`absolute ${topic.arrowPosition.mobile} ${topic.arrowPosition.desktop} -translate-x-1/2 -top-4 w-8 h-8 ${topic.bgColor} rotate-45 rounded-tl-lg`}
        ></div>
        <div className="text-white mb-2 font-bold md:text-xl md:mb-4">
          {educationLevel} {topic.label}
        </div>
        {resources.length > 0 && (
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3">
            {resources.map((resource) => (
              <ResourceCard
                key={resource.id}
                id={resource.id}
                topicNumber={resource.topicNumber}
                title={resource.title}
                bgColor={topic.bgColor}
                pastelColor={topic.pastelColor}
                activeColor={topic.activeColor}
              />
            ))}
          </div>
        )}
      </div>
    </TabsContent>
  );
}

interface TopicsProps {
  educationLevel: string;
}

export default function Topics({ educationLevel }: TopicsProps) {
  return (
    <Tabs defaultValue="writing">
      <TabsList className="p-0 grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-3 w-full">
        {topics.map((topic, index) => (
          <TopicTrigger
            key={topic.value}
            topic={topic}
            isLastTwo={index >= topics.length - 2}
          />
        ))}
      </TabsList>

      {topics.map((topic) => (
        <TopicContent
          key={topic.value}
          topic={topic}
          educationLevel={educationLevel}
        />
      ))}
    </Tabs>
  );
}
