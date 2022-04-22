import { useState } from "react";
import { Button } from "react-bootstrap";
import "./Clicker.css";

export function Clicker() {
  let clickerData = JSON.parse(localStorage.getItem("mediators"));
  if (!clickerData) {
    clickerData = {
      currentClicksCount: 0,
      currentClicksMultiplier: 100,
      currentCost: 100
    };
  }
  let [clicksCount, setClicksSount] = useState(clickerData.currentClicksCount);
  let [clicksMultiplier, setClicksMultiplier] = useState(
    clickerData.currentClicksMultiplier
  );
  let [lowMoneyErr, setErr] = useState(false);
  let [cost, setCost] = useState(clickerData.currentCost);
  setTimeout(() => {
    localStorage.setItem(
      "mediators",
      JSON.stringify({
        currentClicksCount: clicksCount,
        currentClicksMultiplier: clicksMultiplier,
        currentCost: cost
      })
    );
  }, 1000);
  return (
    <div className="clicker-container">
      <div className="clicker-text">
        <h1 className="clicker-text-title">Накликай себе новую гитару!</h1>
        <h3 className="clicker-text-description">
          За клики ты получаешь медиаторы, копи их и сможешь купить гитару!
        </h3>
      </div>
      <div className="clicker-content">
        <div className="clicker-content-image-container">
          <img
            className="clicker-content-image"
            onClick={() => {
              clicksCount += clicksMultiplier;
              setClicksSount(clicksCount);
            }}
            src="https://clipart-best.com/img/electric-guitar/electric-guitar-clip-art-7.png"
          />
        </div>

        <div className="upgrade">
          <div className="upgrade-information">
            <p>
              Кол-во медиаторов: <b>{clicksCount}</b>
            </p>
            Медиаторов за клик: <b>{clicksMultiplier}</b>{" "}
          </div>
          <Button
            variant="secondary"
            className="upgrade-button"
            onClick={() => {
              if (clicksCount >= cost) {
                clicksCount -= cost;
                clicksMultiplier += 10;
                cost += 15;
                setClicksSount(clicksCount);
                setClicksMultiplier(clicksMultiplier);
                setErr(false);
                setCost(cost);
              } else {
                setErr(true);
              }
            }}
          >
            <div className="upgrade-button-information">
              {" "}
              Улучшить (+10). Стоимость - {cost} медиаторов{" "}
            </div>
          </Button>

          <div className="err-msg">
            <span>
              {lowMoneyErr
                ? "У вас недостаточно медиаторов для покупки улучшения!"
                : ""}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
