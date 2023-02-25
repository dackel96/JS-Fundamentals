function descendOrderCount(from, to) {
  if (to >= from) {
    let dribbler = to;
    to = from;
    from = dribbler;
  }
  for (let x = from; x >= to; x--) {
    console.log(x);
  }
}

descendOrderCount(1, 7);
