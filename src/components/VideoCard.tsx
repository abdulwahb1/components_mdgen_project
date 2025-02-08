interface VideoPreviewProps {
  title: string;
  viewCount: number;
  duration: string;
  thumbnailUrl: string;
  videoUrl: string;
  className?: string;
}

export default function VideoCard({
  title,
  viewCount,
  duration,
  thumbnailUrl,
  videoUrl,
  className = "",
}: VideoPreviewProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-[28px] ${className} w-1/2`}
      style={{
        background: "linear-gradient(to top left, #151B36 0%, #060B21 30%)",
      }}
    >
      <div className="absolute inset-0 rounded-[28px]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1E1B3D]/50 to-transparent blur-xl" />
      </div>

      <div className="relative flex flex-col gap-4 p-4">
        {/* Timer */}
        <div className="absolute left-5 top-5 z-10 rounded-lg bg-black/70 px-3 py-1 font-mono text-white text-sm">
          {duration}
        </div>

        {/* View count */}
        <div className="absolute left-5 bottom-[6rem] z-10 rounded-lg bg-black/70 px-2 py-1 font-mono text-white text-xs">
          <span>{viewCount.toLocaleString()}</span>
          <span> views</span>
        </div>

        {/* Thumbnail */}
        <div className="relative aspect-video w-full overflow-hidden rounded-lg">
          <img
            src={thumbnailUrl || "/placeholder.svg"}
            alt={title}
            className="object-cover"
          />
        </div>

        {/* Title and Play button */}
        <div className="flex items-start justify-between ml-1">
          <h2 className="text-lg text-white">{title}</h2>
          <a
            href={videoUrl}
            className="flex items-center gap-2 text-[#DFB9F8] hover:text-purple-300 transition-colors text-base  mr-3 underline whitespace-nowrap font-segoe-ui pb-5"
          >
            <span>Play video</span>
          </a>
        </div>
      </div>
    </div>
  );
}
