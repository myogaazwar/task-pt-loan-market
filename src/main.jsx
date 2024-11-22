import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import DashboardPage from './pages/DashboardPage.jsx';
import BankProductPage from './pages/BankProductPage.jsx';
import MainLayout from './Layouts/MainLayout.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Navigate to='/dashboard' />,
      },
      {
        path: '/dashboard',
        element: <DashboardPage />,
      },
      {
        path: '/product/bank',
        element: <BankProductPage />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
