import { useEffect, useState } from "react";
import { IconType } from "react-icons";
import { AiFillFileText } from "react-icons/ai"
import { FaChartBar, FaChartLine, FaChartPie, FaGamepad, FaStopwatch } from "react-icons/fa";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoIosPeople } from "react-icons/io"
import { RiCoupon3Fill, RiDashboardFill, RiShoppingBag3Fill } from "react-icons/ri"
import { Link, Location, useLocation } from "react-router-dom"

function AdminSidebar() {

  const location = useLocation();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [phoneActive, setPhoneActive] = useState<boolean>(
    window.innerWidth < 1100
  );

  const resizeHandler = () => {
    setPhoneActive(window.innerWidth < 1100);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (

    <>
    {
        phoneActive && (
        <button id="hamburger" onClick={() => setShowModal(true)}>
          <HiMenuAlt4 />
        </button>
      )
    }

    <aside
    style={
        phoneActive
          ? {
              width: "20rem",
              height: "100vh",
              position: "fixed",
              // display: "none",
              top: 0,
              left: showModal ? "0" : "-20rem",
              transition: "all 0.5s",
            }
          : {}
      }
    >
        <h2>Logo.</h2>
        <div>
            <h5>Dashboard</h5>

            <ul>
                <Li url="/admin/dashboard" text="Dashboard" Icon={RiDashboardFill} location={location}/>
                <Li url="/admin/product" text="Product" Icon={RiShoppingBag3Fill} location={location}/>
                <Li url="/admin/customer" text="Customer" Icon={IoIosPeople} location={location}/>
                <Li url="/admin/transaction" text="Transaction" Icon={AiFillFileText} location={location}/>
            </ul>
        </div>
        <div>
            <h5>Charts</h5>

            <ul>
                <Li url="/admin/chart/bar" text="Bar" Icon={FaChartBar} location={location}/>
                <Li url="/admin/chart/pie" text="Pie" Icon={FaChartPie} location={location}/>
                <Li url="/admin/chart/line" text="Line" Icon={FaChartLine} location={location}/>
            </ul>
        </div>
        <div>
            <h5>Apps</h5>

            <ul>
                <Li url="/admin/app/stopwatch" text="Stopwatch" Icon={FaStopwatch} location={location}/>
                <Li url="/admin/app/coupon" text="Coupon" Icon={RiCoupon3Fill} location={location}/>
                <Li url="/admin/app/toss" text="Toss" Icon={FaGamepad} location={location}/>
            </ul>
        </div>
    </aside>
    </>
  )
};





interface LiProps {
    url: string;
    text: string;
    Icon: IconType;
    location: Location;
}

const Li = ({url, text, Icon, location}: LiProps) => (
    <li style={
        {
            backgroundColor: location.pathname.includes(url) ? "rgba(0, 115, 225, 0.1)" : "white"
        }
    }>
        <Link style={
            {
                color: location.pathname.includes(url) ? "rgba(0, 115, 225)" : "black"
            }
        } to={url}>
            <Icon/>
            {text}
        </Link>
    </li>
)

export default AdminSidebar
