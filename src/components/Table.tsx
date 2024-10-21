import React, { useMemo } from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Table = ({ children, className: incomingClassName = '' }: Props) => {
  const className = useMemo(
    () =>
      `border border-white flex flex-col rounded-lg h-fit ${incomingClassName}`,
    [incomingClassName],
  );
  return (
    <div className={className}>
      <div className="border-b border-accent3 py-2 flex gap-1 px-4">
        <span className="rounded-full bg-accent4 h-3 w-3 transition-all scale-100 hover:scale-110 cursor-pointer"></span>
        <span className="rounded-full bg-accent2 h-3 w-3 transition-all scale-100 hover:scale-110 cursor-pointer"></span>
        <span className="rounded-full bg-accent1 h-3 w-3 transition-all scale-100 hover:scale-110 cursor-pointer"></span>
      </div>
      {children}
    </div>
  );
};

export default Table;
