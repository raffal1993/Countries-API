import AppProvider from "./providers/AppProvider";
import Dashboard from "views/Dashboard";
import { BrowserRouter } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <AppProvider>
                <Dashboard />
            </AppProvider>
        </BrowserRouter>
    );
}

export default App;
