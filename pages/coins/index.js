import Axios from 'Axios';

const CoinList = ({ coinData }) => {
    console.log(coinData.coins)
    return (
      <div>
        {coinData.coins.map((coin) => {
          return (
            <div>
              <h1> {coin.name}</h1>
              <img src={coin.icon} />
              <p> {coin.price}</p>
            </div>
          );
        })}
      </div>
    );
  };
    


export const getServerSideProps = async ({params}) => {
    
    const data = await Axios.get("https://api.coinstats.app/public/v1/coins?skip=0")
    
    return {
        props: {
            coinData: data.data,
        },
    }

}

export default CoinList;