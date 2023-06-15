import React from "react";

function CategoryFilter({categories, handleSelectState, state}) {

  const renderCatBtn = categories.map(category =>{

  return <button key={category} type="button" value={category} onClick={handleSelectState} className={(state === category) ? "selected" : ""}>{category}</button>
})

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {renderCatBtn }
    </div>
  );
}

export default CategoryFilter;
