import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import NavFoot from './components/Pages/NavFoot.jsx'
import FirstPage from './components/Pages/FirstPage.jsx'
import DetailPage from './components/Pages/DetailPage.jsx'
import DocumentationPage from './components/Pages/DocumentationPage.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HotTodayPage from './components/Pages/HotTodayPage.jsx'
import SignPage from './components/Pages/SignPage.jsx'
import LoginPage from './components/Pages/LoginPage.jsx'
import SignoutPage from './components/Pages/SignoutPage.jsx'
import { AuthProvider } from './AuthContext.jsx'
import Mywatchlistpage from './components/Pages/Mywatchlistpage.jsx'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
const router = createBrowserRouter([
  {
    path: '/',
    element: <NavFoot />,
    children: [
      { path: "/", element: <FirstPage /> },
      { path: "/details", element: <DetailPage /> },
      { path: "/documenation", element: <DocumentationPage /> },
      { path: "/hottoday", element: <HotTodayPage /> },
      { path: "/signpage", element: <SignPage /> },
      { path: "/loginpage", element: <LoginPage /> },
      { path: "/signoutpage", element: <SignoutPage /> },
      { path: "/watchlistpage", element: <Mywatchlistpage /> }

    ]
  }


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
       <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition:Bounce
        theme="dark"
        
/> 
    </AuthProvider>
  </React.StrictMode>
)
