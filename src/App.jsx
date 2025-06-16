import { BrowserRouter, Route, Routes } from "react-router-dom";
import AsideMenuBar from "./Component/AsideMenuBar/AsideMenuBar";
import NavBar from "./Component/NavBar/NavBar";
import Users from "./Component/ContentComponent/Users/Users";
import Products from "./Component/ContentComponent/Products/Products";
import DashBoard from "./Component/ContentComponent/DashBoard/DashBoard";
import UserCreate from "./Component/ContentComponent/Users/UserCreate";
import { useState } from "react";
;
import ProductCreate from "./Component/ContentComponent/Products/ProductsCreate";
import VeiwProduct from "./Component/ContentComponent/Products/VeiwProduct";

function App() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen w-full ">
        <div className="w-[10%] ">
          <AsideMenuBar
            isSidebarOpen={isSideBarOpen}
            onCloseSidebar={() => setIsSideBarOpen(false)}
          />
        </div>

        <div className="dasboard-content-div md:w-[85%] md:ml-[15%] ">
          <NavBar onToggleSideBar={toggleSideBar}></NavBar>

          <div className="dasboard-content">
            <Routes>
              <Route path="/" element={<DashBoard></DashBoard>} />
              <Route path="/users" element={<Users></Users>} />
              <Route path="/products" element={<Products></Products>} />
              <Route path="/user-create" element={<UserCreate></UserCreate>}></Route>
              <Route path="/product-view/:id" element={<VeiwProduct></VeiwProduct>}></Route>
              <Route path="/product-create" element={<ProductCreate></ProductCreate>}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
