import AdminSidebar from "../../components/AdminSidebar"
import { BarChart } from "../../components/Charts"

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

const BarCharts = () => {
  return (
    <div className="adminContainer">
      {/* Sidebar */}
      <AdminSidebar/>

      {/* Main-page */}
      <main className="chart-container">
        <h1>Bar Charts</h1>
        <section>
          <BarChart
              data_1={[200, 444, 343, 556, 778, 455, 990]}
              data_2={[300, 144, 433, 655, 237, 755, 190]}
              title_1="Products"
              title_2="Users"
              bgcolor_1={`hsl(260,50%,30%)`}
              bgcolor_2={`hsl(360,90%,90%)`}
            />
          <h2>Top Selling Products & Top Customers</h2>
        </section>

        <section>
          <BarChart
              horizontal={true}
              data_1={[
                200, 444, 343, 556, 778, 455, 990, 444, 122, 334, 890, 909,
              ]}
              data_2={[]}
              title_1="Products"
              title_2=""
              bgcolor_1={`hsl(180, 40%, 50%)`}
              bgcolor_2=""
              labels={months}
            />
          <h2>Orders throughout the year</h2>
        </section>
      </main>
    </div>
  )
}

export default BarCharts
