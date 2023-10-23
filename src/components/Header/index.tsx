type HeaderProps = {
  title: string;
};

export const Header = ({ title }: HeaderProps) => {
  return <div className="absolute bg-[#37bbf8] w-full h-64 -z-40" />;
};
