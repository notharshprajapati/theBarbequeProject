import "../../../trash/Comp.css";
import home from "../../img/home.png";
import Button from "../../UI/Button";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home__container bd-container bd-grid">
        <div className="home__data">
          <h1 className="home__title">Tasty food</h1>
          <h2 className="home__subtitle">
            Try the best food of <br />
            the week.
          </h2>
          <Button link="#about" text="Order" />
        </div>

        <img src={home} alt="" className="home__img" />
      </div>
    </section>
  );
};

export default Home;
