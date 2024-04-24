
import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Default  from './pages/Default';

import { useState } from 'react';


function App() {
  const [apiData, setApiData] = useState([]);
  const handleDataUpload = (data) => {
    setApiData([...apiData, data]);
  };
  return (
    <div>
        <h1>Routes</h1>
        <Routes>
            <Route path="/" element={<Layout/>}>
            <Route path="about" element={<About></About>} />
            <Route path="/" element={<Home></Home>} />
            <Route path="dashboard" element={<Dashboard apiData={apiData} />} />
            <Route path="*" element={<Default></Default>} />
            </Route>
        </Routes>  
    </div>
  );
}

export default App;
