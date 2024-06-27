import Image from "next/image";

type StackProps = {
  technology: string;
};

const Stack: React.FC<StackProps> = ({ technology }) => {
  return (
    <div
      className="about__stack__item"
      style={{ position: "relative", width: "100%", height: "100px" }}
    >
      <Image
        src={`/stack/${technology}.png`}
        alt="stack"
        layout="fill"
        objectFit="contain"
        sizes="100vw"
      />
    </div>
  );
};

export default Stack;
