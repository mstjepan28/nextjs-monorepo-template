import { useState } from 'react';

export const CountButton = () => {
  const [count, setCount] = useState(0);
  return (
    <button className="w-[10rem] py-1 text-gray-600 rounded-lg border bg-gray-200 hover:border-gray-600" onClick={() => setCount(count + 1)}>
      Count: { count }
    </button>
  )
}