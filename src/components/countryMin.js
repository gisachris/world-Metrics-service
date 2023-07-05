import PropTypes from 'prop-types';
import '../styles/countryMin.css';
import { Link, Outlet } from 'react-router-dom';

const CountryMin = ({ country }) => (
  <>
    <Link to={`/details/coutries/${country.name.common}`}>
      <span className="countryName">{country.name.common}</span>
      {country.flags.png && <img src={country.flags.png} alt={country.flags.alt} className="countryFlag" />}
    </Link>
    <Outlet />
  </>
);
CountryMin.propTypes = {
  country: PropTypes.shape({
    name: PropTypes.shape({
      common: PropTypes.string.isRequired,
      official: PropTypes.string.isRequired,
    }).isRequired,
    region: PropTypes.string.isRequired,
    subregion: PropTypes.string,
    area: PropTypes.number.isRequired,
    capital: PropTypes.arrayOf(PropTypes.string),
    flags: PropTypes.shape({
      alt: PropTypes.string,
      png: PropTypes.string,
      svg: PropTypes.string,
    }),
    language: PropTypes.string,
    population: PropTypes.number,
    startOfWeek: PropTypes.string,
  }).isRequired,
};

export default CountryMin;
