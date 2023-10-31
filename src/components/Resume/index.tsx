import { ArrowDown, ArrowUp, CurrencyDollar } from "phosphor-react";
import { CardResume } from "./CardResume";

type ResumeProps = {
  entrada: number;
  saida: number;
  total: number;
};

export const Resume = ({ entrada, saida, total }: ResumeProps) => {
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row items-center gap-5 p-2 justify-center">
        <div className="block">
          <CardResume title="Entrada" Icon={ArrowUp} value={entrada} />
        </div>
        <div className="block">
          <CardResume title="Saida" Icon={ArrowDown} value={saida} />
        </div>
        <div className="block">
          <CardResume title="Total" Icon={CurrencyDollar} value={total} />
        </div>
      </div>
    </div>
  );
};
