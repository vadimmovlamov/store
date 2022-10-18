import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadPokemonDetails } from "../redusers";
import { isPokemonSelectorDetails } from "../../../selectors";

const GoodsContainer = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { pokemonInfo } = useSelector(isPokemonSelectorDetails);
  useEffect(() => {
    dispatch(loadPokemonDetails(id));
  }, [id]);
  return (
    <div>
      <div>Hello {pokemonInfo?.name}!</div>
      <h1>stats</h1>

      <div>
        {pokemonInfo.stats.map((stat) => {
          return (
            <div key={stat.stat.url}>
              {`${stat.stat.name} - ${stat.base_stat}`}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GoodsContainer;
