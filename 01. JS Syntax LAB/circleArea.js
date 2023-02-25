function areaCalculator(radiusOfCircle) {
  let result = 0;
  if (typeof radiusOfCircle === "number") {
    result = (Math.pow(radiusOfCircle, 2) * Math.PI).toFixed(2);
    console.log(result);
  } else {
    console.log(
      `We can not calculate the circle area, because we receive a ${typeof radiusOfCircle}.`
    );
  }
}

areaCalculator(5);
