import React from "react";

const icons = {
  search: {
    path:
      "M 15.0714 15.1026L 19.8441 19.8852C 20.1305 20.1721 20.035 20.6504 19.7487 20.9374C 19.4624 21.2243 18.9851 21.2243 18.6987 20.9374L 13.926 16.1548L 13.926 16.0591C 12.2078 17.3982 9.91687 18.0678 7.53052 17.6852C 2.75781 16.92 -0.583129 12.5199 0.0850842 7.64171C 0.848756 2.76341 5.33508 -0.584363 10.1078 0.0851923C 14.8805 0.85039 18.2214 5.25041 17.5532 10.1286C 17.2668 12.1374 16.4078 13.7634 15.0714 15.1026ZM 1.51697 7.83299C 0.944215 11.946 3.80786 15.6765 7.8169 16.2504C 11.8261 16.8243 15.6442 13.9548 16.2169 9.93737C 16.7897 5.82433 13.926 2.09386 9.91699 1.51995C 5.81238 0.946032 2.08972 3.8156 1.51697 7.83299Z",
    fillRule: "evenodd"
  }
  // google:
  //   "M522.2 438.8v175.6h290.4c-11.8 75.4-87.8 220.8-290.4 220.8-174.8 0-317.4-144.8-317.4-323.2s142.6-323.2 317.4-323.2c99.4 0 166 42.4 204 79l139-133.8c-89.2-83.6-204.8-134-343-134-283 0-512 229-512 512s229 512 512 512c295.4 0 491.6-207.8 491.6-500.2 0-33.6-3.6-59.2-8-84.8l-483.6-0.2z",
  // facebook:
  //   "M608 192h160v-192h-160c-123.514 0-224 100.486-224 224v96h-128v192h128v512h192v-512h160l32-192h-192v-96c0-17.346 14.654-32 32-32z",
  // twitter:
  //   "M1024 226.4c-37.6 16.8-78.2 28-120.6 33 43.4-26 76.6-67.2 92.4-116.2-40.6 24-85.6 41.6-133.4 51-38.4-40.8-93-66.2-153.4-66.2-116 0-210 94-210 210 0 16.4 1.8 32.4 5.4 47.8-174.6-8.8-329.4-92.4-433-219.6-18 31-28.4 67.2-28.4 105.6 0 72.8 37 137.2 93.4 174.8-34.4-1-66.8-10.6-95.2-26.2 0 0.8 0 1.8 0 2.6 0 101.8 72.4 186.8 168.6 206-17.6 4.8-36.2 7.4-55.4 7.4-13.6 0-26.6-1.4-39.6-3.8 26.8 83.4 104.4 144.2 196.2 146-72 56.4-162.4 90-261 90-17 0-33.6-1-50.2-3 93.2 59.8 203.6 94.4 322.2 94.4 386.4 0 597.8-320.2 597.8-597.8 0-9.2-0.2-18.2-0.6-27.2 41-29.4 76.6-66.4 104.8-108.6z"
};

export default props => (
  <svg width={props.width} height={props.height} viewBox="0 0 21 21">
    <path
      d={icons[props.icon].path}
      fillRule={icons[props.icon].fillRule}
      fill={props.fill}
    />
  </svg>
);
