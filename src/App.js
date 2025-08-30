// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";

// const router = createBrowserRouter([
//   { path: "/", element: <HomePage /> },
//   { path: "/products", element: <ProductsPage /> },
// ]);

// function App() {
//   return <RouterProvider router={router} />;
// }
import { BrowserRouter, Routes, Route } from "react-router-dom"; //Older way of rounting - imp to know also

function App() {
  //wrap our file with BrowserRouter
  return (
    <BrowserRouter basename="/app">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>

        <Route path="/products" element={<ProductsPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
