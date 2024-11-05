import { countries as countryList, TCountryCode } from 'countries-list';

// sort and convert to array with { code: string; ...otherfields } format

const countries = Object.entries(countryList)
  .sort(([, a], [, b]) => a.name.localeCompare(b.name))
  .map(([code, country]) => ({ code, ...country }));

export { countries };
