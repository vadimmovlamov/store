import { useState } from "react";
import { ItemsTable } from "../components";

const BasketContainer = () => {
  const [items, setItems] = useState();
  const result = items.reduce(
    (previousValue, currentItem) =>
      previousValue + currentItem.price * currentItem.count,
    0
  );
  const EmptyTemplate = (
    <div className="empty-text">У вас нет еще товаров в корзине</div>
  );
  const Footer = (
    <div className="result-panel">
      <span>
        Общая стоимость: <span className="value">{result} р.</span>
      </span>
      <button>Оформить</button>
    </div>
  );

  const handleRemoveItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleIncreaceCount = (id) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          item.count++;
        }
        return item;
      })
    );
  };

  const handleDecreaceCount = (id, count) => {
    if (count < 2) {
      handleRemoveItem(id);
    } else {
      setItems(
        items.map((item) => {
          if (item.id === id) {
            item.count--;
          }
          return item;
        })
      );
    }
  };

  return (
    <>
      <h1>Корзина</h1>
      {items.length ? (
        <ItemsTable
          items={items}
          removeItem={handleRemoveItem}
          increaceCount={handleIncreaceCount}
          decreaceCount={handleDecreaceCount}
        />
      ) : (
        EmptyTemplate
      )}
      {!!items.length && Footer}
    </>
  );
};

export default BasketContainer;
