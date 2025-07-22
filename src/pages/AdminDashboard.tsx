import TopHeader from "../components/common/TopHeader";
import Table from "../components/common/Table";

const AdminDashboard = () => {
  const headerColumns = [
    "Booking ID",
    "Customer",
    "Origin",
    "Destination",
    "Status",
  ];

  const recentBookings = [
    {
      bookingId: "BK001",
      customer: "Ravi Kumar",
      origin: "Hyderabad",
      destination: "Chennai",
      status: "In Transit",
    },
    {
      bookingId: "BK002",
      customer: "Sunil Verma",
      origin: "Mumbai",
      destination: "Nagpur",
      status: "Completed",
    },
    {
      bookingId: "BK003",
      customer: "Kiran Patel",
      origin: "Ahmedabad",
      destination: "Pune",
      status: "Scheduled",
    },
  ];

  const summaryCards = [
    { title: "Active Bookings", value: 24 },
    { title: "Completed Shipments", value: 132 },
    { title: "Pending Invoices", value: 5 },
    { title: "Cattle In Transit", value: 16 },
  ];

  return (
    <div className="p-4 sm:p-6 md:p-8">
      <TopHeader title="Admin Dashboard" />

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        {summaryCards.map((card, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow p-4 flex flex-col items-center text-center"
          >
            <p className="text-gray-500 text-sm">{card.title}</p>
            <p className="text-2xl font-semibold mt-1">{card.value}</p>
          </div>
        ))}
      </div>

      {/* Recent Bookings Table */}
      <div className="mt-10">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Recent Bookings
        </h2>
        <Table
          updateWallet={() => {}}
          headerColumns={headerColumns}
          modelCallBack={() => {}}
          authStore={recentBookings}
          parentCallback={() => {}}
          value=""
          dailogType="default"
          statusPopover={false}
        />
      </div>
    </div>
  );
};

export default AdminDashboard;
