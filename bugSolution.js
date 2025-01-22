```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic here using a cleanup function
    let cleanup = false;
    if (count > 5 && !cleanup) {
      setCount(0);
      cleanup = true;
    }
    return () => { cleanup = true };
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```