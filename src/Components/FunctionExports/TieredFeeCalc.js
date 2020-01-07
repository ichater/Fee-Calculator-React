const tierOne = i => {
  const t1 = (i * 0.004).toFixed(2);
  if (t1 === 0) {
    return 0;
  } else if (t1 < 375 && t1 > 0) {
    return 375;
  } else if (t1 > 800) {
    return 800;
  } else {
    return t1;
  }
};
const tierTwo = i => {
  const t2 = ((i - 200000) * 0.0015).toFixed(2);
  if (i <= 200000) {
    return 0;
  } else if (i >= 200000 && i < 500000) {
    return t2;
  } else {
    return 450;
  }
};

const tierThree = i => {
  if (i < 500000) {
    return 0;
  } else if ((i - 500000) * 0.0003 > 1150) {
    return 1150;
  } else {
    return ((i - 500000) * 0.0003).toFixed(2);
  }
};

export { tierOne, tierTwo, tierThree };
