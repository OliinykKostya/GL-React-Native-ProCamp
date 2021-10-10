import * as React from 'react';
import Svg, {Circle, G, Path} from 'react-native-svg';

function MainIcon(props) {
  return (
    <Svg
      width={415}
      height={502}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M.5-1v382.053s32.235 68.735 115.112 60.758c82.877-7.976 100.065-50.935 200.131 28.238 0 0 35.3 33.136 99.757 31.918V-1H.5z"
        fill="#FAF8F5"
      />
    </Svg>
  );
}
export default MainIcon;
