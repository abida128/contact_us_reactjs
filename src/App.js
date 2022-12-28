import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactUs from "./Components/ContactUs";

const App =() => {
  return (
    <div >

        <BrowserRouter>
          <Routes>
              <Route element={<ContactUs/>} path="/"/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
