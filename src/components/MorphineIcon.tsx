import React from "react";

interface MorphineIconProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  size?: number;
}

export const MorphineIcon: React.FC<MorphineIconProps> = ({ size = 24, className, ...props }) => {
  return (
    <img
      src="https://cdn.discordapp.com/attachments/1510226335006724119/1511136544713347135/download.png?ex=6a1f5b13&is=6a1e0993&hm=0517eb6b34949a05a0696a1e01db5a0d4a111c9f5ad7377cb6e2de6827876f7a&"
      alt="Morphine Logo"
      width={size}
      height={size}
      style={{ width: size, height: size, objectFit: "contain" }}
      className={className}
      referrerPolicy="no-referrer"
      {...props}
    />
  );
};
