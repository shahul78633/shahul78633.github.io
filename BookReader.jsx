import { useState } from "react";
import { OrbitControls } from "@react-three/drei";
import Page from "./Page";

export default function BookReader() {
  const TOTAL_PAGES = 300; // change if needed

  // left page number
  const [page, setPage] = useState(1);

  const canGoPrev = page > 1;
  const canGoNext = page + 1 <= TOTAL_PAGES;

  const nextPage = () => {
    if (canGoNext) {
      setPage((prev) => prev + 2); // move forward by 2 pages
    }
  };

  const prevPage = () => {
    if (canGoPrev) {
      setPage((prev) => prev - 2); // move backward by 2 pages
    }
  };

  return (
    <>
      {/* UI Overlay */}
      <div
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          zIndex: 10,
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <h2>3D Book Reader</h2>
        <p>
          Page {page} – {Math.min(page + 1, TOTAL_PAGES)} of {TOTAL_PAGES}
        </p>
      </div>

      {/* Buttons */}
      <div
        style={{
          position: "absolute",
          bottom: "30px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "12px",
          zIndex: 10,
        }}
      >
        <button
          onClick={prevPage}
          disabled={!canGoPrev}
          style={{
            padding: "10px 20px",
            borderRadius: "8px",
            border: "1px solid #555",
            background: canGoPrev ? "#222" : "#444",
            color: "white",
            cursor: canGoPrev ? "pointer" : "not-allowed",
          }}
        >
          ◀ Previous
        </button>

        <button
          onClick={nextPage}
          disabled={!canGoNext}
          style={{
            padding: "10px 20px",
            borderRadius: "8px",
            border: "1px solid #555",
            background: canGoNext ? "#222" : "#444",
            color: "white",
            cursor: canGoNext ? "pointer" : "not-allowed",
          }}
        >
          Next ▶
        </button>
      </div>

      {/* Lights */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 6, 8]} intensity={1.1} />

      {/* Left Page */}
      <Page
        pageNumber={page}
        position={[-1.3, 0, 0]}
        rotation={[0, 0.05, 0]}
      />

      {/* Right Page */}
      {page + 1 <= TOTAL_PAGES && (
        <Page
          pageNumber={page + 1}
          position={[1.3, 0, 0]}
          rotation={[0, -0.05, 0]}
        />
      )}

      <OrbitControls enablePan={false} />
    </>
  );
}
