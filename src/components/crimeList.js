import SearchForm from "./searchForm";
import axios from "../sources/axios";
import requests from "../sources/requests";
import { useState } from "react";
import CrimeData from "./crimeData";

function CrimeList() {
  const [crimes, setCrimes] = useState([]);
  const [showCrimes, setShowCrimes] = useState(false);
  const violent = [];
  const rape = [];
  const robbery = [];
  const burglary = [];
  const homicide = [];
  const totalArr = [];

  async function fetchData(inputData) {
    const dataRequest = await axios.get(
      requests(`${inputData.state}/${inputData.startYear}/${inputData.endYear}`)
    );
    const results = dataRequest.data.results;
    setCrimes(results);
    setShowCrimes(true);
  }

  function sumOf(arr) {
    return arr.reduce((a, b) => a + b, 0).toLocaleString();
  }

  function totalSum() {
    const sum = totalArr.concat(violent, rape, robbery, burglary, homicide);
    return sumOf(sum);
  }

  return (
    <div>
      <SearchForm onFormInput={fetchData} />
      <div>
        {crimes.forEach((crime) => {
          violent.push(crime.violent_crime);
          rape.push(crime.rape_legacy);
          robbery.push(crime.rape_legacy);
          burglary.push(crime.burglary);
          homicide.push(crime.homicide);
        })}
        {showCrimes ? (
          <CrimeData
            violent={sumOf(violent)}
            rape={sumOf(rape)}
            robbery={sumOf(robbery)}
            burglary={sumOf(burglary)}
            homicide={sumOf(homicide)}
            total={totalSum()}
          />
        ) : null}
      </div>
    </div>
  );
}

export default CrimeList;
