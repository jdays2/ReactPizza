import React from "react";
import ContentLoader from "react-content-loader";

const PizzaBlockSkeleton: React.FC = () => (
  <ContentLoader
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="139" cy="131" r="117" />
    <rect x="0" y="263" rx="10" ry="10" width="280" height="32" />
    <rect x="5" y="320" rx="10" ry="10" width="264" height="73" />
    <rect x="11" y="422" rx="10" ry="10" width="90" height="33" />
    <rect x="139" y="417" rx="15" ry="15" width="135" height="41" />
  </ContentLoader>
);

export default PizzaBlockSkeleton;
