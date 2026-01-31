import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function HomeTabs() {
  return (
    <Tabs defaultValue="primary" className="">
      <TabsList className="p-0">
        <TabsTrigger
          className="text-lg md:text-xl lg:text-2xl lg:font-2xl font-bold px-4 py-3 rounded-b-none rounded-t-xl bg-pastel-blue text-core-blue hover:cursor-pointer mr-2"
          value="primary"
        >
          <div className="w-5 h-5 rounded-full bg-active-blue mr-1.5"></div>
          Primary
        </TabsTrigger>
        <TabsTrigger
          className="text-lg md:text-xl lg:text-2xl lg:font-2xl font-bold px-4 py-3 rounded-b-none rounded-t-xl bg-pastel-pink text-core-blue hover:cursor-pointer mr-2"
          value="secondary"
        >
          <div className="w-5 h-5 rounded-full bg-active-pink mr-1.5"></div>
          Secondary
        </TabsTrigger>
        <TabsTrigger
          className="text-lg md:text-xl lg:text-2xl lg:font-2xl font-bold px-4 py-3 rounded-b-none rounded-t-xl bg-pastel-green text-core-blue hover:cursor-pointer mr-2"
          value="fe/he"
        >
          <div className="w-5 h-5 rounded-full bg-active-green mr-1.5"></div>
          FE/HE
        </TabsTrigger>
      </TabsList>
      <TabsContent
        className="bg-pastel-blue p-3 rounded-b-xl rounded-tr-xl shadow-sm z-10"
        value="primary"
      >
        Primary
      </TabsContent>
      <TabsContent
        className="bg-pastel-pink p-3 rounded-b-xl rounded-tr-xl shadow-sm z-10"
        value="secondary"
      >
        Secondary
      </TabsContent>
      <TabsContent
        className="bg-pastel-green p-3 rounded-b-xl rounded-tr-xl shadow-sm z-10"
        value="fe/he"
      >
        FE/HE
      </TabsContent>
    </Tabs>
  );
}
