import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton: React.FC = (props) => (
  <ContentLoader
    speed={3}
    width="13rem"
    height="27rem"
    viewBox="0 0 208 432"
    backgroundColor="#f5f0d6"
    foregroundColor="#fcfcfc"
    {...props}
  >
    <rect x="39" y="4" rx="0" ry="0" width="134" height="211" />
    <rect x="19" y="247" rx="0" ry="0" width="175" height="31" />
    <rect x="19" y="293" rx="0" ry="0" width="175" height="30" />
    <rect x="19" y="338" rx="0" ry="0" width="177" height="30" />
  </ContentLoader>
)

export default Skeleton