import { useState } from "react";
import Input from "./components/Input";
import List from "./components/List";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

const App = () => {
  const [list, setList] = useState([
    { id: 1, value: "Tea" },
    { id: 2, value: "Cofffe" },
  ]);
  const [beforeUpdateParticular, setBeforeUpdateParticularItem] = useState("");
  const onAddItem = (item) => {
    const newarr = [...list];
    newarr.push({ id: Date.now(), value: item });
    setList(newarr);
  };

  const onDeleteItem = (id) => {
    const updatedArray = list.filter((item) => item.id !== id);
    setList(updatedArray);
  };

  const beforeUpdateItem = (id) => {
    const item = list.filter((item) => item.id === id);

    setBeforeUpdateParticularItem(item[0]);
  };

  return (
    <Container>
      <Input btnHandler={onAddItem} updateItem={beforeUpdateParticular} />
      <List
        list={list}
        onDeleteHandler={onDeleteItem}
        beforeUpdateItem={beforeUpdateItem}
      />
    </Container>
  );
};

export default App;
