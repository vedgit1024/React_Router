// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import HomePage from "./pages/Home";
// import ProductsPage from "./pages/Products";
// import RootLayout from "./Root";

// import ErrorPage from "./components/Error";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <RootLayout />,
//     errorElement: <ErrorPage />,
//     children: [
//       //Creating route layout -> This tell parent componnet(element) and child components(elements) hai
//       { path: "/", element: <HomePage /> },
//       { path: "/products", element: <ProductsPage /> },
//     ],
//   },
//   // { path: "/", element: <HomePage /> },
//   // { path: "/products", element: <ProductsPage /> },
// ]);

// function App() {
//   return <RouterProvider router={router} />;
// }

// // import { BrowserRouter, Routes, Route } from "react-router-dom"; //Older way of rounting - imp to know also

// // function App() {
// //   //wrap our file with BrowserRouter
// //   return (
// //     <BrowserRouter basename="/app">
// //       <Routes>
// //         <Route path="/" element={<HomePage />}></Route>

// //         <Route path="/products" element={<ProductsPage />}></Route>
// //       </Routes>
// //     </BrowserRouter>
// //   );
// // }

// export default App;

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./Root";

import ErrorPage from "./components/Error";
import ProductInfoPage from "./pages/ProductInfo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <ProductsPage /> },
      { path: "/products/:id", element: <ProductInfoPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
