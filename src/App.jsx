
import Homepages from './Pages/Homepages';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <div> 
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepages/>} />
    </Routes>
    </BrowserRouter>
   </div>
  );
};

export default App;