import Chart from "./components/Chart/Chart";
import data from "./data";
import {
  extractBrowserData,
  extractLocationData,
  extractOSData,
} from "./dataUtils";

function App() {
  const browserData = extractBrowserData(data);
  const locationData = extractLocationData(data);
  const osData = extractOSData(data);
  return (
    <div>
      <h1>
        <center> Database </center>
      </h1>
      <Chart
        browserData={browserData}
        locationData={locationData}
        osData={osData}
      />
    </div>
  );
}

export default App;

// console.log(formattedTimestamps);
