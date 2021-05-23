import React, {
  useState,
  useEffect
} from "react";
import axios from "axios";

function Data() {
  const [data, setData] = useState({
    hotels: []
  });

  const options = {
    method: "GET",
    url:
      "https://hotels4.p.rapidapi.com/properties/list",
    params: {
      adults1: "1",
      pageNumber: "1",
      destinationId: "1506246",
      pageSize: "25",
      checkOut: "2020-01-15",
      checkIn: "2020-01-08",
      sortOrder: "PRICE",
      locale: "en_US",
      currency: "USD"
    },
    headers: {
      "x-rapidapi-key":
        "ecdac6c3b4msh04deba4e203ad98p1f2249jsnf68d6a89b2d0",
      "x-rapidapi-host":
        "hotels4.p.rapidapi.com"
    }
  };

  useEffect(() => {
    async function fetchData() {
      const result = await axios
        .request(options)
        .then(function (response) {
          console.log(
            "response.data:",
            response.data
          );
          setData({
            hotels:
              response.data.data.body
                .searchResults.results
          });
        })
        .catch(function (error) {
          console.error(error);
        });
      return result;
    }
    fetchData();
  }, []);

  console.log("hotels:", data);

  return data.hotels;
}

export default Data;
