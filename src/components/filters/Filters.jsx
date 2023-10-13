import "./filter.scss";
import Filter from "./Filter";
import Select from "../select/Select";
import { useState } from "react";

const data = [
  {
    name: "Бренд 1",
    amount: 22,
    id: 1,
  },
  {
    name: "Бренд 2",
    amount: 22,
    id: 2,
  },
  {
    name: "Бренд 3",
    amount: 22,
    id: 3,
  },
  {
    name: "Бренд 4",
    amount: 22,
    id: 4,
  },
  {
    name: "Бренд 5",
    amount: 22,
    id: 5,
  },
  {
    name: "Бренд 6",
    amount: 22,
    id: 6,
  },
  {
    name: "Бренд 7",
    amount: 22,
    id: 7,
  },
  {
    name: "Бренд 8",
    amount: 22,
    id: 8,
  },
  {
    name: "Бренд 9",
    amount: 22,
    id: 9,
  },
  {
    name: "Бренд 10",
    amount: 22,
    id: 10,
  },
];

const price = [0, 5000];
const diaIn = [0, 1000];
const diaEx = [0, 230];
const height = [0, 3000];
function Filters() {
  const [values, setValues] = useState(price);
  const [outDia, setOutDia] = useState(diaIn);
  const [intDia, setIntDia] = useState(diaEx);
  const [width, setWidth] = useState(height);

  const handleReset = () => {
    setValues(price);
  };

  const handleChangeMin = (e) => {
    if (e >= values[1]) {
      setValues([values[1], values[1]]);
    } else {
      setValues([e, values[1]]);
    }
  };
  const handleChangeMax = (e) => {
    if (e <= values[0]) {
      setValues([values[0], values[0]]);
    } else {
      setValues([values[0], e]);
    }
  };
  return (
    <aside className="filters">
      <div className="filters__wrapper">
        <header className="filters__header">
          <h3>Фильтры</h3>
          <button className="reset" type="reset" onClick={() => handleReset()}>
            Сбростить
          </button>
        </header>
        <Filter
          handleChangeMin={handleChangeMin}
          handleChangeMax={handleChangeMax}
          title={"Цена, р"}
          values={values}
          setValues={setValues}
          disabled={false}
          MIN={price[0]}
          MAX={price[1]}
        />
        <Filter
          handleChangeMin={handleChangeMin}
          handleChangeMax={handleChangeMax}
          values={outDia}
          setValues={setValues}
          title={"Наружний диаметр, мм"}
          MIN={outDia[0]}
          MAX={outDia[1]}
          disabled={true}
        />
        <Filter
          handleChangeMin={handleChangeMin}
          handleChangeMax={handleChangeMax}
          values={intDia}
          setValues={setValues}
          title={"Внутренний диаметр, мм"}
          MIN={intDia[0]}
          MAX={intDia[1]}
          disabled={true}
        />
        <Filter
          handleChangeMin={handleChangeMin}
          handleChangeMax={handleChangeMax}
          values={width}
          setValues={setValues}
          title={"Ширина, мм"}
          MIN={width[0]}
          MAX={width[1]}
          disabled={true}
        />
        <Select data={data} title={"Бренд"} />
        <Select data={data} title={"Материал"} />
      </div>
      <div className="filters__buttons">
        <button className="filters__buttons_button submit" type="submit">
          Применить
        </button>
        <button
          onClick={handleReset}
          className="filters__buttons_button reset"
          type="reset">
          Сбросить
        </button>
      </div>
    </aside>
  );
}

export default Filters;
