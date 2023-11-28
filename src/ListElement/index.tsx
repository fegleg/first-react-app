import "./index.scss";

function ListElement({ children }: Props) {
  return <li>{children}</li>;
}

type Props = {
  children: string;
};

export default ListElement;
