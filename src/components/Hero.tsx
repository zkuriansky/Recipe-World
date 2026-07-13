import Button from "./Button";

const Hero = () => {
  return (
    <section className="hero">
      <img
        src="src/assets/hero.svg"
        className="hero__image"
        alt="hero-image"
        width={"1312px"}
        height={"577px"}
        loading="lazy"
      />
      <div className="hero__content">
        <h1 className="hero__content-header">Unleash Culinary Excellence</h1>
        <p className="hero__content-text">
          Explore a world of flavors, discover handcrafted recipes, and let the
          aroma of our passion for cooking fill your kitchen
        </p>
        <Button
          className="hero__content-button"
          title="explore recipes"
          type="hero"
          onClick={() => console.log("Explore")}
        />
      </div>
    </section>
  );
};

export default Hero;
