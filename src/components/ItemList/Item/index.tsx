import { ArrowDown, ArrowUp, Trash } from "phosphor-react";
import * as S from "./style";

type ItemProps = {
  item: {
    id: number;
    description: string;
    amount: number;
    expense: boolean;
  };
  onDelete: (ID: number) => void;
};

export const Item = ({ item, onDelete }: ItemProps) => {
  return (
    <S.Tr>
      <S.Td>{item.description}</S.Td>
      <S.Td>
        {item.expense ? (
          <S.Title className="text-red-500">- R$ {item.amount}</S.Title>
        ) : (
          <S.Title className="text-green-500">+ R$ {item.amount}</S.Title>
        )}
      </S.Td>
      <S.Td>
        {item.expense ? (
          <ArrowDown className="text-black border-2 border-red-500 rounded-full" size={32} />
        ) : (
          <ArrowUp className="text-black border-2 border-green-500 rounded-full" size={32} />
        )}
      </S.Td>
      <S.Td>
        <Trash
          className="text-red-500 focus:outline-none hover:scale-110 transition-transform cursor-pointer"
          onClick={() => onDelete(item.id)}
          size={32}
        />
      </S.Td>
    </S.Tr>
  );
};
