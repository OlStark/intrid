import "./filter.scss";
import styled from "styled-components";
import ReactSlider from "react-slider";

function Filter({
  title,
  disabled,
  handleChangeMin,
  handleChangeMax,
  values,
  setValues,
  MIN,
  MAX,
}) {
  const StyledTrackFalse = styled.div`
    top: 0;
    bottom: 0;
    background: #a5b5d4;
    border-radius: 999px;
  `;

  const StyledTrack = styled.div`
    top: 0;
    bottom: 0;
    background: ${(props) =>
      props.index === 2 ? "#fff" : props.index === 1 ? "#4B6AA9" : "#fff"};
    border-radius: 999px;
  `;

  const Track = (props, state) =>
    disabled ? (
      <StyledTrackFalse {...props} index />
    ) : (
      <StyledTrack {...props} index={state.index} />
    );
  return (
    <>
      <section className="filtres__price">
        <p>{title}</p>
        <div className="filtres__price_inputs">
          <label className="filters__price_label from">
            <span className="filter__price_text">от</span>
            <input
              type="number"
              value={values[0]}
              placeholder={values[0]}
              onChange={(e) => handleChangeMin(e.target.value)}
              disabled={disabled}
            />
          </label>
          <label className="filters__price_label to">
            <span className="filter__price_text">до</span>
            <input
              type="number"
              value={values[1]}
              placeholder={values[1]}
              onChange={(e) => handleChangeMax(e.target.value)}
              disabled={disabled}
            />
          </label>
        </div>
        <ReactSlider
          renderTrack={Track}
          withTracks={true}
          className="slider"
          onChange={setValues}
          value={values}
          min={MIN}
          max={MAX}
          disabled={disabled}
          thumbClassName={disabled ? "thumb disabled" : "thumb"}
        />
      </section>
    </>
  );
}

export default Filter;
