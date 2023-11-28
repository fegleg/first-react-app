import ReactDOM from "react-dom/client";
import App from "./App";
import List from "./List";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <>
    <App hello="Hello world" who="others" bool />
    <List>{[1, 1, 1, 2, 3, 4, 5]}</List>
    <List width="500px">{["test1", "test2", "test3"]}</List>
    <List></List>
  </>
);
