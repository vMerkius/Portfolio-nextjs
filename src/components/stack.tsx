import Image from "next/image";

type StackProps = {
  technology: string;
  size: number;
};

const Stack: React.FC<StackProps> = ({ technology, size }) => {
  return (
    <div
      className="about__desc__left__stack__item"
      style={{ position: "relative", width: "10%", height: size }}
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
