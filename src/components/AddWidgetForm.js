import { useState } from "react";
import { useDispatch } from "react-redux";
import { addWidget } from "../utils/dashboardSlice";

const AddWidgetForm = ({ categoryId, onClose }) => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    if (!name || !text) return;
    dispatch(addWidget({ categoryId, widget: { name, text } }));
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="p-3 border rounded-md bg-gray-100 mt-2">
      <input
        type="text"
        placeholder="Widget Name"
        value={name}
        onChange={e => setName(e.target.value)}
        className="border p-1 w-full mb-2"
      />
      <input
        type="text"
        placeholder="Widget Text"
        value={text}
        onChange={e => setText(e.target.value)}
        className="border p-1 w-full mb-2"
      />
      <button type="submit" className="px-3 py-1 bg-green-600 text-white rounded-md">
        Add
      </button>
    </form>
  );
};

export default AddWidgetForm;
