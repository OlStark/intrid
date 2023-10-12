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

const MIN = 0;
const MAX = 5000;

function Filters() {
  const [values, setValues] = useState([MIN, MAX]);
  const handleReset = () => {
    console.log("reset");
  };

  const handleChangeMin = (e) => {
    if (e.target.value >= values[1]) {
      setValues([values[1], values[1]]);
    } else {
      setValues([e.target.value, values[1]]);
    }
  };
  const handleChangeMax = (e) => {
    if (e.target.value <= values[0]) {
      setValues([values[0], values[0]]);
    } else {
      setValues([values[0], e.target.value]);
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
          MIN={MIN}
          MAX={MAX}
        />
        {/* <Filter
          title={"Наружний диаметр, мм"}
          MIN={0}
          MAX={1000}
          disabled={true}
        />
        <Filter
          title={"Внутренний диаметр, мм"}
          MIN={0}
          MAX={230}
          disabled={true}
        />
        <Filter title={"Ширина, мм"} MIN={0} MAX={3000} disabled={true} /> */}
        <Select data={data} title={"Бренд"} />
        <Select data={data} title={"Материал"} />
      </div>
      <div className="filters__buttons">
        <button className="filters__buttons_button submit" type="submit">
          Применить
        </button>
        <button className="filters__buttons_button reset" type="reset">
          Сбросить
        </button>
      </div>
    </aside>
  );
}

export default Filters;
