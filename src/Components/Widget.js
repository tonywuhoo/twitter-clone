import {useState, useEffect} from "react";
import axios from "axios";
import Coin from "../Components/Widgets/coin.jsx";
// import "./Widget.css";
import Footer from "./Footer";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";

function Widgets() {
  const [coins, setCoins] = useState([]);
  const [currentCoin, setCurrentCoin] = useState(0);

  let interval;

  useEffect(() => {
    const fetchCoinData = async () => {
      let res = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=300&page=1&sparkline=false"
      );
      setCoins(res.data);
      interval = setInterval(() => updateCurrCoin(res.data), 3000);
    };

    fetchCoinData();
    return () => clearInterval(interval);
  }, []);

  const updateCurrCoin = (currCoins) => {
    setCurrentCoin((coinIndex) => {
      if (coinIndex < currCoins.length) return coinIndex + 1;
      return 0;
    });
  };

  return (
    <>
      <div className="widgets">
        <Footer />
        <div className="widgets__input">
          <input placeholder="Search Twitter" type="text" />
        </div>

        <div className="widgets__widgetContainer">
          <h2>Top $hills</h2>

          {/* <TwitterTweetEmbed tweetId={"1595780526656262148"} />

          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="pkedrosky"
            options={{ height: 400 }}
          /> */}
          <div className=" main-con h-80 !important">
          {coins.slice(currentCoin, currentCoin + 10).map((coin) => {
            return (
              <Coin
                key={coin.id}
                name={coin.name}
                price={coin.current_price}
                symbol={coin.symbol}
                marketcap={coin.total_volume}
                volume={coin.market_cap}
                image={coin.image}
                priceChange={coin.price_change_percentage_24h}
              />
            );
          })}
        </div>
        </div>
      </div>
    </>
  );
}

export default Widgets;
