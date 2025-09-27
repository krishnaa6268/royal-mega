import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Layout from './components/Layout';
import AddCart from '@/components/AddCart/cart';
import { Landing, NotFound } from './containers/pageListAsync';
import { store } from './redux/store';
import { ToastContainer } from 'react-toastify';
import Login from './containers/Forms/Login';
import Signup from './containers/Forms/Signup';
import Forgot from './containers/Forms/forgot';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Landing />} />
            <Route path="/addCart" element={<AddCart />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot" element={<Forgot />} />
        </Routes>
      </BrowserRouter>{' '}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </Provider>
  );
}
export default App;
