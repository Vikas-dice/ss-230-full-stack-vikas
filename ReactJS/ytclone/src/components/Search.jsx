import { useState } from "react";
import { InputGroup, Form, Button } from "react-bootstrap";

const Search = ({ searchHandler }) => {
  const [search, setSearch] = useState("");
  return (
    <InputGroup className="mt-3 mb-3">
      <Form.Control
        placeholder="Recipient's username"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button variant="primary" onClick={(e) => searchHandler(search)}>
        Search
      </Button>
    </InputGroup>
  );
};

export default Search;
