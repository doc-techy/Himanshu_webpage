import Image from "next/image";

type ServiceIconProps = {
  title: string;
  iconSrc?: string;
  iconPosition?: string;
  imageScale?: number;
  size?: "sm" | "lg";
  className?: string;
};

const DEFAULT_IMAGE_SCALE = 1.1;
export const ILIZAROV_IMAGE_SCALE = 1.2;

const resolveImageScale = (iconSrc?: string, imageScale?: number) => {
  if (imageScale !== undefined) return imageScale;
  if (iconSrc?.includes("ilizarov-technique-icon")) return ILIZAROV_IMAGE_SCALE;
  return DEFAULT_IMAGE_SCALE;
};

const boxSizeClasses = {
  sm: "w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24",
  lg: "w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36",
};

const paddingClasses = {
  sm: { image: "p-2", sprite: "p-2 md:p-2.5" },
  lg: { image: "p-2.5", sprite: "p-2.5 md:p-3" },
};

const ServiceIcon = ({
  title,
  iconSrc,
  iconPosition,
  imageScale,
  size = "sm",
  className = "",
}: ServiceIconProps) => {
  const resolvedScale = resolveImageScale(iconSrc, imageScale);
  const padding =
    iconSrc && resolvedScale > DEFAULT_IMAGE_SCALE
      ? size === "lg"
        ? "p-1.5"
        : "p-1.5"
      : iconSrc
        ? paddingClasses[size].image
        : paddingClasses[size].sprite;

  return (
    <div
      className={`${boxSizeClasses[size]} ${padding} aspect-square shrink-0 rounded-xl border border-white/40 bg-white shadow-md ring-1 ring-[#d5a028]/20 flex items-center justify-center overflow-hidden ${className}`}
    >
      {iconSrc ? (
        <Image
          src={iconSrc}
          alt={title}
          width={96}
          height={96}
          className="h-full w-full object-contain"
          style={{ transform: `scale(${resolvedScale})` }}
        />
      ) : (
        <div
          className="h-full w-full bg-no-repeat"
          style={{
            backgroundImage: "url('/images/icons.jpeg')",
            backgroundSize: "310%",
            backgroundPosition: iconPosition,
          }}
        />
      )}
    </div>
  );
};

export default ServiceIcon;
