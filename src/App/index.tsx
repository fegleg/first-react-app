import "./index.scss";

function App({ hello, who, bool }: any) {
  console.log({ hello, who, bool });

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
