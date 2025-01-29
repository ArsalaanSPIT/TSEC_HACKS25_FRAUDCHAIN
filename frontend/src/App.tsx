import { Route, Routes } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Proposals from './pages/Proposals';
import Portfolio from './pages/Portfolio';
import Homepage from './pages/Homepage';

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
      <Route path="/proposals" element={<Proposals></Proposals>}></Route>
      <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
      <Route path="/" element={<Homepage></Homepage>}></Route>
    </Routes>
  );
}

export default App;
