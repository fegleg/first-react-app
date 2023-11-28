import ListElement from "../ListElement";

import "./index.scss";

function List({ children = [], width = "300px" }: Props) {
  if (!children.length) {
    return <div>List is empty!</div>;
  }

  const listElements = children.map((element: any, index: number) => (
    <ListElement key={index}>{element}</ListElement>
  ));

  return <ul style={{ width }}>{listElements}</ul>;
}

type Props = {
  children?: any[];
  width?: any;
};

export default List;
