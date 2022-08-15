import './App.css';

import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Trip from './components/Trip';
import AllP from './components/AllP';
import NewP from './components/NewP';
import EditP from './components/EditP';
import OneP from './components/OneP';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Trip />} path="/" />
          <Route element={<Trip />} path="/trip" />
          <Route element={<AllP />} path="/trip/p" />
          <Route element={<NewP />} path="/trip/p/new" />
          <Route element={<EditP />} path="/trip/p/edit/:id" />
          <Route element={<OneP />} path="/trip/p/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


