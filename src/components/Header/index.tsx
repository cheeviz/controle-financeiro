interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => {
  return (
    <div className="bg-green-600 w-[500px] h-32 pt-12 ml-auto mr-auto m-5 rounded-3xl">
      <h1 className="text-center text-3xl font-bold uppercase">{title}</h1>
    </div>
  );
};
