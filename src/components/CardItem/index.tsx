export const CardItem = ({ title, Icon, value }: any) => {
  return (
    <div className="w-[320px] h-[100px] rounded bg-[#e2e2e2]">
      <div className="flex items-center justify-around p-2">
        <h1 className="text-black text-center font-medium text-2xl uppercase">
          {title}
        </h1>
        <Icon
          className="text-black border-2 border-green-500 rounded-2xl"
          size={32}
        />
      </div>
      <p className="text-black text-center text-3xl font-bold p-2">{value}</p>
    </div>
  );
};
