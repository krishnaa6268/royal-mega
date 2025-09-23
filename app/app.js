import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
//import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import Layout from './components/Layout';
import AddCart from '@/components/AddCart/cart';
import { Landing, NotFound } from './containers/pageListAsync';
import { CartProvider } from '@/contexts/CartContext';

function App() {
  return (
    // <Provider store={store}>
    <>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            {/* Layout wraps your pages */}
            <Route path="/" element={<Layout />}>
              <Route index element={<Landing />} />
              <Route path="/addCart" element={<AddCart />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="colored"
      />
    </>
    // {/* <Provider/> */}
  );
}

export default App;
