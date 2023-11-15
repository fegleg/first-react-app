import "./index.scss";

function App({ hello, who }: any) {
  if (!hello) {
    return <div>Blank page</div>;
  }

  return (
    <div className="app-class">
      <span>{hello}</span>
      <> and </>
      <span className="app-class">{who}!</span>
    </div>
  );
}

export default App;
