import React, { ReactNode, useCallback, useMemo, useState } from 'react';

type Props = {
  children: ReactNode;
};

const Tooltip = ({ children }: Props) => {
  const [clicked, setClicked] = useState(false);

  const [onClick, onUnhover] = useMemo(
    () => [
      () => {
        setClicked(true);
      },
      () => {
        setClicked(false);
      },
    ],
    [],
  );
  return (
    <div
      className="w-fit flex relative justify-center group"
      onClick={onClick}
      onMouseLeave={onUnhover}
    >
      {children}
      <div className="absolute bottom-full text-sm p-2 bg-black bg-opacity-50 text-white rounded-full hidden group-hover:flex whitespace-nowrap">
        {clicked ? 'Copied ✅' : 'Copy'}
      </div>
    </div>
  );
};

export default Tooltip;
