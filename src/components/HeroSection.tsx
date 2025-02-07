import card from "/card.svg";
import hero from "/heroIconPage.svg";

export default function HeroSection() {
  return (
    <div className="relative min-h-[800px] w-full  bg-[#1a1a1a]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${hero})`,
        }}
      />

      {/* Floating Card */}
      <div className="absolute right-[35%] -bottom-[10%] w-40 h-40">
        <img
          src={card}
          alt="Playing card"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[800px] px-4 text-center ">
        <h1 className="max-w-2xl mb-2 text-4xl md:text-5xl font-bold text-white font-saira bg-gradient-to-b from-[#E1BBFB] to-white bg-clip-text text-transparent">
          Collect your XP points.
        </h1>
        <h2 className="max-w-2xl text-4xl md:text-5xl font-bold text-white font-saira bg-gradient-to-b from-[#E1BBFB] to-white bg-clip-text text-transparent">
          Register for free and
        </h2>
        <h2 className="max-w-2xl text-4xl md:text-5xl font-bold text-white font-saira bg-gradient-to-b from-[#E1BBFB] to-white bg-clip-text text-transparent">
          earn rewards!
        </h2>
        <p className="my-8 text-sm text-gray-300 max-w-xs font-sarif font-thin">
          Creative design to build a brand that's strong, impactful, and full of
          meaning
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            className="px-8 py-3 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors duration-300 "
            style={{ boxShadow: "inset 0 -4px 6px rgba(0, 0, 0, 0.2)" }}
          >
            Register For Free
          </button>
          <button className="px-8 py-3 bg-black text-white shadow-md rounded-lg hover:bg-white/10 transition-colors duration-300 font-semibold">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
