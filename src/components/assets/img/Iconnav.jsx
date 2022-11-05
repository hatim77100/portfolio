import { stylesLg } from "@src/components/header/styles";

const style = {
  absolute: "absolute",
  right: "right-3",
  top: "top-2",
};

const Iconav = ({ onClick }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xlink="http://www.w3.org/1999/xlink"
      width="50"
      zoomAndPan="magnify"
      viewBox="0 0 45 44.999999"
      height="60"
      preserveAspectRatio="xMidYMid meet"
      version="1.0"
      alt="icone"
      className={`${style.absolute} ${style.right} ${style.top} ${stylesLg.hidden}`}
      onClick={onClick}
    >
      <defs>
        <clipPath id="d485a54d1d">
          <path
            d="M 6.152344 12.976562 L 39.152344 12.976562 L 39.152344 15 L 6.152344 15 Z M 6.152344 12.976562 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="48497e7acb">
          <path
            d="M 6.152344 21 L 39.152344 21 L 39.152344 24 L 6.152344 24 Z M 6.152344 21 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="6959c04341">
          <path
            d="M 6.152344 30 L 39.152344 30 L 39.152344 31.726562 L 6.152344 31.726562 Z M 6.152344 30 "
            clipRule="nonzero"
          />
        </clipPath>
      </defs>
      <g clipPath="url(#d485a54d1d)">
        <path
          strokeLinecap="round"
          transform="matrix(0.319276, 0, 0, 0.311462, -1.613857, -1.257014)"
          fill="none"
          strokeLinejoin="round"
          d="M 125.505377 47.756106 C 105.672925 47.831356 85.828238 47.969314 65.995786 47.981856 C 52.831246 47.981856 39.666707 47.831356 26.502167 47.756106 "
          stroke="#f1f1f1"
          strokeWidth="4"
          strokeOpacity="1"
          strokeMiterlimit="4"
        />
      </g>
      <g clipPath="url(#48497e7acb)">
        <path
          strokeLinecap="round"
          transform="matrix(0.319276, 0, 0, 0.311462, -1.613857, -1.257014)"
          fill="none"
          strokeLinejoin="round"
          d="M 125.505377 75.749107 C 105.672925 75.824357 85.828238 75.974857 65.995786 75.974857 C 52.831246 75.974857 39.666707 75.824357 26.502167 75.749107 "
          stroke="#f1f1f1"
          strokeWidth="4"
          strokeOpacity="1"
          strokeMiterlimit="4"
        />
      </g>
      <g clipPath="url(#6959c04341)">
        <path
          strokeLinecap="round"
          transform="matrix(0.319276, 0, 0, 0.311462, -1.613857, -1.257014)"
          fill="none"
          strokeLinejoin="round"
          d="M 125.505377 103.75465 C 105.672925 103.8299 85.828238 103.967858 65.995786 103.9804 C 52.831246 103.9804 39.666707 103.8299 26.502167 103.75465 "
          stroke="#f1f1f1"
          strokeWidth="4"
          strokeOpacity="1"
          strokeMiterlimit="4"
        />
      </g>
    </svg>
  );
};

export default Iconav;
