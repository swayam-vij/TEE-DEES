import React, { useContext } from "react";
import { FaUserTie } from "react-icons/fa";
import myContext from "../../context/myContext";
import Layout from "../../components/Layout";
import DashboardTab from "./DashboardTab";

function Dashboard() {
  const context = useContext(myContext);
  const { mode } = context;
  return (
    <Layout>
      <section className="text-gray-600 body-font mt-10 mb-10">
        <DashboardTab />
      </section>
    </Layout>
  );
}

export default Dashboard;
