import { ArrowDown, ArrowUp, CurrencyDollar } from "phosphor-react";
import { CardItem } from "../CardItem";

export const Resume = ({ entrada, saida, total }: any) => {
  return (
    <div className="w-[1000px] ml-auto mr-auto">
      <main className="flex items-center gap-5 p-2 justify-center">
        <div className="">
          <CardItem title="Entrada" Icon={ArrowUp} value={`R$ ${entrada}`} />
        </div>
        <div className="">
          <CardItem title="Saida" Icon={ArrowDown} value={`R$ ${saida}`} />
        </div>
        <div className="">
          <CardItem title="Total" Icon={CurrencyDollar} value={`R$ ${total}`} />
        </div>
      </main>
    </div>
  );
};
