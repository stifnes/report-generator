import "./App.css";
import SidebarComponent from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchAsyncUsers,getAllUsers } from "./features/users/userSlice";

function App() {
  const dispatch = useDispatch();
  const allUsers = useSelector(getAllUsers)
  useEffect(() => {
    dispatch(fetchAsyncUsers());
  }, [dispatch]);
  return (
    <div className="App">
      <Header userInfo={allUsers}/>
      <SidebarComponent />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
