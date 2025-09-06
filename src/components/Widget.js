import { useDispatch } from "react-redux";
import { removeWidget } from "../utils/dashboardSlice";

const Widget = ({ widget, categoryId }) => {
  const dispatch = useDispatch();

  return (
    <div className="border p-3 rounded-md shadow-sm relative bg-gray-50">
      <h3 className="font-medium">{widget.name}</h3>
      <p className="text-sm text-gray-600">{widget.text}</p>
      <button
        onClick={() => dispatch(removeWidget({ categoryId, widgetId: widget.id }))}
        className="absolute top-1 right-1 text-red-500 font-bold"
      >
        ✕
      </button>
    </div>
  );
};

export default Widget;
