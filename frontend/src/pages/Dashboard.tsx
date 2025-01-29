import Sidebar from '../components/Sidebar';
const Dashboard = () => {
  return (
    <div className="w-full h-screen flex flex-row">
      <Sidebar />
      <div className="w-full h-full p-10">Dashboard</div>
    </div>
  );
};

export default Dashboard;
