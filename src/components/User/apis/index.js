
import axios from 'axios';
import moment from 'moment';

export const getData= (api)=>
axios.get(`${api}`);

export const getCountries = () =>
  axios.get('https://api.covid19api.com/countries');

export const getReportByCountry = (slug) =>
  axios.get(
    `https://api.covid19api.com/dayone/country/${slug}?from=2021-01-01T00:00:00&to=${moment()
      .utc(0)
      .format()}`
  );

export const getMapDataByCountryId = (countryId) =>
  import(
    `@highcharts/map-collection/countries/${countryId}/${countryId}-all.geo.json`
  );



