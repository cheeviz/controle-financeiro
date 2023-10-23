import * as S from "./style";

type HeaderProps = {
  title: string;
};

export const Header = ({ title }: HeaderProps) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};
