import Image from "next/image";

interface IndustryTileProps {
  title: string;
  image: string;
  featured?: boolean;
  wide?: boolean;
  className?: string;
}

export function IndustryTile({
  title,
  image,
  featured = false,
  wide = false,
  className = "",
}: IndustryTileProps) {
  return (
    <div
      className={`itile ${featured ? "itile-featured" : ""} ${wide ? "itile-wide" : ""} ${className}`}
    >
      <div className="itile-img-wrap">
        <Image
          src={image}
          alt=""
          width={wide ? 1600 : 800}
          height={wide ? 400 : featured ? 1000 : 600}
          className="itile-img"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          loading="lazy"
        />
        <div className="itile-wash" aria-hidden />
      </div>
      <div className="itile-label">
        <span className="itile-name">{title}</span>
      </div>
    </div>
  );
}
