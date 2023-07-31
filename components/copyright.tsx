import React, { useEffect, useState } from "react";

const CopyrightText = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 1000 * 60); // Update the year every minute (you can adjust the interval as needed)

    return () => clearInterval(interval);
  }, []);

  return (
    <p className="text-gray-300 text-center">
      © {currentYear} kelvinkumordzi. All rights reserved.
    </p>
  );
};

export default CopyrightText;
