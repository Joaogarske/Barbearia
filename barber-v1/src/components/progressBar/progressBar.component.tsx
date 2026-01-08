import { useEffect, useState } from "react";
import styles from "./progressBar.module.css";

interface ProgressBarProps {
  progress: number;
}

export const ProgressBar = ({ progress }: ProgressBarProps) => {
  const [status, setStatus] = useState(1);
  useEffect(() => {
    setStatus(progress);
  }, [progress]);

  return (
    <div>
      <div className={styles.progress_container}>
        <div>
          <label htmlFor="">Serviços</label>
          <div
            className={`
                ${styles.circle}    
                ${status >= 1 ? styles.active : styles.default}
            `}
          ></div>
        </div>
        <div>
          <label htmlFor="">Barbeiros</label>
          <div
            className={` 
                 ${styles.circle}  
          ${status >= 2 ? styles.active : styles.default}
            `}
          ></div>
        </div>
        <div>
          <label htmlFor="">Horários</label>
          <div
            className={`
                 ${styles.circle}  
            ${status === 3 ? styles.active : styles.default}
            `}
          ></div>
        </div>
      </div>
    </div>
  );
};
