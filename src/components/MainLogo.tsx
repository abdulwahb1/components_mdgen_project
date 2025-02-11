import Logo from "/logoNoGlow.svg";
const MainLogo = () => {
  return (
    <div className="flex items-center relative">
      <div className="flex gap-4 relative">
        {/* Glow Effect Container */}
        <div className="absolute inset-0 z-10 blur-[8px] glow-shadow"></div>

        {/* Image */}
        <img src={Logo} alt="" className="relative z-20" />

        {/* Text */}
        <span className="font-saira text-xl font-bold text-white relative z-10">
          On-line
        </span>
      </div>
    </div>
  );
};

export default MainLogo;
