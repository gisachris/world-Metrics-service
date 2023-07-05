import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CountryMin from './countryMin';
import '../styles/countryMin.css';

const RegionDisplay = () => {
  let { name } = useParams();
  if (name === 'South America' || name === 'North America') {
    name = 'Americas';
  }
  const data = useSelector((state) => state.countries.data);
  const filteredData = data.filter((country) => country.region === name);

  return (
    <section className="allCoutryHolder">
      {
            filteredData.map((country) => (
              <div className="coutryHolder" key={country.area}>
                <CountryMin country={country} />
              </div>
            ))
        }
    </section>
  );
};

export default RegionDisplay;
