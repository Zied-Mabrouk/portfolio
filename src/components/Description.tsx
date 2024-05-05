type Props = {
  number: string;
  label: string;
};

const Description = ({ number, label }: Props) => {
  return (
    <div className="flex flex-col pt-8">
      <div className="relative w-fit mb-2">
        <h1 className="text-5xl">{number}</h1>
        <span className="absolute -top-3 -right-3 text-xl">+</span>
      </div>
      <h2 className="text-gray-500">{label}</h2>
    </div>
  );
};

export default Description;
