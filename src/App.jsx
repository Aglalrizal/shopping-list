import { useState } from "react";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import AddInput from "./components/AddInput";
import Info from "./components/Info";
import Todos from "./components/Todos";
import Empty from "./components/Empty";
function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([
    { title: "Susu Ultra", count: 1 },
    { title: "Mangga", count: 1 },
    { title: "Semangka", count: 1 },
  ]);
  const handleAdditionCount = (index) => {
    const newTodos = [...todos];
    newTodos[index].count += 1;
    setTodos(newTodos);
  };
  const handleSubstractionCount = (index) => {
    const newTodos = [...todos];
    if (newTodos[index].count > 0) newTodos[index].count -= 1;
    else newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  const handleAddItem = (e) => {
    e.preventDefault();
    if (value.trim() == "") return alert("Isi dulu inputnya tjuy");
    const newTodos = [...todos, { title: value, count: 1 }];
    setTodos(newTodos);
    setValue("");
  };
  const handleClearList = () => {
    confirm("Apakah kamu yakin ingin menghapus semua item?") && setTodos([]);
  };
  const totalCount = todos.reduce((total, item) => total + item.count, 0);
  return (
    <>
      <Navbar></Navbar>
      <Container>
        <AddInput
          onSubmit={handleAddItem}
          onInput={(e) => setValue(e.target.value)}
          value={value}
        ></AddInput>
        <Info
          total={todos.length}
          totalCount={totalCount}
          onClick={handleClearList}
        ></Info>
        {todos.length ? (
          <Todos
            todos={todos}
            onSubstraction={(index) => handleSubstractionCount(index)}
            onAddition={(index) => handleAdditionCount(index)}
          ></Todos>
        ) : (
          <Empty></Empty>
        )}
      </Container>
    </>
  );
}

export default App;
