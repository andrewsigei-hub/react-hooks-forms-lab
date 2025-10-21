import React, { useState } from "react"; // Imports both React and useState
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [formData, setFormData] = useState({
    name: " ",
    category: "Produce",
  });

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((currentData) => {
      return {
        ...currentData,
        [name]: value,
      };
    });
  }
  // Inside your ItemForm component, after handleChange
  function handleSubmit(event) {
    // 1. Prevent the page from refreshing
    event.preventDefault();

    // 2. Create a new item object
    const newItem = {
      id: uuid(),
      name: formData.name,
      category: formData.category,
    };

    // 3. Call the function from the parent to add the new item
    onItemFormSubmit(newItem);

    // 4. Reset the form
    setFormData({ name: "", category: "Produce" });
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>

      <label>
        Category:
        <select
          name="category"
          onChange={handleChange}
          value={formData.category}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
