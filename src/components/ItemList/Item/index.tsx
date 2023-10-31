import { ArrowDown, ArrowUp, Trash } from "phosphor-react";

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
    <tr>
      <td className="text-black p-2">{item.description}</td>
      <td className="p-2">
        {item.expense ? (
          <h1 className="text-red-500">- R$ {item.amount}</h1>
        ) : (
          <h1 className="text-green-500">+ R$ {item.amount}</h1>
        )}
      </td>
      <td className="p-2">
        {item.expense ? (
          <ArrowDown className="text-black border-2 border-red-500 rounded-full" size={32} />
        ) : (
          <ArrowUp className="text-black border-2 border-green-500 rounded-full" size={32} />
        )}
      </td>
      <td className="p-2">
        <Trash
          className="text-red-500 focus:outline-none hover:scale-110 transition-transform cursor-pointer"
          onClick={() => onDelete(item.id)}
          size={32}
        />
      </td>
    </tr>
  );
};
