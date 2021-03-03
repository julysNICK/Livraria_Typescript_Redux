import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/Store";
import Header from "./Header/Header";
import Routes from "./routes";
import {
  BrowserRouter as Router,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="app">
        <Provider store={store}>
          <Header />
          <Routes />
        </Provider>
      </div>
    </Router>
  );
}

export default App;
