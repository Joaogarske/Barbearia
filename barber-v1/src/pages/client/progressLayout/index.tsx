import { useState } from "react";
import { ProgressBar } from "../../../components/progressBar/progressBar.component";

export const ProgressLayout = () => {
  const [progress, seProgress] = useState(1);

  const beforeProgress = () => {
    seProgress(progress - 1);
  };

  const nextProgress = () => {
    seProgress(progress + 1);
  };

  return (
    <div>
      {/* componente de progress */}
      <ProgressBar progress={progress} />
      <button onClick={beforeProgress} disabled={progress === 1}>
        Anterior
      </button>

      <button onClick={nextProgress} disabled={progress === 3}>
        Próximo
      </button>

      {/* outlet */}
    </div>
  );
};
