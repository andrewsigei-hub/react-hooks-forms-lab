import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function onItemFormSubmit(event){
    
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  })
  .filter((item)=>{
    return item.name.toLowerCase().includes(searchTerm.toLowerCase());
  });


  function handleSearchChange(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <div className="ShoppingList">
      <ItemForm on/>
      <Filter
        onCategoryChange={handleCategoryChange}
        search={searchTerm}
        onSearchChange={handleSearchChange}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
