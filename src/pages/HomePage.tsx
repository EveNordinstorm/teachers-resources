import logo from "../assets/BDA_Logo_Legacy_RGB.svg";

export default function HomePage() {
  return (
    <div className="flex flex-col sm:flex-row justify-between">
      <img
        className="
          w-32
          lg:w-52
          order-1 sm:order-2
          self-end sm:self-auto
        "
        src={logo}
        alt="Logo"
      />

      <div className="pt-6 order-2 sm:order-1">
        <h1 className="font-bold text-core-blue text-3xl lg:text-4xl mb-3">
          Teachers Resources
        </h1>
        <p className="text-core-blue lg:text-xl">
          Your hub for exploring resources across Primary, Secondary, and HE/FE.
        </p>
      </div>
    </div>
  );
}
