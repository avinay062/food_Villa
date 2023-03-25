import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const AppLayout = () =>{
  return(
     <>
      <Header/>
      <Body/>
      <RouterProvider router={appRouter}  />
      <Footer/>
     </>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>
  },
  {
    path:"/about",
    element: <About/>
  }
])
export default AppLayout;
