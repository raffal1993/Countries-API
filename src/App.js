import AppProvider from "./providers/AppProvider";
import Dashboard from "views/Dashboard";

function App() {
     return (
          <AppProvider>
               <Dashboard />
          </AppProvider>
     );
}

export default App;
