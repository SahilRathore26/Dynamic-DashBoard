import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Provider store={appStore}>
      <div className="min-h-screen bg-gray-200 p-6">
        <Dashboard />
      </div>
    </Provider>
  );
}

export default App;
