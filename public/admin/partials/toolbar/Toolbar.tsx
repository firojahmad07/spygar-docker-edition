import { IToolbarProps } from './types';

const Toolbar = ({ children }: IToolbarProps) => {
  return (
    <div className="flex flex-wrap items-center lg:items-end justify-between gap-5 mb-5 lg:mb-7.5">
      {children}
    </div>
  );
};

export { Toolbar };
