import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchInput, setSearchInput] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function onSearchChange(e) {
    let searchInput = e.target.value;
    setSearchInput(searchInput);
  }
  console.log(items);
  const itemsToDisplay = items
    .filter((item) => {
      if (selectedCategory === "All") return true;

      return item.category === selectedCategory;
    })
    .filter((item) => {
      if (item.name.toLowerCase().includes(searchInput.toLowerCase()))
        return true;
    });

  return (
    <div className="ShoppingList">
      <ItemForm />
      <Filter
        onCategoryChange={handleCategoryChange}
        onSearchChange={onSearchChange}
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
