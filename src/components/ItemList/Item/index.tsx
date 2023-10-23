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

export const Item = ({ item, onDelete }: any) => {
  return (
    <tr>
      <td>{item.description}</td>
      <td>
        {item.expense ? (
          <h1 className="text-red-500">- R$ {item.amount}</h1>
        ) : (
          <h1 className="text-green-500">+ R$ {item.amount}</h1>
        )}
      </td>
      <td>
        {item.expense ? (
          <ArrowDown className="text-black border-2 border-red-500 rounded-full" size={32} />
        ) : (
          <ArrowUp className="text-black border-2 border-green-500 rounded-full" size={32} />
        )}
      </td>
      <td>
        <Trash
          className="text-red-500 focus:outline-none hover:scale-110 transition-transform cursor-pointer"
          onClick={() => onDelete(item.id)}
          size={32}
        />
      </td>
    </tr>
  );
};
