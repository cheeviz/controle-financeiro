import * as S from "./style";

type CardProps = {
  title: string;
  Icon: any;
  value: number;
  titleColor?: string;
  IconColor?: string;
  textColor?: string;
  bgColor?: string;
};

export const CardResume = ({ title, Icon, value, titleColor, IconColor, textColor }: CardProps) => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>{title}</S.Title>
        <Icon className={`${IconColor}`} size={32} />
      </S.Wrapper>
      <S.Paragrafo>R$ {value}</S.Paragrafo>
    </S.Container>
  );
};
