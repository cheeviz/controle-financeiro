interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => {
  return (
    <div className="bg-blue-500 w-full h-32 pt-12">
      <h1 className="text-center text-3xl font-bold uppercase">{title}</h1>
    </div>
  );
};
