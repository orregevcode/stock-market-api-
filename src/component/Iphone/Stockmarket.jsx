import React from "react";
import "./Stockmarket.scss";
import Avatar from "@mui/material/Avatar";

import { Sparklines, SparklinesLine } from "react-sparklines";

function Stockmarket() {
  /* I need to pass from the app component the data from the API containing the price, high, and low values.*/
  return (
    <>
      <section className="select">
        {/* 
    In the future, I will add a router to navigate 
    through different time ranges. and i will pass them the data sdsd
  */}
        <div className="active">1W</div>
        <div className="active">1M</div>
        <div className="active">5M</div>
        <div className="active">1Y</div>
        <div className="active">5Y</div>
      </section>
      <div className="stock-container">
        <div className="stock-info">
          <Avatar
            sx={{ width: 35, height: 40 }}
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDuVZpxZ5lNj6biikhVQODoer-deJJ11ItHiXyNLc-wSaJA7TXcDzmu1yah9aIv6brex8&usqp=CAU"
            }
          />
          <div className="preview__name">
            <span>Apple</span>
            <span>AAPL</span>
          </div>
          {/* 
      Here, I need to pass the data of the one-week high and low.
      i  can replace the sample data [1, 4, 2, 5, 7, 2, 4, 6] 
      with the actual data for one-week sdsd high and low.
    */}
          <Sparklines data={[5, 10, 5, 20, 8, 15]} limit={30}>
            <SparklinesLine
              style={{ strokeWidth: 3, stroke: "green", fill: "none" }}
            />
          </Sparklines>

          <div className="price">
            <span>$3,435.90</span>
            <span className="price-percentage">1537.62%</span>
          </div>
        </div>
        <div className="stock-info">
          <Avatar
            sx={{ width: 35, height: 40 }}
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDuVZpxZ5lNj6biikhVQODoer-deJJ11ItHiXyNLc-wSaJA7TXcDzmu1yah9aIv6brex8&usqp=CAU"
            }
          />
          <div className="preview__name">
            <span>Apple</span>
            <span>AAPL</span>
          </div>
          {/* 
      Here, I need to pass the data of the one-week high and low.
      i  can replace the sample data [1, 4, 2, 5, 7, 2, 4, 6] 
      with the actual data for one-week high and low.
    */}
          <Sparklines data={[5, 10, 5, 20, 8, 15]} limit={30}>
            <SparklinesLine
              style={{ strokeWidth: 3, stroke: "green", fill: "none" }}
            />
          </Sparklines>

          <div className="price">
            <span>$3,435.90</span>
            <span className="price-percentage">1537.62%</span>
          </div>
        </div>
        <div className="stock-info">
          <Avatar
            sx={{ width: 35, height: 35 }}
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDuVZpxZ5lNj6biikhVQODoer-deJJ11ItHiXyNLc-wSaJA7TXcDzmu1yah9aIv6brex8&usqp=CAU"
            }
          />
          <div className="preview__name">
            <span>Apple</span>
            <span>AAPL</span>
          </div>
          {/* 
      Here, I need to pass the data of the one-week high and low.
      i  can replace the sample data [1, 4, 2, 5, 7, 2, 4, 6] 
      with the actual data for one-week high and low.
    */}
          <Sparklines
            data={[-5, 2, 22, -20, -60, 70, -20, -50, -70]}
            limit={30}
          >
            <SparklinesLine
              style={{ strokeWidth: 4, stroke: "red", fill: "none" }}
            />
          </Sparklines>

          <div className="price">
            <span>$3,435.90</span>
            <span className="price-percentage">1537.62%</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Stockmarket;
