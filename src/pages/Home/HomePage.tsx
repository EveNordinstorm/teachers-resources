import logo from "../../assets/BDA_Logo_Legacy_RGB.svg";
import HomeTabs from "./Components/tabs";

export default function HomePage() {
  return (
    <main>
      <div className="flex flex-col md:flex-row md:justify-between mb-10">
        <div className="pt-6 order-2 md:order-1">
          <h1 className="font-bold text-core-blue text-xl md:text-3xl lg:text-4xl mb-3">
            Teachers Resources
          </h1>
          <p className="text-core-blue md:text-xl">
            Your hub for exploring resources across Primary, Secondary, and
            Further Education/Higher Education.
          </p>
        </div>

        <img
          className="w-32 lg:w-52 self-end order-1 md:order-2"
          src={logo}
          alt="British Dyslexia Association Logo"
          width={208}
          height={208}
        />
      </div>

      <HomeTabs />
    </main>
  );
}
