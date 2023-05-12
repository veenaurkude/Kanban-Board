import Navbar from "./Containers/Navbar/Navigation";
import Home from "./Home/Home";
import { Provider } from "react-redux";
import { store } from "./Redux/store/store";
function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Home />
    </Provider>
  );
}

export default App;
