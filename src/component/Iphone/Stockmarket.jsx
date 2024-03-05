import React from "react";
import "./Stockmarket.scss";
import Avatar from "@mui/material/Avatar";

import { Sparklines, SparklinesLine } from "react-sparklines";

function Stockmarket({ getData }) {
  const urlObj = {
    AAPL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDuVZpxZ5lNj6biikhVQODoer-deJJ11ItHiXyNLc-wSaJA7TXcDzmu1yah9aIv6brex8&usqp=CAU",
    AMZN: "https://logowik.com/content/uploads/images/amazon6707.jpg",
    GOOG: "https://st2.depositphotos.com/1001860/11212/i/450/depositphotos_112122944-stock-photo-google-applications-logo.jpg",
    MSFT: "https://pngimg.com/uploads/microsoft/microsoft_PNG14.png",
  };

  return (
    <>
      <section className="select">
        {/* 
    In the future, I will add a router to navigate 
    through different time ranges. and i will pass them the data 
  */}
        <div className="active">1D</div>
        <div className="active">1M</div>
        <div className="active">5M</div>
        <div className="active">1Y</div>
        <div className="active">5Y</div>
      </section>
      <div className="stock-container">
        {getData.map((stock, index) => (
          <div className="stock-info" key={index}>
            <Avatar sx={{ width: 35, height: 35 }} src={urlObj[stock.symbol]} />
            <div className="preview__name">
              <span>{stock.name}</span>
              <span>{stock.symbol}</span>
            </div>
            {/* 
          Here, you need to pass the data of the one-week high and low.
          You can replace the sample data [1, 4, 2, 5, 7, 2, 4, 6] 
          with the actual data for one-week high and low.
        */}
            <Sparklines
              data={[stock.close, stock.open, stock.high, stock.close]}
              limit={15}
            >
              <SparklinesLine
                style={{
                  strokeWidth: 4,
                  stroke:
                    ((stock.close - stock.open) / stock.open) * 100 < 0
                      ? "red"
                      : "green",
                  fill: "none",
                }}
              />
            </Sparklines>

            <div className="price">
              <span>{stock.close}$</span>
              <span className="price-percentage">
                <span
                  className={
                    ((stock.close - stock.open) / stock.open) * 100 < 0
                      ? "negative"
                      : "positive"
                  }
                >
                  {(((stock.close - stock.open) / stock.open) * 100).toFixed(2)}
                  %
                </span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Stockmarket;
