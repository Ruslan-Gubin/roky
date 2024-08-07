import Image from "next/image";

import styles from "./ImageMain.module.scss";

type Props = {
  src: string;
  width?: string | number;
  height?: string | number;
  priority?: boolean;
  borderRadius?: number | string;
  alt: string;
  className?: string;
  sizes?: string;
  classImg?: string;
  position?:
    | "absolute"
    | "-moz-initial"
    | "-webkit-sticky"
    | "fixed"
    | "inherit"
    | "initial"
    | "relative"
    | "revert"
    | "revert-layer"
    | "static"
    | "sticky"
    | "unset";
};

const ImageMain = ({
  sizes = "width:100%",
  className,
  src,
  height,
  width,
  priority,
  borderRadius,
  alt,
  classImg,
  position,
}: Props) => {
  const stylesRoot = {
    height,
    width,
    borderRadius,
    position: position ? position : "relative",
  };

  return (
    <div
      className={className ? `${styles.image} ${className}` : styles.image}
      style={stylesRoot}
    >
      <Image
        src={src}
        alt={alt}
        priority={priority}
        fill
        sizes={sizes}
        className={classImg ? `${styles.img} ${classImg}` : styles.img}
      />
    </div>
  );
};

export { ImageMain };
