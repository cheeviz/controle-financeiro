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
          <CardResume
            title="Entrada"
            Icon={ArrowUp}
            IconColor="text-green-500 border-2 border-green-500 rounded-2xl"
            value={entrada}
          />
        </S.Box>
        <S.Box>
          <CardResume
            title="Saida"
            Icon={ArrowDown}
            IconColor="text-red-500 border-2 border-red-500 rounded-2xl"
            value={saida}
          />
        </S.Box>
        <S.Box>
          <CardResume
            title="Total"
            Icon={CurrencyDollar}
            bgColor={`${total < 0 ? "bg-red-500" : "bg-green-500"}`}
            IconColor="text-white"
            textColor="text-white"
            titleColor="text-white"
            value={total}
          />
        </S.Box>
      </S.Wrapper>
    </S.Container>
  );
};
