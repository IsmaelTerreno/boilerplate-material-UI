import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/layouts/HomeLayout';
import MainLayout from 'src/layouts/MainLayout';
import Index from 'src/views/home';
import NotFoundView from 'src/views/errors/NotFoundView';

const routes = [
  {
    path: 'home',
    element: <DashboardLayout />,
    children: [
      { path: 'home', element: <Index /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Navigate to="/home" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
