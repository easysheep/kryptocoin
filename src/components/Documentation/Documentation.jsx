import React from 'react';
import "./Documentation.css"
import '@fontsource/roboto';
import 'typeface-montserrat';
const Documentation = () => {
  return (
    <div className='document'>
      <h2 className='hd'>KryptoCoin Documentation</h2>

      <div id="welcome">
        <h3 className="hd">Welcome to KryptoCoin Documentation</h3>
        <p className="doc">
          Thank you for choosing KryptoCoin! This documentation will guide you through the features
          and functionalities of our cryptocurrency tracking platform.
        </p>
      </div>
      <div className="grayline"></div>

      <div className="introduction">
        <h3 className="hd">Introduction</h3>
        <p className="doc">
          KryptoCoin is a comprehensive platform designed to provide real-time information and historical data for various cryptocurrencies. Whether you're a casual user or a seasoned investor, KryptoCoin has something for everyone.
        </p>

      </div>
      <div className="grayline"></div>

      <div className="keyfeatures">
        <h3 className="hd">Key Features</h3>
        <p className="doc">
          1. Real-time Price Tracking<br />
          Stay updated with the latest prices of your favorite cryptocurrencies in real-time.
          <br />
          <br />

          2. Historical Data Analysis<br />
          Access historical data to analyze trends and make informed investment decisions.
          <br />
          <br />

          3. Daily Gainers and Losers<br />
          Identify top-performing cryptocurrencies and those experiencing losses on a daily basis.
          <br />
          <br />

          4. User-Friendly Interface<br />
          Our intuitive and user-friendly interface makes navigation a breeze for users of all experience levels.
          <br />
          <br />

          5. Personalized Watchlists<br />
          Create personalized watchlists to keep track of specific cryptocurrencies that matter to you.
          <br />
          <br />

        </p>

      </div>
      <div className="grayline"></div>

      <div className="gettingstarted">
        <h3 className="hd">Getting Started</h3>
        <p className="doc">
          To get started with KryptoCoin, follow these simple steps:
          <br />
          <br />

          <b>Sign Up</b>: Create an account on our platform to unlock personalized features.
          <br />
          <br />
          <b>Explore</b>: Navigate through the dashboard to explore real-time prices, historical data, and other functionalities.
          <br />
          <br />
          
          <b>Customize</b>: Personalize your experience by creating watchlists and setting up notifications.
        </p>

      </div>
      <div className="grayline"></div>
      <div id="Historical Data">
        <h3 className="hd">Historical Data</h3>
        <p className="doc">
        Dive into the historical data section to analyze how your favorite cryptocurrencies have performed over time. Use powerful charting tools to visualize trends and patterns.
        </p>
      </div>
      <div className="grayline"></div>
      <div id="Daily Gainers and Losers">
        <h3 className="hd">Daily Gainers and Losers</h3>
        <p className="doc">
        Our platform provides a daily overview of cryptocurrencies that have experienced the most significant gains and losses. Stay informed about market dynamics.
        </p>
      </div>




      {/* <section id="key-features">
        <h3 className="doc">Key Features</h3>
        <li className='doc'>
          <li>Real-time Price Tracking</li>
          <li>Historical Data Analysis</li>
          <li>Daily Gainers and Losers</li>
          <li>User-Friendly Interface</li>
          <li>Personalized Watchlists</li>
        </li>
      </section>

      <section id="getting-started">
        <h2 className="doc">Getting Started</h2>
        <ol>
          <li>
            <strong>Sign Up:</strong> Create an account on our platform to unlock personalized features.
          </li>
          <li>
            <strong>Explore:</strong> Navigate through the dashboard to explore real-time prices,
            historical data, and other functionalities.
          </li>
          <li>
            <strong>Customize:</strong> Personalize your experience by creating watchlists and setting
            up notifications.
          </li>
        </ol>
      </section>

      <section id="supported-cryptocurrencies">
        <h2 className="doc">Supported Cryptocurrencies</h2>
        <p className="doc">
          KryptoCoin supports a vast range of cryptocurrencies, including but not limited to Bitcoin
          (BTC), Ethereum (ETH), Ripple (XRP), Litecoin (LTC), and many more.
        </p>
      </section>

      <section id="historical-data">
        <h2 className="doc">Historical Data</h2>
        <p className="doc">
          Dive into the historical data section to analyze how your favorite cryptocurrencies have
          performed over time. Use powerful charting tools to visualize trends and patterns.
        </p>
      </section>

      {/* Add more sections as needed */}

      {/* <section id="support-and-contact">
        <h2 className="doc">Support and Contact</h2>
        <p className="doc">
          If you need further assistance or have any questions, our support team is here to help.
          Contact us at{' '}
          <a href="mailto:support@kryptocoin.com">support@kryptocoin.com</a>.
        </p>
      </section>

      <p className="doc">Thank you for choosing KryptoCoin. Happy investing!</p> */}
    </div>
  );
};

export default Documentation;