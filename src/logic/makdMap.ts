const MakeMap = () => {
  const map = new Map();

  for (let i = 0; i < 100; i++) {
    map.set(i, `${i}`);
  }

  return map;
};

export default MakeMap;
