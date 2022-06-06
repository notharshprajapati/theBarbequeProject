import { useEffect, useState } from "react";
import foods from "../../../data/foods.json";
import MenuCard from "../../../UI/MenuCard";
import classes from "./MenuGrid.module.css";
import cx from "classnames";
import Filter from "./Filter";
import { motion, AnimatePresence } from "framer-motion";

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

      <motion.div layout className={classes.grid}>
        <AnimatePresence>
          {filtered.map((food) => {
            return (
              <MenuCard key={food.id} image={food.image} name={food.name} />
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default MenuGrid;
