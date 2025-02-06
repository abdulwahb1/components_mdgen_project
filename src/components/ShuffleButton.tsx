export default function ShuffleButton() {
  return (
    <div className="relative inline-block rounded-lg border-2 border-[#E5B5E7] hover:scale-105">
      {/* Extended glow effect */}
      <div className="absolute inset-0 rounded-sm bg-[#E5B5E7] opacity-20" />
      <div className="absolute -right-[-0.5rem] top-[1.5rem] h-16 w-16 -translate-y-1/2 z-20">
        <img
          src="/pokerchip.png"
          alt="Poker chip"
          width={64}
          height={64}
          className="object-contain"
        />
      </div>
      <button className="group relative flex items-center rounded-md px-6 py-3 pr-20 transition-all ">
        {/* Button content */}
        <span className="relative text-lg font-bold text-[#E1BBFB] font-segoe-ui">
          Play on Shuffle
        </span>

        {/* Chip icon */}
      </button>
    </div>
  );
}
