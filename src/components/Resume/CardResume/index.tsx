import * as S from "./style";

type CardProps = {
  title: string;
  Icon: any;
  value: number;
  className?: string
};

export const CardResume = ({ title, Icon, value, className}: CardProps) => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Title className={`${className}`}>{title}</S.Title>
        <Icon className="text-black border-2 border-blue-500 rounded-2xl" size={32} />
      </S.Wrapper>
      <S.Paragrafo value={value}>R$ {value}</S.Paragrafo>
    </S.Container>
  );
};
