// import React from "react";

// const Home: React.FC = () => {
//   return (
//     <div className="container mt-5">
//       <h2>Welcome to FootLive</h2>
//       <p>
//         Your one-stop destination for live football updates and detailed
//         statistics.
//       </p>
//     </div>
//   );
// };

// export default Home;

import React, { useEffect } from "react";

const Home: React.FC = () => {
  useEffect(() => {
    // Create a script element
    const script = document.createElement("script");
    script.src =
      "https://ls.soccersapi.com/widget/res/wo_w5314_66568b37933b3/widget.js";
    script.async = true;

    // Append the script to the document body
    document.body.appendChild(script);

    // Cleanup script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div
        id="ls-widget"
        data-w="wo_w5314_66568b37933b3"
        className="livescore-widget"
      ></div>
    </div>
  );
};

export default Home;
