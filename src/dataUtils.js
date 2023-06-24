
import UAParser from "ua-parser-js";

const extractBrowserData = (data) => {
  return data.reduce((acc, item) => {
    acc[item.browser] = (acc[item.browser] || 0) + 1;
    return acc;
  }, {});
};

const extractLocationData = (data) => {
  return data.reduce(
    (acc, item) => {
      const { location } = item;
      const [city, state, country] = location.split(",");

      acc.city[city] = (acc.city[city] || 0) + 1;
      acc.state[state] = (acc.state[state] || 0) + 1;
      acc.country[country] = (acc.country[country] || 0) + 1;

      return acc;
    },
    { city: {}, state: {}, country: {} }
  );
};

const extractOSData = (data) => {
  return data.reduce((acc, item) => {
    const { device } = item;
    const parser = new UAParser();
    const uaResult = parser.setUA(device).getResult();
    const os = uaResult.os.name;

    acc[os] = (acc[os] || 0) + 1;

    return acc;
  }, {});
};

export { extractBrowserData, extractLocationData, extractOSData };
