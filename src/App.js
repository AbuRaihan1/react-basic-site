import { RouterProvider } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import router from './components/Routes/Router';

function App() {
  return (
    <div>
      {/* <Header></Header> */}
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
