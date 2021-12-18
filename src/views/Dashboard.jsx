import Header from "components/Header/Header";
import Navbar from "components/Navbar/Navbar";
import React from "react";
import { Wrapper } from "./Dashboard.style";
import CountriesList from "components/CountriesList/CountriesList";

const Dashboard = () => {
    return (
        <Wrapper>
            <Header />
            <Navbar />
            <CountriesList />
        </Wrapper>
    );
};

export default Dashboard;
