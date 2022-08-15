import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Main from './views/main';
import Detail from './views/Detail';
import Update from './views/Update';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/people/:id/edit" element={<Update/>}/>
          <Route exact path="/people/:id" element={<Detail/>}/>
          <Route path="/people/" element={<Main/>}/>
          

        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

