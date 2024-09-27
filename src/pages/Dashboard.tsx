import AdminSidebar from "../components/AdminSidebar";
import { BsSearch } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import userPic from '../assets/images/userpic.png'
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
import data from "../assets/data.json"
import { BarChart, DoughnutChart } from "../components/Charts";
import { BiMaleFemale } from "react-icons/bi";
import DashboardTable from "../components/DashboardTable";

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
          <WidgetItem percent={40} amount={true} value={340000} heading="Revenue" color="rgb(0, 115, 255, 0.5)" />
          <WidgetItem percent={-14} amount={false} value={400} heading="Users" color="rgb(0, 198, 202, 0.7)" />
          <WidgetItem percent={80} amount={false} value={23000} heading="Transactions" color="rgb(255, 196, 0)" />
          <WidgetItem percent={30} amount={false} value={1000} heading="Products" color="rgb(76, 0, 255, 0.5)" />
        </section>
        <section className="graph-container">
          <div className="revenue-chart">
            <h2>Revenue & Transaction</h2>
            {/* graph here */}
            <BarChart 
              data_1={[200, 444, 343, 556, 778, 455, 990]} 
              data_2={[300, 144, 433, 655, 237, 755, 190]}
              title_1="revenue"
              title_2="transaction"
              bgColor_1="rgba(64, 224, 208, 0.5"
              bgColor_2="rgba(224, 64, 86, 0.5"
            />
          </div>
          <div className="dashboard-categories">
            <h2>Inventory</h2>

            {
              data.categories.map((category) => (
                <CategoryItem
                  key={category.heading}
                  heading={category.heading}
                  value={category.value}
                  color={`hsl(${category.value * 4}, ${category.value}%, 75%)`}
                />
              ))
            }
          </div>
        </section>
        <section className="transaction-container">
          <div className="gender-chart">
            <h2>Gender Ratio</h2>
            {/* {Chart} */}
            <DoughnutChart labels={["Female", "male"] } data={[12, 19]} backgroundColor={["hsl(340, 82%, 56%, 50%)", "rgba(53, 162, 235, 0.4)"]} cutout={80}/>
            <p> <BiMaleFemale/> </p>
          </div>
          <div className="transaction-box">
            {/* {Table} */}
            <DashboardTable data={data.transaction} />
          </div>
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
