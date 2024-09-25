import AdminSidebar from "../components/AdminSidebar";
import { BsSearch } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import userPic from '../assets/userpic.png'
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";

function Dashboard() {
  return (
    <div className="adminContainer">
      {/* Sidebar */}
      <AdminSidebar/>

      {/* Main-page */}
      <main className="dashboard">
        <div className="bar">
          <BsSearch/>
          <input type="text" placeholder="Search for data, users, docs" />
          <FaRegBell/>
          <img src={userPic} alt="User" />
        </div>
        <section className="widget-container">
          <WidgetItem percent={40} amount={true} value={340000} heading="Revenue" color="rgb(0, 115, 255)" />
          <WidgetItem percent={-14} amount={false} value={400} heading="Users" color="rgb(0, 198, 202)" />
          <WidgetItem percent={80} amount={false} value={23000} heading="Transactions" color="rgb(255, 196, 0)" />
          <WidgetItem percent={30} amount={false} value={1000} heading="Products" color="rgb(76, 0, 255)" />
        </section>
        <section className="graph-container">
          <div className="revenue-chart">
            <h2>Revenue & Transaction</h2>
            {/* graph here */}
          </div>
          <div className="dashboard-categories">
            <h2>Inventory</h2>

            <CategoryItem heading="Laptops" value = {40} color="green"/>
            <CategoryItem heading="Shoes" value={100} color=""/>
            <CategoryItem heading="Cameras" value={80} color=""/>
            <CategoryItem heading="Jeans" value={60} color=""/>
          </div>
        </section>
        <section className="transaction-container">
          <div className="gender-chart"></div>
          <div className="transaction-box"></div>
        </section>
      </main>

    </div>
  )
}

interface WidgetProps {
  heading: string;
  value: number;
  percent: number;
  color: string;
  amount?: boolean;
}

const WidgetItem = ({heading, value, percent, color, amount}: WidgetProps) => <article className="widget">
  <div className="widget-info">
    <p> { heading } </p>
    <h4> { amount ? `$${value}` : value } </h4>
    {
      percent > 0 ? <span className="green"> <HiTrendingUp/> +{percent}%{" "} </span> : <span className="red"> <HiTrendingDown/> {percent}%{" "} </span>
    }
  </div>

  <div className="widget-circle" style={{
    background: `conic-gradient(
        ${color} ${(Math.abs(percent) / 100) * 360}deg,
        rgb(255, 255, 255) 0
      )`
  }}>
    <span style={{ color: `${color}` }}> {percent}% </span>
  </div>
</article>;


interface CategoryProps {
  heading: string;
  value: number;
  color: string;
}

const CategoryItem = ({heading, value, color}: CategoryProps) => (
  
  <div className="category-item">
    <h5> {heading} </h5>
    <div>
      <div style={{ backgroundColor: color, width: `${value}%`}}></div>
    </div>
    <span>{value}%</span>
  </div>
)

export default Dashboard;
