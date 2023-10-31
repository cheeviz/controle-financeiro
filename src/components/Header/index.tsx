type HeaderProps = {
  title: string;
};

export const Header = ({ title }: HeaderProps) => {
  return (
    <div className="absolute bg-[#37bbf8] w-full h-64 -z-40">
      <h1 className="text-center mt-3 text-3xl">{title}</h1>
    </div>
  );
};
