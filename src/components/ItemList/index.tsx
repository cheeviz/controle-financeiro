import { Item } from "../Item";

export const ItemList = ({ itens, setItens }: any) => {
  const onDelete = (ID: any) => {
    const newArray = itens.filter((transaction: any) => transaction.id !== ID);
    setItens(newArray);
    localStorage.setItem("transactions", JSON.stringify(newArray));
  };

  return (
    <table className="table-auto w-full">
      <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
        <tr>
          <th className="p-2">
            <div className="text-black font-semibold text-left">Descrição</div>
          </th>
          <th className="p-2">
            <div className="text-black font-semibold text-left">Valor</div>
          </th>
          <th className="p-2">
            <div className="text-black font-semibold text-left">Tipo</div>
          </th>
          <th className="p-2"></th>
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
