import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./components/Routes/Router";

function App() {
  return (
    <div>
      {/* <Header></Header> */}
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
