import "./Collection.css";
import Card from "react-bootstrap/Card";

export function Collection() {
  let collection = JSON.parse(localStorage.getItem("collection"));
  if (collection) {
    return (
      <div className="collection__container">
        {collection.map((item, index) => {
          return (
            <Card className="collection__card">
              <div className="collection__item guitar">
                <img
                  src={item.src}
                  className="collection__item__description item__img"
                />
                <Card.Title className="item__name">{item.name}</Card.Title>
                <Card.Text className="item__brand">{item.brand}</Card.Text>
                <Card.Text className="item__description">
                  {item.description}
                </Card.Text>
              </div>
            </Card>
          );
        })}
      </div>
    );
  } else {
    return (
      <div className="collection-noguitars">
        Пока что вы не купили ни одной гитары!
      </div>
    );
  }
}
