import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Coin from './Coin';
import Navbar from './Navbar';
import Footer from './Footer';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

function App() {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');
    useEffect(() => {
        axios
            .get(
                'https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false'
            )
            .then((res) => {
                setCoins(res.data);
                console.log(res.data);
            })
            .catch((error) => alert('Could not load data'));
    }, []);

    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    //used to filter the coins
    const filteredCoins = coins.filter((coin) =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="coin-app">
            <Navbar />
            <div className="coin-search">
                <h1 className="coin-text">Search a crypto currency</h1>
                <form>
                    <input
                        type="text"
                        placeholder="Search Here"
                        className="coin-input"
                        onChange={handleChange}
                    ></input>
                </form>
            </div>
            {filteredCoins.map((coin) => {
                return (
                    <Coin
                        key={coin.id}
                        name={coin.name}
                        image={coin.image}
                        symbol={coin.symbol}
                        volume={coin.total_volume}
                        price={coin.current_price}
                        priceChange={coin.price_change_percentage_24h}
                        marketcap={coin.market_cap}
                    />
                );
            })}
            <div>
                <Card style={{ width: '300px' }}></Card>
                <CardContent></CardContent>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default App;
