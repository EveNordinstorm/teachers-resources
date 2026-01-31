import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import writing from "../../../assets/Educators Icons_Writing.svg";
import organisation from "../../../assets/Educators Icons_Organisation.svg";
import reading from "../../../assets/Educators Icons_Reading.svg";
import studyskills from "../../../assets/Educators Icons_Study skills.svg";
import misc from "../../../assets/Educators Icons_Miscellaneous.svg";

export default function Topics() {
  return (
    <Tabs defaultValue="writing">
      <TabsList className="p-0 grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-3 w-full">
        <TabsTrigger
          className="w-full p-0 rounded-t-xl bg-white text-core-blue block rounded-b-xl md:rounded-b-none"
          value="writing"
        >
          <div className="bg-dark-pink rounded-t-xl aspect-square w-full flex items-center justify-center p-3 sm:p-4 md:p-3">
            <img
              className="w-full h-full object-contain max-w-[60px] sm:max-w-[90px] md:max-w-[96px] lg:max-w-[150px]"
              src={writing}
              alt="Writing"
            />
          </div>
          <div className="py-1 sm:py-2 text-center font-bold text-sm sm:text-base md:text-base lg:text-lg">
            Writing
          </div>
        </TabsTrigger>

        <TabsTrigger
          className="w-full p-0 rounded-t-xl bg-white text-core-blue block rounded-b-xl md:rounded-b-none"
          value="organisation"
        >
          <div className="bg-dark-blue rounded-t-xl aspect-square w-full flex items-center justify-center p-3 sm:p-4 md:p-3">
            <img
              className="w-full h-full object-contain max-w-[60px] sm:max-w-[90px] md:max-w-[96px] lg:max-w-[150px]"
              src={organisation}
              alt="Organisation"
            />
          </div>
          <div className="py-1 sm:py-2 text-center font-bold text-sm sm:text-base md:text-base lg:text-lg">
            Organisation
          </div>
        </TabsTrigger>

        <TabsTrigger
          className="w-full p-0 rounded-t-xl bg-white text-core-blue block rounded-b-xl md:rounded-b-none"
          value="reading"
        >
          <div className="bg-dark-green rounded-t-xl aspect-square w-full flex items-center justify-center p-3 sm:p-4 md:p-3">
            <img
              className="w-full h-full object-contain max-w-[60px] sm:max-w-[90px] md:max-w-[96px] lg:max-w-[150px]"
              src={reading}
              alt="Reading"
            />
          </div>
          <div className="py-1 sm:py-2 text-center font-bold text-sm sm:text-base md:text-base lg:text-lg">
            Reading
          </div>
        </TabsTrigger>

        <TabsTrigger
          className="w-full p-0 rounded-t-xl bg-white text-core-blue block"
          value="study-skills"
        >
          <div className="bg-dark-gray rounded-t-xl aspect-square w-full flex items-center justify-center p-3 sm:p-4 md:p-3">
            <img
              className="w-full h-full object-contain max-w-[60px] sm:max-w-[90px] md:max-w-[96px] lg:max-w-[150px]"
              src={studyskills}
              alt="Study Skills"
            />
          </div>
          <div className="py-1 sm:py-2 text-center font-bold text-sm sm:text-base md:text-base lg:text-lg">
            Study Skills
          </div>
        </TabsTrigger>

        <TabsTrigger
          className="w-full p-0 rounded-t-xl bg-white text-core-blue block"
          value="misc"
        >
          <div className="bg-core-blue rounded-t-xl aspect-square w-full flex items-center justify-center p-3 sm:p-4 md:p-3">
            <img
              className="w-full h-full object-contain max-w-[60px] sm:max-w-[90px] md:max-w-[96px] lg:max-w-[150px]"
              src={misc}
              alt="Miscellaneous"
            />
          </div>
          <div className="py-1 sm:py-2 text-center font-bold text-sm sm:text-base md:text-base lg:text-lg">
            Miscellaneous
          </div>
        </TabsTrigger>
      </TabsList>

      <TabsContent
        className="bg-white p-3 rounded-b-xl shadow-sm"
        value="writing"
      >
        Writing
      </TabsContent>

      <TabsContent
        className="bg-white p-3 rounded-b-xl shadow-sm"
        value="organisation"
      >
        Organisation
      </TabsContent>

      <TabsContent
        className="bg-white p-3 rounded-b-xl shadow-sm"
        value="reading"
      >
        Reading
      </TabsContent>

      <TabsContent
        className="bg-white p-3 rounded-b-xl shadow-sm"
        value="study-skills"
      >
        Study Skills
      </TabsContent>

      <TabsContent className="bg-white p-3 rounded-b-xl shadow-sm" value="misc">
        Miscellaneous
      </TabsContent>
    </Tabs>
  );
}
