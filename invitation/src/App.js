import { RouterProvider } from "react-router-dom"
import './App.css';
import './assets/styles.css';
import router from "./routes/router";

function App() {
  return (
    <div className="App">
      <RouterProvider
        router={router}
      />
    </div>
  );
}

export default App;
