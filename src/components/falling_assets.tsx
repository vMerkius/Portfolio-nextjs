import { useEffect, useState } from "react";
import "../styles/falling_assets.scss";

type FallingAssetsProps = {
  isEnabled: boolean;
};

const FallingAssets: React.FC<FallingAssetsProps> = ({ isEnabled }) => {
  type Asset = {
    id: number;
    left: number;
    image: string;
  };

  const [assets, setAssets] = useState<Asset[]>([]);
  const images = [
    "/assets/partyhat.png",
    "/assets/emoji.png",
    "/assets/present.png",
  ];

  useEffect(() => {
    if (!isEnabled) {
      setAssets([]);
      return;
    }

    const intervalId = setInterval(() => {
      const randomImage = images[Math.floor(Math.random() * images.length)];
      setAssets((prevAssets) => [
        ...prevAssets,
        {
          id: Math.random(),
          left: Math.random() * 100,
          image: randomImage,
        },
      ]);
    }, 300);

    return () => clearInterval(intervalId);
  }, [isEnabled]);

  return (
    <div className="falling-assets">
      {assets.map((asset) => (
        <div
          key={asset.id}
          className="falling-asset"
          style={{
            left: `${asset.left}%`,
            backgroundImage: `url(${asset.image})`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default FallingAssets;
