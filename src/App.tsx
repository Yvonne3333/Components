import Table from "./components/Table";

const App = () => {
  // This is where you set the header keys for table
  const headerData = [
    {
      id: 1,
      desc: "NAME",
    },
    {
      id: 2,
      desc: "TITLE",
    },
  ];
  // This is a mock data from an api
  const bodyData = [
    {
      id: 1,
      name: "Yvonne",
      title: "disturbance",
    },
    {
      id: 2,
      name: "Yvonne",
      title: "wahala",
    },
  ];
  return (
    <div>
      <Table
        Header={headerData}
        body={bodyData}
        renderBodyRow={(item, index) => (
          <tr
            key={index}
            className={`text-[12px] ${
              index % 2 === 0 ? "bg-gray-100" : "bg-gray-300"
            }`}
          >
            <td className="whitespace-normal">{item.name}</td>
            <td className="whitespace-normal">{item.title}</td>
          </tr>
        )}
      />
    </div>
  );
};

export default App;
