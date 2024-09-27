import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { lazy, Suspense } from "react"
import Loader from "./components/Loader";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Product = lazy(() => import("./pages/Product"));
const Customer = lazy(() => import("./pages/Customer"));
const Transaction = lazy(() => import("./pages/Transaction"));

const BarCharts = lazy(() => import("./pages/charts/BarCharts"));
const PieChart = lazy(() => import("./pages/charts/PieChart"));
const LineCharts = lazy(() => import("./pages/charts/LineCharts"));

const Stopwatch = lazy(() => import("./pages/apps/Stopwatch"));
const Coupon = lazy(() => import("./pages/apps/Coupon"));
const Toss = lazy(() => import("./pages/apps/Toss"));

const ProductManagement = lazy(() => import("./pages/management/ProductManagement"));
const NewProduct = lazy(() => import("./pages/management/NewProduct"));
const TransactionManagement = lazy(() => import("./pages/management/TransactionManagement"));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/admin/dashboard" element={<Dashboard/>}/>
          <Route path="/admin/product" element={<Product/>}/>
          <Route path="/admin/customer" element={<Customer/>}/>
          <Route path="/admin/transaction" element={<Transaction/>}/>

          {/* Chats */}
          <Route path="/admin/chart/bar" element={<BarCharts/>}/>
          <Route path="/admin/chart/pie" element={<PieChart/>}/>
          <Route path="/admin/chart/line" element={<LineCharts/>}/>

          {/* Apps */}
          <Route path="/admin/app/stopwatch" element={<Stopwatch/>}/>
          <Route path="/admin/app/coupon" element={<Coupon/>}/>
          <Route path="/admin/app/toss" element={<Toss/>}/>

          {/* Management */}
          <Route path="/admin/product/new" element={<NewProduct/>} />
          <Route path="/admin/product/:id" element={<ProductManagement/>} />
          <Route path="/admin/transaction/:id" element={<TransactionManagement/>} />
          
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
