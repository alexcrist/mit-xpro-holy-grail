import { useState, useEffect } from 'react';
import styles from './Counter.module.css';

const Counter = ({ dataKey }) => {

  const [value, setValue] = useState(0);

  const fetchData = async () => {
    const rawData = await fetch(`http://localhost:3001/data/${dataKey}`);
    const data = await rawData.json();
    setValue(data);
  };

  const setData = async (newValue) => {
    await fetch(`http://localhost:3001/data/${dataKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ newValue })
    });
    await fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onClickIncrement = () => {
    setData(value + 1);
  };

  const onClickDecrement = () => {
    setData(value - 1);
  };

  return (
    <div className={styles.counter}>
      Counter: {dataKey}
      <div className={styles.value}>
        Value: {value}
      </div>
      <button onClick={onClickIncrement}>
        Increment
      </button>
      <button onClick={onClickDecrement}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;