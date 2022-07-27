import { ArrowDown, ArrowUp, CurrencyDollar } from "phosphor-react";
import { CardItem } from "../CardItem";

export const Resume = ({ entrada, saida, total }: any) => {
  return (
    <div className="w-[1200px] ml-auto mr-auto">
      <main className="flex items-center justify-center">
        <div className="m-2">
          <CardItem title="Entrada" Icon={ArrowUp} value={`R$ ${entrada}`} />
        </div>
        <div className="m-2">
          <CardItem title="Saida" Icon={ArrowDown} value={`R$ ${saida}`} />
        </div>
        <div className="m-2">
          <CardItem title="Total" Icon={CurrencyDollar} value={`R$ ${total}`} />
        </div>
      </main>
    </div>
  );
};
