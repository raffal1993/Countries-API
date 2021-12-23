import Header from "components/Header/Header";
import Navbar from "components/Navbar/Navbar";
import CountryPage from "components/CountryPage/CountryPage";
import React from "react";
import { Wrapper } from "./Dashboard.style";
import CountriesList from "components/CountriesList/CountriesList";
import { Routes, Route } from "react-router-dom";

const Dashboard = () => {
    return (
        <Wrapper>
            <Header />
            <Routes>
                <Route
                    path='/'
                    element={
                        <>
                            <Navbar />, <CountriesList />
                        </>
                    }
                />
                <Route path='/country/:code' element={<CountryPage />} />
            </Routes>
        </Wrapper>
    );
};

export default Dashboard;
