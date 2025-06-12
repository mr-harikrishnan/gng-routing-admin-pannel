import { BrowserRouter, Route, Routes } from "react-router-dom";
import AsideMenuBar from "./Component/AsideMenuBar";
import NavBar from "./Component/NavBar";
import Users from "./Component/Users";
import Products from './Component/Products'
import DashBoard from "./Component/DashBoard";

function App() {
    return (
        <BrowserRouter>
            <div className="min-h-screen w-full ">

                <div className="w-[20%] " >
                    <AsideMenuBar></AsideMenuBar>
                </div>

                <div className="dasboard-content-div md:w-[80%] md:ml-[20%] ">

                    <NavBar></NavBar>

                    <div className="dasboard-content">

                        <Routes>

                            <Route path="/" element={ <DashBoard></DashBoard>} />
                            <Route path="/user" element={ <Users></Users> }/>
                            <Route path="/products" element={<Products></Products> }/>

                            

                        </Routes>
                       
                    </div>

                </div>


            </div>


        </BrowserRouter>
    )
}
export default App;