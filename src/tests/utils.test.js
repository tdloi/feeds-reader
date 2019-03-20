import { parseRSSToJSON, isValidRSS } from '../utils/rss';
import { xmlData, parsedRSSData, parsedInvalidRSSData } from './data';

it('parses RSS correctly', () => {
  expect(parseRSSToJSON(xmlData).rss).not.toBeUndefined();
})

it('returns RSS is valid', () => {
  expect(isValidRSS(parsedRSSData)).toBeTruthy();
})

it('returns RSS is invalid', () => {
  expect(isValidRSS(undefined)).toBeFalsy();
  expect(isValidRSS({'rss': null})).toBeFalsy();
  expect(isValidRSS(parsedInvalidRSSData)).toBeFalsy();
})
