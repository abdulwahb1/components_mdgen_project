interface PrizeCardProps {
  prizeAmount: number;
  username: string;
  balance: number;
  trophyImage: string;
  isTopPrize?: boolean;
  className?: string;
}

export default function PrizeCard({
  prizeAmount,
  username,
  balance,
  trophyImage,
  className = "",
}: PrizeCardProps) {
  return (
    <div className={`relative min-w-[32rem] max-w-lg ${className}`}>
      <div
        className="relative flex items-center gap-6 rounded-2xl p-6 
      shadow-inner hover:shadow-[inset_0_0_0_4px_rgba(6,11,33,0.6)] bg-gradient-to-br from-[#060b21] hover:to-[#0e142F] hover:transition-all hover:duration-300 border border-[#E1BBFB] border-opacity-0 hover:border-opacity-100"
      >
        <div className="relative min-h-24 max-h-24 min-w-24 max-w-24 flex items-center">
          <img
            src={trophyImage || "/placeholder.svg"}
            alt="Trophy"
            width={80}
            height={90}
            className="image-class"
          />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-2xl font-bold text-white">
            Prize: ${prizeAmount.toLocaleString()}
          </h3>
          <span className={`text-lg text-[#E1BBFB]`}>{username}</span>
          <span className="text-lg text-white">
            $
            {balance.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </span>
        </div>
      </div>
    </div>
  );
}
