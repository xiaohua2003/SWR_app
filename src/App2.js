import Blog2 from './components/Blog2'
import Blog from './components/Blog'
import About from './components/About'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Layout from './components/Layout'
function App2() {
  
  return (
   <div>

    <BrowserRouter>
      <Routes> 
       <Route path="/" element={<Layout />}>
    
          <Route index element={<Blog />} />
          <Route path="/about" element={<About />} />
      
        </Route>
      </Routes>
    </BrowserRouter>
   </div>
   
  );
}

export default App2;