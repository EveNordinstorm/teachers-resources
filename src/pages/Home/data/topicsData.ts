// Types
export interface Resource {
  id: number;
  topicNumber: string;
  title: string;
}

export interface Topic {
  value: string;
  label: string;
  icon: string;
  bgColor: string;
  pastelColor: string;
  activeColor: string;
  arrowPosition: {
    mobile: string;
    desktop: string;
  };
}

export interface EducationLevelData {
  level: string;
  topics: {
    [topicValue: string]: Resource[];
  };
}

// TOPIC ICONS
import writing from "../../../assets/Educators Icons_Writing.svg";
import organisation from "../../../assets/Educators Icons_Organisation.svg";
import reading from "../../../assets/Educators Icons_Reading.svg";
import studyskills from "../../../assets/Educators Icons_Study skills.svg";
import misc from "../../../assets/Educators Icons_Miscellaneous.svg";

// TOPICS
export const topics: Topic[] = [
  {
    value: "writing",
    label: "Writing",
    icon: writing,
    bgColor: "bg-dark-pink",
    pastelColor: "bg-pastel-pink",
    activeColor: "hover:bg-active-pink",
    arrowPosition: {
      mobile: "left-[16.67%]",
      desktop: "md:left-[10%]",
    },
  },
  {
    value: "organisation",
    label: "Organisation",
    icon: organisation,
    bgColor: "bg-dark-blue",
    pastelColor: "bg-pastel-blue",
    activeColor: "hover:bg-active-blue",
    arrowPosition: {
      mobile: "left-[50%]",
      desktop: "md:left-[30%]",
    },
  },
  {
    value: "reading",
    label: "Reading",
    icon: reading,
    bgColor: "bg-dark-green",
    pastelColor: "bg-pastel-green",
    activeColor: "hover:bg-active-green",
    arrowPosition: {
      mobile: "left-[83.33%]",
      desktop: "md:left-[50%]",
    },
  },
  {
    value: "study-skills",
    label: "Study Skills",
    icon: studyskills,
    bgColor: "bg-dark-gray",
    pastelColor: "bg-pastel-gray",
    activeColor: "hover:bg-active-gray",
    arrowPosition: {
      mobile: "left-[16.67%]",
      desktop: "md:left-[70%]",
    },
  },
  {
    value: "misc",
    label: "Miscellaneous",
    icon: misc,
    bgColor: "bg-core-blue",
    pastelColor: "bg-pastel-blue",
    activeColor: "hover:bg-active-blue",
    arrowPosition: {
      mobile: "left-[50%]",
      desktop: "md:left-[90%]",
    },
  },
];

