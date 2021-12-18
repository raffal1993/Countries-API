import Header from "components/Header/Header";
import Navbar from "components/Navbar/Navbar";
import React from "react";
import { Wrapper } from "./Dashboard.style";

const Dashboard = () => {
     return (
          <Wrapper>
               <Header></Header>
               <Navbar></Navbar>
          </Wrapper>
     );
};

export default Dashboard;
