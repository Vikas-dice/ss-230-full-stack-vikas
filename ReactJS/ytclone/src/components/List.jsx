import ListItem from "./ListItem";
//AIzaSyDUAxget78rtArEyUvl4XRo0qhbHrOwlE8
const List = (props) => {
  if (props.videos.length == 0) return <h1>Loading...</h1>;
  const dummydata = props.videos;
  return (
    <div>
      {dummydata.map((item) => (
        <ListItem key={item} data={item} onChange={props.onChange} />
      ))}
    </div>
  );
};

export default List;
