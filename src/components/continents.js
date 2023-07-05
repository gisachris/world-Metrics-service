import SingleContinent from './singleContinent';
import '../styles/continent.css';

const Continents = () => {
  const allContinents = ['Africa', 'Europe', 'North America', 'South America', 'Asia', 'Oceania', 'Antarctic'];

  return (
    <section className="continents">
      {
                allContinents.map((continent) => (
                  <SingleContinent key={continent} name={continent} />
                ))
            }
    </section>
  );
};

export default Continents;
