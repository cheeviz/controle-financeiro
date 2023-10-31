type CardProps = {
  title: string;
  Icon: any;
  value: number;
};

export const CardResume = ({ title, Icon, value }: CardProps) => {
  return (
    <div className="w-[320px] h-[120px] flex gap-2 flex-col items-center justify-center rounded bg-white drop-shadow-lg">
      <div className="w-full flex items-center gap-2 justify-between px-5">
        <h1 className="text-black text-center font-medium text-2xl uppercase">{title}</h1>
        <Icon className="text-black" size={32} />
      </div>
      <p className="text-black text-center text-3xl font-bold p-2">R$ {value}</p>
    </div>
  );
};
