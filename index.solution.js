```javascript
// pages/index.js
import { useState, useEffect } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Simulate fetching data from server
    const fetchData = async () => {
      // Simulate delay for data fetching
      await new Promise(resolve => setTimeout(resolve, 1000));
      setCount(1);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <p>Count: {count}</p>      
    </div>
  );
}
```