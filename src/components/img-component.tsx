import React from "react";
import Image from 'next/image'

interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  rounded?: "none" | "sm" | "md" | "lg" | "full";
  shadow?: "none" | "sm" | "md" | "lg" | "xl";
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
  priority?: boolean;
  quality?: number;
  layout?: "fixed" | "intrinsic" | "responsive" | "fill";
}

const ImageComponent: React.FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  className = "",
  rounded = "none",
  shadow = "none",
  objectFit = "cover",
  priority = false,
  quality = 75, //el rango de quality es max hasta 100
  layout = "responsive",
}) => {
  const roundedClasses = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
  };

  const shadowClasses = {
    none: "shadow-none",
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
    xl: "shadow-xl",
  };

  const objectFitClasses = {
    contain: "object-contain",
    cover: "object-cover",
    fill: "object-fill",
    none: "object-none",
    "scale-down": "object-scale-down",
  };

  return (
    <div
      className={`${roundedClasses[rounded]} ${shadowClasses[shadow]} overflow-hidden ${className}`}
      style={{ width, height }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`${objectFitClasses[objectFit]}`}
        priority={priority}
        quality={quality}
        layout={layout}
      />
    </div>
  );
};

export default ImageComponent;