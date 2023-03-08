import { Outlet } from 'react-router-dom';
import "./index.css";
import SearchHeader from './components/SearchHeader.jsx';


function App() {
  return (
    <>
      <SearchHeader/>
      <Outlet/>
    </>
  );
}

export default App;
