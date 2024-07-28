import React from "react";
import { Routes, Route } from 'react-router-dom';
import List from "../User/List/List";
import Add from "../User/Add/Add";
function User() {
  return (
    <>
    <Routes>
      <Route exact path="/list" element={<List/>}></Route>
      <Route exact path="/add" element={<Add/>}></Route>
      <Route path="*" element={<List/>} />
    </Routes>
    </>
  )
}
export default User
