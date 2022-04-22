import { useState, useEffect } from "react";
import "./Shop.css";
import { FormText, Button, ListGroup, Form } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";

export function Shop({ goods }: any) {
  let [content, setContent] = useState<any>(goods);
  let [nameFilter, setNameFilter] = useState("");
  let [brands, setBrands] = useState<string[]>([]);
  let rating = 0;
  let min = 0;
  let max = 0;

  let currentMediators = JSON.parse(localStorage.getItem("mediators"));
  let collection = JSON.parse(localStorage.getItem("collection"));

  return (
    <div className="shop-container">
      <div className="search-input-block">
        <div className="shop-title">Поиск по названию</div>

        <Form.Control
          placeholder="Введите название гитары здесь..."
          type="text"
          className="find-input"
          value={nameFilter}
          onChange={(e) => {
            setNameFilter(e.target.value.toUpperCase());
          }}
        />
        <Button
          variant="dark"
          className="find-button"
          onClick={() => {
            content = [];
            let elements = document.getElementsByTagName("input");
            Array.from(elements).forEach((item, index: number) => {
              if (item.type == "checkbox") {
                item.checked = false;
              }
            });
            goods.map((item, index: number) => {
              if (item.name.toUpperCase().includes(nameFilter)) {
                content.push(item);
              }
            });
            setContent([...content]);
          }}
        >
          Найти
        </Button>
      </div>

      <div className="shop-filters-content">
        <div className="shop-filters">
          <div className="cost-filter filter">
            <span className="filter_title">Цена</span>
            <ListGroup className="cost-list">
              <ListGroup.Item className="cost-list-item">
                <label className="cost-list-item">
                  <input
                    type="radio"
                    name="cost"
                    data-min="10000"
                    data-max="49999"
                    onChange={(e) => {
                      min = 0;
                      max = Infinity;
                    }}
                  />
                  <div className="cost-list-name"> Все цены </div>
                </label>
              </ListGroup.Item>
              <ListGroup.Item className="cost-list-item">
                <label className="cost-list-item">
                  <input
                    type="radio"
                    name="cost"
                    data-min="10000"
                    data-max="49999"
                    onChange={(e) => {
                      if (!e.target.checked) {
                        min = 0;
                        max = 0;
                      } else {
                        min = parseInt(
                          e.target.attributes.getNamedItem("data-min")?.value ||
                            "0"
                        );
                        max = parseInt(
                          e.target.attributes.getNamedItem("data-max")?.value ||
                            "0"
                        );
                      }
                    }}
                  />
                  <div className="cost-list-name"> 10 000 - 49 999 тг </div>
                </label>
              </ListGroup.Item>
              <ListGroup.Item className="cost-list-item">
                <label className="cost-list-item">
                  <Form.Check
                    type="radio"
                    name="cost"
                    data-min="50000"
                    data-max="99999"
                    onChange={(e) => {
                      if (!e.target.checked) {
                        min = 0;
                        max = 0;
                      } else {
                        min = parseInt(
                          e.target.attributes.getNamedItem("data-min")?.value ||
                            "0"
                        );
                        max = parseInt(
                          e.target.attributes.getNamedItem("data-max")?.value ||
                            "0"
                        );
                      }
                    }}
                  />
                  <div className="cost-list-name"> 50 000 - 99 999 тг </div>
                </label>
              </ListGroup.Item>
              <ListGroup.Item className="cost-list-item">
                <label className="cost-list-item">
                  <Form.Check
                    type="radio"
                    name="cost"
                    data-min="100000"
                    data-max="149999"
                    onChange={(e) => {
                      if (!e.target.checked) {
                        min = 0;
                        max = 0;
                      } else {
                        min = parseInt(
                          e.target.attributes.getNamedItem("data-min")?.value ||
                            "0"
                        );
                        max = parseInt(
                          e.target.attributes.getNamedItem("data-max")?.value ||
                            "0"
                        );
                      }
                    }}
                  />
                  <div className="cost-list-name"> 100 000 - 149 999 тг </div>
                </label>
              </ListGroup.Item>
              <ListGroup.Item className="cost-list-item">
                <label className="cost-list-item">
                  <Form.Check
                    type="radio"
                    name="cost"
                    data-min="150000"
                    data-max="199999"
                    onChange={(e) => {
                      if (!e.target.checked) {
                        min = 0;
                        max = 0;
                      } else {
                        min = parseInt(
                          e.target.attributes.getNamedItem("data-min")?.value ||
                            "0"
                        );
                        max = parseInt(
                          e.target.attributes.getNamedItem("data-max")?.value ||
                            "0"
                        );
                      }
                    }}
                  />
                  <div className="cost-list-name"> 150 000 - 199 999 тг </div>
                </label>
              </ListGroup.Item>
              <ListGroup.Item className="cost-list-item">
                <label className="cost-list-item">
                  <Form.Check
                    type="radio"
                    name="cost"
                    data-min="200000"
                    data-max="499999"
                    onChange={(e) => {
                      if (!e.target.checked) {
                        min = 0;
                        max = 0;
                      } else {
                        min = parseInt(
                          e.target.attributes.getNamedItem("data-min")?.value ||
                            "0"
                        );
                        max = parseInt(
                          e.target.attributes.getNamedItem("data-max")?.value ||
                            "0"
                        );
                      }
                    }}
                  />
                  <div className="cost-list-name"> 200 000 - 499 999 тг </div>
                </label>
              </ListGroup.Item>
              <ListGroup.Item className="cost-list-item">
                <label className="cost-list-item">
                  <Form.Check
                    type="radio"
                    name="cost"
                    data-min="500000"
                    onChange={(e) => {
                      if (!e.target.checked) {
                        min = 0;
                        max = 0;
                      } else {
                        min = parseInt(
                          e.target.attributes.getNamedItem("data-min")?.value ||
                            "0"
                        );
                        max = Infinity;
                      }
                    }}
                  />
                  <div className="cost-list-name"> более 500 000 тг </div>
                </label>
              </ListGroup.Item>
            </ListGroup>
          </div>

          <div className="brand-filter filter">
            <span className="filter_title">Бренд</span>
            <ListGroup className="brand-list">
              {goods.map((item, index: number) => {
                if (item.brand !== goods[index + 1]?.brand) {
                  return (
                    <ListGroup.Item key={index}>
                      <label className="cost-list-item">
                        <Form.Check
                          className="brand-list-item"
                          type="checkbox"
                          value={item.brand}
                          onChange={(e) => {
                            if (e.target.checked) {
                              brands.push(e.target.value);
                              setBrands([...brands]);
                              console.log(brands);
                            } else {
                              brands.splice(brands.indexOf(e.target.value), 1);
                              setBrands([...brands]);
                              console.log(brands);
                            }
                          }}
                        />
                        <span className="brand-list-name">{item.brand}</span>
                      </label>
                    </ListGroup.Item>
                  );
                }
              })}
            </ListGroup>
          </div>

          <div className="rating-filter filter">
            <span className="filter_title">Рейтинг</span>
            <ListGroup className="rating-list">
              <ListGroup.Item className="rating-list-item">
                <div
                  className="rating-row"
                  onClick={(e) => {
                    let block = e.target as HTMLElement;
                    if (
                      document.getElementsByClassName("rating-list-item-active")
                        .length > 0
                    ) {
                      Array.from(
                        document.getElementsByClassName(
                          "rating-list-item-active"
                        )
                      ).forEach((item) => {
                        item.classList.remove("rating-list-item-active");
                      });
                    }
                    block.classList.add("rating-list-item-active");
                    rating = 4;
                  }}
                  style={{
                    backgroundImage:
                      'url("https://github.com/XakerCool/rating-stars/blob/main/4_stars.jpg?raw=true")',
                    height: 40,
                    width: 200,
                    backgroundRepeat: "no-repeat",
                    // border: "none",
                    cursor: "pointer"
                  }}
                />
              </ListGroup.Item>
              <ListGroup.Item className="rating-list-item">
                <div
                  className="rating-row"
                  onClick={(e) => {
                    let block = e.target as HTMLElement;
                    if (
                      document.getElementsByClassName("rating-list-item-active")
                        .length > 0
                    ) {
                      Array.from(
                        document.getElementsByClassName(
                          "rating-list-item-active"
                        )
                      ).forEach((item) => {
                        item.classList.remove("rating-list-item-active");
                      });
                    }
                    block.classList.add("rating-list-item-active");
                    rating = 3;
                  }}
                  style={{
                    backgroundImage:
                      'url("https://github.com/XakerCool/rating-stars/blob/main/3_stars.jpg?raw=true")',
                    height: 40,
                    width: 200,
                    backgroundRepeat: "no-repeat",
                    cursor: "pointer"
                  }}
                />
              </ListGroup.Item>
              <ListGroup.Item className="rating-list-item">
                <div
                  className="rating-row"
                  onClick={(e) => {
                    let block = e.target as HTMLElement;
                    if (
                      document.getElementsByClassName("rating-list-item-active")
                        .length > 0
                    ) {
                      Array.from(
                        document.getElementsByClassName(
                          "rating-list-item-active"
                        )
                      ).forEach((item) => {
                        item.classList.remove("rating-list-item-active");
                      });
                    }
                    block.classList.add("rating-list-item-active");
                    rating = 2;
                  }}
                  style={{
                    backgroundImage:
                      'url("https://github.com/XakerCool/rating-stars/blob/main/2_stars.jpg?raw=true")',
                    height: 40,
                    width: 200,
                    backgroundRepeat: "no-repeat",
                    cursor: "pointer"
                  }}
                />
              </ListGroup.Item>
              <ListGroup.Item className="rating-list-item">
                <div
                  className="rating-row"
                  onClick={(e) => {
                    let block = e.target as HTMLElement;
                    if (
                      document.getElementsByClassName("rating-list-item-active")
                        .length > 0
                    ) {
                      Array.from(
                        document.getElementsByClassName(
                          "rating-list-item-active"
                        )
                      ).forEach((item) => {
                        item.classList.remove("rating-list-item-active");
                      });
                    }
                    block.classList.add("rating-list-item-active");
                    rating = 1;
                  }}
                  style={{
                    backgroundImage:
                      'url("https://github.com/XakerCool/rating-stars/blob/main/1_star.jpg?raw=true")',
                    height: 40,
                    width: 200,
                    backgroundRepeat: "no-repeat",
                    cursor: "pointer"
                  }}
                />
              </ListGroup.Item>
            </ListGroup>
          </div>
          <Button
            className="filter-button"
            variant="light"
            onClick={(e) => {
              content = [];
              goods.forEach((item, index: number) => {
                if (brands.length != 0 && brands.indexOf(item.brand) > -1) {
                  content.push(item);
                }
                if (rating > 0 && item.rating >= rating) {
                  content.push(item);
                }
                if (max > 0 && item.cost <= max && item.cost >= min) {
                  content.push(item);
                }
              });
              setContent([...content]);
            }}
          >
            Применить фильтры
          </Button>
          <Button
            className="filter-button"
            variant="secondary"
            onClick={(e) => {
              content = [];
              rating = 0;
              let elements = document.getElementsByTagName("input");
              Array.from(elements).forEach((item, index: number) => {
                if (item.type === "checkbox" || item.type === "radio") {
                  item.checked = false;
                }
              });
              goods.forEach((item) => content.push(item));
              Array.from(
                document.getElementsByClassName("rating-list-item-active")
              ).forEach((item) => {
                item.classList.remove("rating-list-item-active");
              });
              setContent([...content]);
            }}
          >
            Сбросить фильтры
          </Button>
        </div>
        <div className="shop-content">
          {content.map((item, index: number) => {
            return (
              <Card className="good" key={index}>
                <img src={item.src} className="good__img" />
                <Card.Title className="good__name">{item.name}</Card.Title>
                <Card.Text className="good__brand">{item.brand}</Card.Text>
                <Card.Text className="good__cost">{item.cost}</Card.Text>
                <span className="good__rating ">
                  {item.rating}
                  <i className="bi bi-star-fill"></i>
                </span>
                <Button
                  variant="secondary"
                  className="good__buy_button"
                  onClick={() => {
                    if (currentMediators.currentClicksCount >= item.cost) {
                      currentMediators.currentClicksCount -= item.cost;
                      localStorage.setItem(
                        "mediators",
                        JSON.stringify(currentMediators)
                      );
                      if (!collection) {
                        localStorage.setItem(
                          "collection",
                          JSON.stringify([item])
                        );
                      } else {
                        collection.push(item);
                        localStorage.setItem(
                          "collection",
                          JSON.stringify(collection)
                        );
                      }
                    } else {
                      alert(
                        "У вас недостаточно медиаторов для покупки гитары! Заработать медиаторы можно в кликере"
                      );
                    }
                  }}
                >
                  Купить
                </Button>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}

//TODO: фильтр, поле поиска по названию, сортировка по рейтингу, цене (мин, макс. макс, мин)
