# React useEffect Infinite Loop Bug

This repository demonstrates a common React bug involving an infinite loop within the `useEffect` hook. The bug arises from incorrect state update logic within the `useEffect`'s callback function.  The solution showcases the proper way to handle state updates to prevent such issues.

## Bug Description

The `bug.js` file contains a `MyComponent` component that uses the `useState` hook to manage a counter. The `useEffect` hook is used to reset the counter to 0 when it exceeds 5. However, due to incorrect logic, this creates an infinite loop, constantly incrementing and resetting the counter, leading to performance issues.  The state updates continuously causing the effect to run continuously, even though its dependency array is supposed to stop the execution after a setCount.