import { useState, useEffect } from "react";

const numberOfPromises = 5;

const PromiseProgress = () => {
  const [progress, setProgress] = useState(0);
  const [completed, setCompleted] = useState(0);

  const createPromises = (x) => {
    const promises = [];
    for (let i = 0; i < x; i++) {
      promises.push(
        new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, Math.floor((i / x) * 10000));
        })
      );
    }

    return promises;
  };

  useEffect(() => {
    const promises = createPromises(numberOfPromises);
    let completed = 0;

    promises.forEach((promise) => {
      promise.then(() => {
        completed++;

        const newProgress = (completed / numberOfPromises) * 100;

        setCompleted(completed);
        setProgress(newProgress);
      });
    });
  }, []);

  return (
    <div>
      <h3>Progress Tracker</h3>
      <p>
        Completed: {completed} / {numberOfPromises}
      </p>
      <p>Total Progress: {progress}%</p>
    </div>
  );
};

export default PromiseProgress;
