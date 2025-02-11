import clove from "/cloveleaf.svg";
import bg from "/aboutbg.svg";

export default function LeaderboardSection() {
  return (
    <div className="relative min-h-[750px] w-full rounded-2xl max-w-3xl my-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-2xl"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full p-20 max-w-xl mt-10">
        <h1 className="text-6xl font-medium text-white mb-6 leading-tight font-saira">
          Be On Our
          <br />
          Leaderboard
        </h1>

        <p className="text-gray-300 text-lg mb-8 leading-relaxed font-thin">
          Visit and register on Shuffle. Go to{" "}
          <a
            href="https://shuffle.com"
            className="text-white underline hover:text-gray-200"
          >
            Shuffle.com
          </a>{" "}
          and click on Register. Create your account. Complete your information
          and click Play Now.{" "}
          <span className="text-white font-medium">ENTER THE CODE "DGEN"</span>{" "}
          Complete your registration and enjoy your exclusive offers! If DGEN is
          not in the referred section of your account you can message support to
          get our code added.
        </p>

        <button
          className="px-8 py-3 rounded-xl bg-white text-black  transition-all transform hover:scale-105 font-medium text-md"
          style={{
            boxShadow: "inset 0 -10px 6px #E1BBFB",
          }}
        >
          Register Now
        </button>
      </div>

      {/* Clover Leaf */}
      <div className="absolute -bottom-24 left-14 w-36 h-36 z-10">
        <img
          src={clove}
          alt="Lucky clover"
          className="w-full h-full object-contain"
          style={{
            filter: "drop-shadow(0 0 10px rgba(82, 255, 82, 0.3))",
          }}
        />
      </div>
    </div>
  );
}
