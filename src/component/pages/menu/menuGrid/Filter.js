import { useEffect } from "react";

const Filter = ({ foods, setFiltered, activeFilter, setActiveFilter }) => {
  useEffect(() => {
    if (activeFilter === 0) {
      setFiltered(foods);
      return;
    }
    const filtered = foods.filter((food) => food.veg.includes(activeFilter));
    setFiltered(filtered);
  }, [activeFilter, foods, setFiltered]);

  return (
    <div className="filter-container">
      <button
        className={activeFilter === 0 ? "active" : ""}
        onClick={() => setActiveFilter(0)}
      >
        All
      </button>
      <button
        className={activeFilter === 1 ? "active" : ""}
        onClick={() => setActiveFilter(1)}
      >
        Veg
      </button>
      <button
        className={activeFilter === 2 ? "active" : ""}
        onClick={() => setActiveFilter(2)}
      >
        Non-Veg
      </button>
    </div>
  );
};

export default Filter;
