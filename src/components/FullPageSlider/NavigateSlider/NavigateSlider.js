import React, { Children, useMemo } from "react";
import RangeSlider from "../../RangeSLider/RangeSlider";
import classes from "./NavigateSlider.module.scss";

export default function NavigateSlider({
  elements,
  onChange,
  externalControlIndex,
}) {
  const sliderDataSet = useMemo(() => {
    return Children.map(elements, (child, index) => {
      const range = (100 / elements.length) * (index + 1);
      const dot = (index * 100) / (elements.length - 1);
      return { ...child.props.rangeOptions, range, dot };
    }).filter((value) => value);
  }, [elements]);

  return (
    <RangeSlider
      currentDotIndex={externalControlIndex}
      className={classes.NavigateSlider}
      dataList={sliderDataSet}
      onChange={(sliderValue, indexValue) => onChange(indexValue)}
    />
  );
}
