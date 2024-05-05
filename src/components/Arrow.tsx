import { useMemo } from "react";

type Props = {
  className: string;
  label: string;
  onClick: () => void;
};

const Arrow = ({ className: incomingClassName, label, onClick }: Props) => {
  const className = useMemo(() => {
    return `absolute top-0 h-full flex items-center z-10 px-2 w-fit ${incomingClassName}`;
  }, [incomingClassName]);

  return (
    <div className={className}>
      <span
        className="text-secondary cursor-pointer capitalize"
        onClick={onClick}
      >
        {label}
      </span>
    </div>
  );
};

export default Arrow;
