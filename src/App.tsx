import React from 'react';
import './normolize.css'
import './App.css';
import Main from './components/UI/main/Main';
import ItemPage from './components/UI/itemPage/ItemPage';
import { useClosePopUpByScroll } from "./components/customHooks/customHooks"
import { Routes, Route, Link } from 'react-router-dom'



const App: React.FC = () => {
  useClosePopUpByScroll()


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/book" element={ <ItemPage/> } />
        <Route path="*" element={<span>not found</span>} />
      </Routes>
      
    </div>
  );
}

export default App;




// const Page: React.FC = () => {
//   // @ts-ignore
//   const location = useLocation()
//   const { from } = location.state
//   console.log("from", from)
//   return (
//     <div>
      
      
//     </div>
//   );
// }
