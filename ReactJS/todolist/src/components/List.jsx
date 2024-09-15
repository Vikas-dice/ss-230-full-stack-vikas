import ListItem from "./ListItem";

const List = (props) => {
  return (
    <>
      {props.list.map((item, idx) => (
        <ListItem
          key={item.id}
          item={item}
          onDeleteHandler={props.onDeleteHandler}
        />
      ))}
    </>
  );
};

export default List;
