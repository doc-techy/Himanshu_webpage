import Image from "next/image";

type ServiceIconProps = {
  title: string;
  iconSrc?: string;
  iconPosition?: string;
  size?: "sm" | "lg";
  className?: string;
};

const sizeClasses = {
  sm: "w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 p-2 md:p-2.5",
  lg: "w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 p-2.5 md:p-3",
};

const ServiceIcon = ({
  title,
  iconSrc,
  iconPosition,
  size = "sm",
  className = "",
}: ServiceIconProps) => {
  return (
    <div
      className={`${sizeClasses[size]} aspect-square shrink-0 rounded-xl border border-white/40 bg-white shadow-md ring-1 ring-[#d5a028]/20 flex items-center justify-center overflow-hidden ${className}`}
    >
      {iconSrc ? (
        <Image
          src={iconSrc}
          alt={title}
          width={96}
          height={96}
          className="h-full w-full object-contain"
        />
      ) : (
        <div
          className="h-full w-full bg-no-repeat"
          style={{
            backgroundImage: "url('/images/icons.jpeg')",
            backgroundSize: "300%",
            backgroundPosition: iconPosition,
          }}
        />
      )}
    </div>
  );
};

export default ServiceIcon;
