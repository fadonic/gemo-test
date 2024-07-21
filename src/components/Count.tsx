import { useState } from "react";

export default function Count() {
  const [count, setCount] = useState<number>(0);

  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };

  return <button onClick={handleClick}>Count {count}</button>;
}
