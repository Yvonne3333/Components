import React from "react";

interface TableProps<T> {
  Header: any[];
  body: T[];
  renderBodyRow: (item: T, index: number) => React.ReactNode;
}

const Table = <T,>({ Header, body, renderBodyRow }: TableProps<T>) => {
  return (
    <div className="bg-white flex flex-col gap-3 w-full shadow-lg px-3 py-3">
      <div className={`w-full mt-3`}>
        <table className="content-table">
          <thead className="border">
            <tr>
              {Header.map((item: any, i: number) => (
                <th className="bg-white text-[13px]" key={i}>
                  {item.desc}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white shadow-sm">
            {body.map((item: T, i: number) => renderBodyRow(item, i))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
