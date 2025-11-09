import React from "react";

const Loader = ({ size = "medium", text = "Loading..." }) => {
  const sizeClasses = {
    small: "w-6 h-6",
    medium: "w-12 h-12",
    large: "w-16 h-16",
    xlarge: "w-20 h-20",
  };
  return (
    <div className="flex flex-col items-center justify-center p-8">
      {/* Main Spinner */}
      <div className="relative">
        {/* Outer ring - #2f5349 */}
        <div
          className={`${sizeClasses[size]} border-4 border-[#f8f7fe] rounded-full`}
        ></div>

        {/* Animated spinner - #2f5349 and #ffd640 gradient */}
        <div
          className={`${sizeClasses[size]} border-4 border-transparent border-t-[#2f5349] border-r-[#ffd640] rounded-full absolute top-0 left-0 animate-spin`}
        ></div>

        {/* Inner dot - #ffd640 */}
        <div
          className={`${sizeClasses[size]
            .replace("w-", "w-")
            .replace(
              "h-",
              "h-"
            )} absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
        >
          <div className="w-1/4 h-1/4 bg-[#ffd640] rounded-full mx-auto mt-1/2"></div>
        </div>
      </div>

      {/* Loading text */}
      {text && (
        <p className="mt-4 text-[#2f5349] font-medium text-lg animate-pulse">
          {text}
        </p>
      )}
    </div>
  );
};

export default Loader;
