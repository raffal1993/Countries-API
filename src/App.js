import AppProvider from "./providers/AppProvider";
import Dashboard from "components/Dashboard/Dashboard";
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
