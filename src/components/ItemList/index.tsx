import { Item } from "./Item";

export const ItemList = ({ itens, setItens }: any) => {
  const onDelete = (ID: any) => {
    const newArray = itens.filter((transaction: any) => transaction.id !== ID);
    setItens(newArray);
    localStorage.setItem("transactions", JSON.stringify(newArray));
  };

  return (
    <table className="w-full overflow-y-auto divide-y divide-black">
      <thead className="text-base bg-white">
        <tr>
          <th className="text-left text-black p-2">Descrição</th>
          <th className="text-left text-black p-2">Valor</th>
          <th className="text-left text-black p-2">Tipo</th>
          <th className="text-left text-black p-2">Ação</th>
        </tr>
      </thead>
      <tbody className="text-base divide-y bg-white divide-black">
        {itens?.map((item: any, index: any) => (
          <Item key={index} item={item} onDelete={onDelete} />
        ))}
      </tbody>
    </table>
  );
};
