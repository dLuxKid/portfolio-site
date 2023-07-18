import React from "react";
import styles from "@/styles/avatar.module.css";

export default function Avatar() {
  return (
    <div className="w-[80vmin] h-[80vmin] md:w-[40vmin] md:h-[40vmin] relative">
      <div className={styles.spinContainer}>
        <div className={styles.shape}>
          <div className={styles.bd}></div>
        </div>
      </div>
    </div>
  );
}
