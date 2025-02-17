import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import MainLayout from "./pages/MainLayout";

import "typeface-roboto-condensed";
import "typeface-poppins";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignUp/SignIn";
import ProductView from "./pages/Product/ProductView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/:productName" element={<ProductView />} />

          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
