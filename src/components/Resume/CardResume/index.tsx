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

export const CardResume = ({ title, Icon, value, titleColor, IconColor, textColor, bgColor }: CardProps) => {
  return (
    <S.Container bgColor={bgColor}>
      <S.Wrapper>
        <S.Title titleColor={titleColor}>{title}</S.Title>
        <Icon className={`${IconColor}`} size={32} />
      </S.Wrapper>
      <S.Paragrafo textColor={textColor}>R$ {value}</S.Paragrafo>
    </S.Container>
  );
};
