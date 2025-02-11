import HeroSection from "./components/HeroSection";
import MainLogo from "./components/MainLogo";
import PrizeCard from "./components/PrizeCard";
import Section from "./components/LeaderboardSection";
import ShuffleButton from "./components/ShuffleButton";
import VideoCard from "./components/VideoCard";
import XPProfile from "./components/XpProfile";
const trophyImage = {
  gold: "/gold.png",
  silver: "/silver.png",
  bronze: "/bronze.png",
};

function App() {
  return (
    <section className="w-full min-h-dvh flex flex-col gap-y-10 justify-center items-center bg-[#141022] py-10">
      <ShuffleButton />
      <XPProfile
        name="Jan Ortego"
        xpPoints={323}
        avatarUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/component-002-y2LBtc6REVMEha6XRbYiEwlCgVzxXB.png"
      />

      <div className="max-w-xs">
        <MainLogo />
      </div>

      <div className="w-full py-10 flex flex-col justify-center items-center bg-black gap-2">
        <PrizeCard
          prizeAmount={50000}
          username="Testusername"
          balance={500}
          trophyImage={trophyImage.gold}
        />
        <PrizeCard
          prizeAmount={50000}
          username="Red***"
          balance={2800390.38}
          trophyImage={trophyImage.silver}
        />
        <PrizeCard
          prizeAmount={50000}
          username="Red***"
          balance={2800390.38}
          trophyImage={trophyImage.bronze}
        />
      </div>
      <div className="flex gap-4 px-8">
        <VideoCard
          title="I would like to order lorem ipsum sit"
          viewCount={697}
          duration="01:08:10"
          thumbnailUrl="/thumbnail.png"
          videoUrl="#"
        />
        <VideoCard
          title="I would like to order lorem ipsum sit"
          viewCount={697}
          duration="01:08:10"
          thumbnailUrl="/thumbnail.png"
          videoUrl="#"
        />
        <VideoCard
          title="I would like to order lorem ipsum sit"
          viewCount={697}
          duration="01:08:10"
          thumbnailUrl="/thumbnail.png"
          videoUrl="#"
        />
        <VideoCard
          title="I would like to order lorem ipsum sit"
          viewCount={697}
          duration="01:08:10"
          thumbnailUrl="/thumbnail.png"
          videoUrl="#"
        />
      </div>
      <HeroSection />
      <Section />
    </section>
  );
}

export default App;
