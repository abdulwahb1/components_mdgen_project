interface XPProfileProps {
  name: string;
  xpPoints: number;
  avatarUrl: string;
  className?: string;
}

export default function XPProfile({
  name,
  xpPoints,
  avatarUrl,
  className = "",
}: XPProfileProps) {
  return (
    <div className="relative p-[2px] rounded-full gradient-border">
      <div
        className={`flex items-center gap-3 rounded-full p-2 pr-6 text-white bg-black ${className}`}
      >
        <div className="relative h-12 w-12 overflow-hidden rounded-full">
          <img
            src={avatarUrl || "/placeholder.svg"}
            alt={`${name}'s profile picture`}
            className="object-cover image-class"
          />
        </div>
        <div className="flex items-center gap-3">
          <span className="text-lg font-semibold">{name}</span>
          <div className="h-10 w-[2px] bg-white/20" />
          <span className="font-bold">{xpPoints} XP points</span>
        </div>
      </div>
    </div>
  );
}
