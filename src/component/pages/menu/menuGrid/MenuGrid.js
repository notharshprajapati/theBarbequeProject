import { useEffect, useState } from "react";
import foods from "../../../data/foods.json";
import MenuCard from "./MenuCard";
import classes from "./MenuGrid.module.css";
import cx from "classnames";
import Filter from "./Filter";

const MenuGrid = () => {
  const [filtered, setFiltered] = useState([]);
  const [activeFilter, setActiveFilter] = useState(0);

  useEffect(() => {
    setFiltered(foods);
  }, []);

  return (
    <section className={cx(classes.section, classes.bdContainer)} id="about">
      <div className={classes.about__data}>
        <h2 className={classes.sectionTitle}>Menu</h2>
      </div>

      <Filter
        foods={foods}
        setFiltered={setFiltered}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />

      <div className={classes.grid}>
        {filtered.map((food) => {
          return <MenuCard key={food.id} image={food.image} name={food.name} />;
        })}
      </div>
    </section>
  );
};

export default MenuGrid;
