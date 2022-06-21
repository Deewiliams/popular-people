import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import PersonDetail from './Pages/PersonDetail';
import { Routes, Route } from "react-router-dom";
import ListImages from './Pages/ListImages';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
      <Route path="/" element={ <ListImages />} />
    <Route path="/personDetail/:person_id" exact element={ <PersonDetail />} />
  </Routes>
    </div>
  );
}

export default App;
