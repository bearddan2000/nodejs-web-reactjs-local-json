import './App.css';
import Datarow from './component/Datarow';
import local from './local-json/data.json';

function App() {
  //const [localData, localDataState] = React.useState(local);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Fetched local json</h1>
        {local && local.map(({ breed, color, id}) =>
        (
          /*
          <div key={id} className="row">
            <span>{id}</span>
            <span>{breed}</span>
            <span>{color}</span>
          </div>
          */
         <Datarow dataFieldId={id} dataFieldBreed={breed} dataFieldColor={color}/>
        ))}
      </header>
    </div>
  );
}

export default App;

