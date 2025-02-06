import MainLogo from "./components/MainLogo";
import PrizeCard from "./components/PrizeCard";
import ShuffleButton from "./components/ShuffleButton";
import VideoCard from "./components/VideoCard";
import XPProfile from "./components/XpProfile";

function App() {
  return (
    <section className="w-full min-h-dvh flex flex-col gap-y-10 justify-center items-center bg-[#141022]">
      <ShuffleButton />
      <XPProfile
        name="Jan Ortego"
        xpPoints={323}
        avatarUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/component-002-y2LBtc6REVMEha6XRbYiEwlCgVzxXB.png"
      />
      <MainLogo />
      <div className="w-full py-10 flex flex-col justify-center items-center bg-black">
        <PrizeCard
          prizeAmount={50000}
          username="Red***"
          balance={2800390.38}
          trophyVariant="gold"
        />
        <PrizeCard
          prizeAmount={50000}
          username="Red***"
          balance={2800390.38}
          trophyVariant="silver"
        />
        <PrizeCard
          prizeAmount={50000}
          username="Red***"
          balance={2800390.38}
          trophyVariant="bronze"
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
    </section>
  );
}

export default App;
