import React, { useEffect, useState } from 'react';
import Header from '../components/Common/Header';
import TabsComponent from '../components/Dashboard/Tabs';
import  axios  from 'axios';
import Search from '../components/Dashboard/Search';
import PaginationComponent from "../components/Dashboard/Pagination";
import Loader from "../components/Common/Loader";


const Dashboard = () => {
  const [coins, setCoins] = useState([]);
  const [paginatedCoins, setPaginatedCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
    var initialCount = (value - 1) * 10;
    setPaginatedCoins(coins.slice(initialCount, initialCount + 10));
  };

  var filteredCoins = coins.filter( 
    (item) => 
      item.name.toLowerCase().includes(search.toLowerCase()) || 
      item.symbol.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"

      )
      .then((response) => {
        console.log("RESPONSE::", response);
        setCoins(response.data);
        setPaginatedCoins(response.data.slice(0, 10));
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("ERROR::", error);
        setIsLoading(false);
      });
  }, []);


  return (
    <>
      <Header />
      {isLoading ? (
        <Loader />
      ) : ( 
        <div>
          <Search search={search} onSearchChange={onSearchChange}/>
          <TabsComponent coins={search ? filteredCoins : paginatedCoins} />
          {!search && (
            <PaginationComponent 
              page={page} 
              handlePageChange={handlePageChange} 
            />
          )}
        </div>
      )}
    </>
  );
}

export default Dashboard;