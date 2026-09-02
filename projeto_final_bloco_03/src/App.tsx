 
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
 
 
 

function App() {
  return (
    <div className="flex min-h-screen flex-col">
          <BrowserRouter>
      <Navbar />

      <main className="flex-1">
           <Routes>
         <Route path="/" element={<Home />} />

          <Route path="/home" element={<Home />} />
         </Routes>
      </main>

      <Footer />
      </BrowserRouter>
    </div>
     
  );
}

export default App;