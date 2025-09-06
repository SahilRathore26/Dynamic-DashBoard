import { useState } from "react";
import Widget from "./Widget";
import AddWidgetForm from "./AddWidgetForm";

const Category = ({ category, searchQuery }) => {
  const [showForm, setShowForm] = useState(false);

  const filteredWidgets = category.widgets.filter((w) =>
    w.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white shadow-lg rounded-xl p-4 flex flex-col">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-semibold text-gray-800">{category.name}</h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded-md"
        >
          + Add Widget
        </button>
      </div>

      {showForm && (
        <AddWidgetForm
          categoryId={category.id}
          onClose={() => setShowForm(false)}
        />
      )}

      <div className="grid grid-cols-1 gap-3 mt-3">
        {filteredWidgets.length > 0 ? (
          filteredWidgets.map((widget) => (
            <Widget key={widget.id} widget={widget} categoryId={category.id} />
          ))
        ) : (
          <p className="text-sm text-gray-500">No widgets found.</p>
        )}
      </div>
    </div>
  );
};

export default Category;
