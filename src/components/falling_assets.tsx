import { useEffect, useState } from "react";
import "../styles/falling_assets.scss";

type FallingAssetsProps = {
  isEnabled: boolean;
};

const FallingAssets: React.FC<FallingAssetsProps> = ({ isEnabled }) => {
  // Definiujemy typ Asset jako obiekt z id i left
  type Asset = {
    id: number;
    left: number;
  };

  // Inicjujemy stan assets jako tablica Asset
  const [assets, setAssets] = useState<Asset[]>([]);

  useEffect(() => {
    if (!isEnabled) {
      setAssets([]);
      return;
    }

    const intervalId = setInterval(() => {
      setAssets((prevAssets) => [
        ...prevAssets,
        {
          id: Math.random(),
          left: Math.random() * 100,
        },
      ]);
    }, 500);

    return () => clearInterval(intervalId);
  }, [isEnabled]);

  return (
    <div className="falling-assets">
      {assets.map((asset) => (
        <div
          key={asset.id}
          className="falling-asset"
          style={{ left: `${asset.left}%` }}
        ></div>
      ))}
    </div>
  );
};

export default FallingAssets;
