const { useState } = React;

const GroceryListItem = (props) => {
  const [isHover, setWeight] = useState(false);
  const style = {
    cursor: 'pointer',
    fontWeight: isHover ? 'bold' : 'normal'
  };

  return (
     <li style={style} onMouseEnter={() => setWeight(!isHover)} onMouseLeave={() => setWeight(!isHover)}>
      {props.item}
     </li>
  );
};

const GroceryList = (props) => (
  <ul>
    {props.items.map((item) => (
      <GroceryListItem item={item} />
    ))}
  </ul>
);

var list = {};
list.items = ['Eggs', 'Bread', 'Sandwiches', 'Kale', 'Milk'];

ReactDOM.render(<GroceryList {...list} />, document.getElementById('app'));
