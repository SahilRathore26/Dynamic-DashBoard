import { useSelector } from "react-redux";
import Category from "./Category";
import SearchBar from "./SearchBar";

const Dashboard = () => {
  const { categories, searchQuery } = useSelector((state) => state.dashboard);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="flex justify-between items-center p-4 bg-blue-600 text-white shadow-md">
        <h1 className="text-2xl font-bold">Dynamic Dashboard</h1>
        <div className="w-1/3">
          <SearchBar />
        </div>
      </header>

      {/* Categories */}
      <main className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Category
            key={category.id}
            category={category}
            searchQuery={searchQuery}
          />
        ))}
      </main>
    </div>
  );
};

export default Dashboard;
