import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  topics,
  resourcesByEducationLevel,
  type Topic,
} from "../data/topicsData";
import ResourceCard from "./resourceCard";
import { motion, AnimatePresence } from "motion/react";

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

interface TopicsProps {
  educationLevel: string;
}

export default function Topics({ educationLevel }: TopicsProps) {
  const [activeTab, setActiveTab] = useState("writing");
  const activeTopic = topics.find((t) => t.value === activeTab)!;
  const resources =
    resourcesByEducationLevel[educationLevel]?.topics[activeTab] || [];

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab}>
      <TabsList className="p-0 grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-3 w-full">
        {topics.map((topic, index) => (
          <TopicTrigger
            key={topic.value}
            topic={topic}
            isLastTwo={index >= topics.length - 2}
          />
        ))}
      </TabsList>

      <div className="bg-white p-3 rounded-b-xl shadow-sm">
        <div
          className={`relative ${activeTopic.bgColor} text-white text-sm rounded-xl p-6 mt-3 transition-colors duration-300 ease-out`}
        >
          {topics.map((topic) => (
            <motion.div
              key={topic.value}
              initial={false}
              animate={{
                scale: activeTab === topic.value ? 1 : 0,
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className={`absolute ${topic.arrowPosition.mobile} ${topic.arrowPosition.desktop} -translate-x-1/2 -top-4 w-8 h-8 ${activeTopic.bgColor} rotate-45 rounded-tl-lg origin-center transition-colors duration-300 ease-out`}
            />
          ))}

          <div className="text-white mb-2 font-bold md:text-xl md:mb-4">
            {educationLevel} {activeTopic.label}
          </div>

          <AnimatePresence mode="wait">
            {resources.length > 0 && (
              <motion.div
                key={activeTab}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.08,
                    },
                  },
                  exit: {
                    opacity: 0,
                    transition: { duration: 0.15 },
                  },
                }}
                className="grid md:grid-cols-3 lg:grid-cols-4 gap-3"
              >
                {resources.map((resource) => (
                  <motion.div
                    key={resource.id}
                    variants={{
                      hidden: { opacity: 0, y: 15 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.5, ease: "easeOut" },
                      },
                    }}
                  >
                    <ResourceCard
                      id={resource.id}
                      topicNumber={resource.topicNumber}
                      title={resource.title}
                      bgColor={activeTopic.bgColor}
                      pastelColor={activeTopic.pastelColor}
                      activeColor={activeTopic.activeColor}
                    />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Tabs>
  );
}
