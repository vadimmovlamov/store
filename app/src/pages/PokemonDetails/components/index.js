import { Link } from "react-router-dom";
import lowerCase from "lodash/lowerCase";
import startCase from "lodash/startCase";

import Spinner from "../../../components/Spinner";
import { ROUTE_NAMES } from "../../../routes/routeNames";
import ReplyAllOutlinedIcon from "@mui/icons-material/ReplyAllOutlined";
import SendIcon from "@mui/icons-material/Send";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import styles from "./styles.module.scss";
import Button from "@mui/material/Button";
// import * as React from "@types/react";
// import * as React from "@types/react";

const ProductDetails = ({ product, isLoading, error }) => {
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className={styles.wrapper}>
          {/*_________________________________________________*/}
          <div className={styles.header_wrapper}>
            <div className={styles.title}>{startCase(product.name)}</div>
            <div className={styles.price}>Price: {product.price} BYN</div>
          </div>
          <hr className={styles.line} />

          {/*_________________________________________________*/}
          <div className={styles.container}>
            <div className={styles.image_container}>
              <img
                className={styles.image_products}
                src={product.image}
                alt={product.name}
              />
            </div>

            <div>
              <div className={styles.statsContainer}>
                <h2 className={styles.title_stats}>Stats:</h2>

                {product.stats?.map((stat) => (
                  <div key={stat.title} className={styles.stats}>
                    <p className={styles.stat_type}>{stat.title}</p>
                    <p className={styles.stat_value}> {stat.value}</p>
                  </div>
                ))}
              </div>

              <div className={styles.price_box}>
                <div className={styles.price}>{product.price} BYN</div>

                <div className={styles.buy_container}>
                  <Button
                    style={{ marginBottom: 20 }}
                    variant="outlined"
                    startIcon={<ShoppingCartIcon />}
                  >
                    add to box
                  </Button>
                  <Button variant="contained" endIcon={<SendIcon />}>
                    buy pokemon
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/*_________________________________________________*/}
          <div className={styles.abilities_container}>
            <div className={styles.subtitle_abilities}>Abilities:</div>
            {product.abilities?.map((ability) => (
              <div key={ability.title} className={styles.ability}>
                {startCase(ability.title)} - {lowerCase(ability.description)}.
              </div>
            ))}

            {/*<button className={styles.button}>buy pokemon</button>*/}
          </div>

          {error && <div style={{ color: "red" }}>{error}</div>}

          <Link to={ROUTE_NAMES.SHOP} className={styles.link}>
            <ReplyAllOutlinedIcon style={{ fontSize: 60 }} />
          </Link>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
