import Body from "./components/Body";
import Header from "./components/Header";
import datas from "./data/Data.js"


function App() {
  return (
    <div className="App">
     <Header/>
     <Body datas={datas}/>
    </div>
  );
}

export default App;
