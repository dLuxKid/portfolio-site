import React from "react";
import styles from "@/styles/avatar.module.css";

export default function Avatar() {
  return (
    <div className="w-[80vmin] h-[80vmin] md:w-[50vmin] md:h-[50vmin] relative mx-auto">
      <div className="w-full h-full relative p-1">
        <div className={styles.shape}>
          <div className={styles.bd}></div>
        </div>
      </div>
    </div>
  );
}
