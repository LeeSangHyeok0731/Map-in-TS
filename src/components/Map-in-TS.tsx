import { useEffect, useState } from "react";
import MakeMap from "../logic/makdMap";

export default function MapInTS() {
  const [item, setItem] = useState<Map<number, string>>();
  useEffect(() => {
    setItem(MakeMap());
  }, []);

  return <>{item}</>;
}