// RESOURCES
export const resourcesByEducationLevel: Record<string, EducationLevelData> = {
  Primary: {
    level: "Primary",
    topics: {
      writing: [
        { id: 1, topicNumber: "Topic 1", title: "Letter Formation" },
        { id: 2, topicNumber: "Topic 2", title: "Simple Sentences" },
        { id: 3, topicNumber: "Topic 3", title: "Story Starters" },
        { id: 4, topicNumber: "Topic 4", title: "Handwriting Practice" },
      ],
      organisation: [
        { id: 5, topicNumber: "Topic 1", title: "Tidy Desk Tips" },
        { id: 6, topicNumber: "Topic 2", title: "Following Instructions" },
        { id: 7, topicNumber: "Topic 3", title: "Using a Checklist" },
      ],
      reading: [
        { id: 8, topicNumber: "Topic 1", title: "Phonics Basics" },
        { id: 9, topicNumber: "Topic 2", title: "Sight Words" },
        { id: 10, topicNumber: "Topic 3", title: "Reading Aloud" },
        { id: 11, topicNumber: "Topic 4", title: "Picture Books" },
      ],
      "study-skills": [
        { id: 12, topicNumber: "Topic 1", title: "Listening Skills" },
        { id: 13, topicNumber: "Topic 2", title: "Memory Games" },
      ],
      misc: [
        { id: 14, topicNumber: "Topic 1", title: "Classroom Tools" },
        { id: 15, topicNumber: "Topic 2", title: "Parent Guides" },
        { id: 16, topicNumber: "Topic 3", title: "Visual Timetables" },
      ],
    },
  },
  Secondary: {
    level: "Secondary",
    topics: {
      writing: [
        { id: 17, topicNumber: "Topic 1", title: "Essay Structure" },
        { id: 18, topicNumber: "Topic 2", title: "Paragraph Building" },
        { id: 19, topicNumber: "Topic 3", title: "Note-Taking Methods" },
        { id: 20, topicNumber: "Topic 4", title: "Exam Writing Tips" },
        { id: 21, topicNumber: "Topic 5", title: "Creative Writing" },
      ],
      organisation: [
        { id: 22, topicNumber: "Topic 1", title: "Homework Planning" },
        { id: 23, topicNumber: "Topic 2", title: "Folder Organisation" },
        { id: 24, topicNumber: "Topic 3", title: "Time Management" },
        { id: 25, topicNumber: "Topic 4", title: "Revision Timetables" },
      ],
      reading: [
        { id: 26, topicNumber: "Topic 1", title: "Reading Comprehension" },
        { id: 27, topicNumber: "Topic 2", title: "Skimming & Scanning" },
        { id: 28, topicNumber: "Topic 3", title: "Textbook Navigation" },
      ],
      "study-skills": [
        { id: 29, topicNumber: "Topic 1", title: "Revision Techniques" },
        { id: 30, topicNumber: "Topic 2", title: "Exam Preparation" },
        { id: 31, topicNumber: "Topic 3", title: "Mind Mapping" },
      ],
      misc: [
        { id: 32, topicNumber: "Topic 1", title: "Assistive Technology" },
        { id: 33, topicNumber: "Topic 2", title: "Access Arrangements" },
      ],
    },
  },
  "FE/HE": {
    level: "FE/HE",
    topics: {
      writing: [
        { id: 34, topicNumber: "Topic 1", title: "Academic Writing Style" },
        { id: 35, topicNumber: "Topic 2", title: "Dissertation Planning" },
        { id: 36, topicNumber: "Topic 3", title: "Referencing & Citations" },
        { id: 37, topicNumber: "Topic 4", title: "Critical Analysis" },
      ],
      organisation: [
        { id: 38, topicNumber: "Topic 1", title: "Project Management" },
        { id: 39, topicNumber: "Topic 2", title: "Deadline Tracking" },
        { id: 40, topicNumber: "Topic 3", title: "Digital Organisation" },
      ],
      reading: [
        { id: 41, topicNumber: "Topic 1", title: "Academic Journals" },
        { id: 42, topicNumber: "Topic 2", title: "Research Skills" },
        { id: 43, topicNumber: "Topic 3", title: "Critical Reading" },
        { id: 44, topicNumber: "Topic 4", title: "Literature Reviews" },
      ],
      "study-skills": [
        { id: 45, topicNumber: "Topic 1", title: "Independent Learning" },
        { id: 46, topicNumber: "Topic 2", title: "Lecture Note-Taking" },
        { id: 47, topicNumber: "Topic 3", title: "Group Work Strategies" },
      ],
      misc: [
        { id: 48, topicNumber: "Topic 1", title: "DSA Support" },
        { id: 49, topicNumber: "Topic 2", title: "Workplace Adjustments" },
        { id: 50, topicNumber: "Topic 3", title: "Assistive Software" },
      ],
    },
  },
};

// Helper type for resource lookup result
export interface ResourceLookupResult {
  resource: Resource;
  educationLevel: string;
  topicLabel: string;
}

// Helper function to find a resource by ID
export function getResourceById(id: number): ResourceLookupResult | null {
  for (const [, levelData] of Object.entries(resourcesByEducationLevel)) {
    for (const [topicKey, resources] of Object.entries(levelData.topics)) {
      const resource = resources.find((r) => r.id === id);
      if (resource) {
        const topic = topics.find((t) => t.value === topicKey);
        return {
          resource,
          educationLevel: levelData.level,
          topicLabel: topic?.label || topicKey,
        };
      }
    }
  }
  return null;
}
