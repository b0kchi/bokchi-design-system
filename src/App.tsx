import "./App.scss";
import Checkbox from "./components/Checkbox";

function App() {
  const mockupList = [
    { name: "apple", value: "apple", id: "1", label: "apple" },
    { name: "banana", value: "banana", id: "2", label: "banana" },
    { name: "orange", value: "orange", id: "3", label: "orange" },
    { name: "mango", value: "mango", id: "4", label: "mango" },
  ];

  return (
    <>
      <h1>TEST</h1>
      <Checkbox items={mockupList} />
    </>
  );
}

export default App;
