import { ArrowDown, ArrowUp, CurrencyDollar } from "phosphor-react";
import { CardResume } from "./CardResume";
import * as S from "./style";

type ResumeProps = {
  entrada: number;
  saida: number;
  total: number;
};

export const Resume = ({ entrada, saida, total }: ResumeProps) => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Box>
          <CardResume title="Entrada" Icon={ArrowUp} value={entrada} />
        </S.Box>
        <S.Box>
          <CardResume title="Saida" Icon={ArrowDown} value={saida} />
        </S.Box>
        <S.Box>
          <CardResume title="Total" Icon={CurrencyDollar} value={total} className={`${total < 0 ? 'text-red-500'  : 'text-green-500'}`}/>
        </S.Box>
      </S.Wrapper>
    </S.Container>
  );
};
