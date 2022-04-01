import React from "react";
//goal: filter so that only items with names that match the text are included.

//step 1: useState should be in shopping list; then put into input field as value (matchingItem)
//step 2: add onSearchChange CB function to set state when input changes
function Filter({ onCategoryChange, onSearchChange, search }) {
  function handleSearchChange(event) {
    onSearchChange(event.target.value)
  }

  return (
    <div className="Filter">
      <input type="text" name="search" placeholder="Search..." value={search} onChange={handleSearchChange} />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
