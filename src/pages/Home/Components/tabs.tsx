import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Topics from "./topics";

export default function HomeTabs() {
  return (
    <Tabs defaultValue="primary">
      <TabsList className="p-0 gap-2">
        <TabsTrigger
          className="text-sm md:text-xl lg:text-2xl lg:font-2xl font-bold p-2 md:p-3 lg:px-8 rounded-b-none rounded-t-xl bg-pastel-blue text-core-blue"
          value="primary"
        >
          <div className="w-5 h-5 rounded-full bg-active-blue mr-1.5"></div>
          Primary
        </TabsTrigger>
        <TabsTrigger
          className="text-sm md:text-xl lg:text-2xl lg:font-2xl font-bold p-2 md:p-3 lg:px-8 rounded-b-none rounded-t-xl bg-pastel-pink text-core-blue"
          value="secondary"
        >
          <div className="w-5 h-5 rounded-full bg-active-pink mr-1.5"></div>
          Secondary
        </TabsTrigger>
        <TabsTrigger
          className="text-sm md:text-xl lg:text-2xl lg:font-2xl font-bold p-2 md:p-3 lg:px-8 rounded-b-none rounded-t-xl bg-pastel-green text-core-blue"
          value="fe/he"
        >
          <div className="w-5 h-5 rounded-full bg-active-green mr-1.5"></div>
          FE/HE
        </TabsTrigger>
      </TabsList>
      <TabsContent
        className="bg-pastel-blue p-5 rounded-b-xl rounded-tr-xl shadow-sm"
        value="primary"
      >
        <div className="text-core-blue mb-2 font-bold md:text-xl md:mb-4">
          Explore topics in Primary:
        </div>
        <Topics educationLevel="Primary" />
      </TabsContent>
      <TabsContent
        className="bg-pastel-pink p-5 rounded-b-xl rounded-tr-xl shadow-sm"
        value="secondary"
      >
        <div className="text-core-blue mb-2 font-bold md:text-xl md:mb-4">
          Explore topics in Secondary:
        </div>
        <Topics educationLevel="Secondary" />
      </TabsContent>
      <TabsContent
        className="bg-pastel-green p-5 rounded-b-xl rounded-tr-xl shadow-sm"
        value="fe/he"
      >
        <div className="text-core-blue mb-2 font-bold md:text-xl md:mb-4">
          Explore topics in Further Education/Higher Education:
        </div>
        <Topics educationLevel="FE/HE" />
      </TabsContent>
    </Tabs>
  );
}
