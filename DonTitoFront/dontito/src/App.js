
import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Default  from './pages/Default';

function App() {
  return (
    <div>
        <h1>Routes</h1>
        <Routes>
            <Route path="/" element={<Layout/>}>
            <Route path="about" element={<About></About>} />
            <Route path="/" element={<Home></Home>} />
            <Route path="dashboard" element={<Dashboard></Dashboard>} />
            <Route path="*" element={<Default></Default>} />
            </Route>
        </Routes>  
    </div>
  );
}

export default App;
