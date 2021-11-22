import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Maintence } from "../pages/Maintence";
import { Objects } from "../pages/Objects";
import { ObjectType } from "../pages/ObjectType";
import { User } from "../pages/User";

export const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/maintence' element={<Maintence/>}/>
      <Route path='/objects' element={<Objects/>}/>
      <Route path='/object_type' element={<ObjectType/>}/>
      <Route path='/user' element={<User/>}/>
    </Routes>
  );
};
