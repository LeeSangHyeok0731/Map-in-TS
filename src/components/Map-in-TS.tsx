import { useEffect, useState } from "react";
import MakeMap from "../logic/makdMap";

export default function MapInTS() {
  const [item, setItem] = useState<Map<number, string>>(new Map());
  useEffect(() => {
    setItem(MakeMap());
  }, []);

  return (
    <>
      <div>
        {Array.from(item.entries()).map((value, key) => {
          return (
            <h1>
              {key} = {value}
            </h1>
          );
        })}
      </div>
    </>
  );
}
