// import React, { useEffect, useRef } from "react";

// const SplineViewer = ({ url, onLoad }) => {
//   const splineRef = useRef(null);

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.type = "module";
//     script.src = "https://unpkg.com/@splinetool/viewer@1.9.6/build/spline-viewer.js";
//     document.body.appendChild(script);

//     // Set up the Spline API after the script loads
//     script.onload = () => {
//       if (splineRef.current) {
//         // Listen for the load event to ensure the scene is ready
//         splineRef.current.addEventListener("load", (event) => {
//           const spline = event.detail; // Spline instance
//           if (onLoad) {
//             onLoad(spline); // Callback to parent component with Spline instance
//           }
//         });
//       }
//     };

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, [url, onLoad]);

//   return <spline-viewer ref={splineRef} url={url}  />;
// };

// export default SplineViewer;


import React, { useEffect, useRef } from "react";

const SplineViewer = ({ url, onLoad }) => {
  const splineRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://unpkg.com/@splinetool/viewer@1.9.6/build/spline-viewer.js";
    document.body.appendChild(script);

    script.onload = () => {
      if (splineRef.current) {
        splineRef.current.addEventListener("load", (event) => {
          const spline = event.detail; // Spline instance
          if (onLoad) {
            onLoad(spline); // Callback to parent component with Spline instance
          }
        });
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, [url, onLoad]);

  return (
    <spline-viewer
      ref={splineRef}
      url={url}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    />
  );
};

export default SplineViewer;
