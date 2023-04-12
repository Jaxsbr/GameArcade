import { FunctionComponent } from "react";
import { ArcadeImageSizeType } from "../types/ArcadeImageSizeType";

const ArcadeImage: FunctionComponent<ArcadeImageSizeType> = ({
    width, height}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      version="1.1"
      viewBox="0 0 2245.333 4506.667"
    >
      <defs>
        <filter
          id="filter9974"
          width="1.142"
          height="1.067"
          x="-0.071"
          y="-0.034"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur
            result="result6"
            stdDeviation="49.304"
          ></feGaussianBlur>
          <feComposite
            in="SourceGraphic"
            in2="result6"
            operator="atop"
            result="result8"
          ></feComposite>
          <feComposite
            in="result8"
            in2="SourceAlpha"
            operator="over"
            result="result9"
          ></feComposite>
          <feColorMatrix
            result="result10"
            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"
          ></feColorMatrix>
          <feBlend in="result10" in2="result6" mode="normal"></feBlend>
        </filter>
        <filter
          id="filter9977"
          width="1.051"
          height="1.024"
          x="-0.026"
          y="-0.012"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation="10.863"></feGaussianBlur>
        </filter>
      </defs>
      <g fill="#b4a9e5" fillOpacity="1" strokeOpacity="1">
        <path
          fillOpacity="1"
          stroke="#000"
          strokeWidth="10"
          d="M836.644 3148.198l547.7 4.312-17.25 429.104-528.293-2.156z"
          opacity="0.498"
        ></path>
        <path
          fillOpacity="0"
          stroke="#000"
          strokeDasharray="none"
          strokeWidth="50"
          d="M79.21 110.68l2025.893 12.198-2.526 415.774s-339.754 1166.937-51.624 2052.509l-162.4 1786.248-1559.556 9.889-158.303-1824.846S434.12 1619.21 96.46 534.34z"
          display="inline"
          filter="url(#filter9974)"
        ></path>
        <path
          fillOpacity="0"
          stroke="#fff"
          strokeDasharray="none"
          strokeWidth="50"
          d="M79.286 109.78L2105.18 121.98l-2.527 415.774S1762.9 1704.69 2051.03 2590.262L1888.63 4376.51 329.073 4386.4 170.77 2561.553S434.198 1618.311 96.537 533.44z"
          display="inline"
          filter="url(#filter9977)"
        ></path>
        <path
          fillOpacity="1"
          stroke="#000"
          strokeWidth="10"
          d="M200.536 2637.155l1817.76-6.47-150.94 1725.04-1515.88 6.47z"
          opacity="0.498"
        ></path>
        <path
          fillOpacity="1"
          stroke="#000"
          strokeDasharray="none"
          strokeWidth="20"
          d="M2038.091 2621.28l-1847.576 7.743s-7.94-25.855-1.46-68.929l1842.73-3.354s7.831 21.085 6.306 64.54z"
          opacity="0.498"
        ></path>
        <path
          fillOpacity="1"
          stroke="#000"
          strokeDasharray="none"
          strokeWidth="10"
          d="M208.889 2543.257l108.256-213.463 1575.05-4.574 125.028 219.561z"
          opacity="0.498"
        ></path>
        <path
          fillOpacity="1"
          stroke="#000"
          strokeWidth="10"
          d="M2061.964 569.357l-238.382 302.79 73.187 1457.647 112.83 195.166s-264.07-747.98 52.365-1955.603z"
          opacity="0.498"
        ></path>
        <path
          fillOpacity="1"
          stroke="#000"
          strokeWidth="10"
          d="M137.226 570.25l225.66 283.601-33.543 1463.745-128.078 234.809s256.155-930.088-64.039-1982.154z"
          opacity="0.498"
        ></path>
        <path
          fillOpacity="1"
          stroke="#000"
          strokeWidth="10"
          d="M375.196 864.676l1449.034 4.313 66.845 1457.658-1565.474-2.156z"
          opacity="0.498"
        ></path>
        <path
          fillOpacity="1"
          stroke="#000"
          strokeWidth="10"
          d="M140.16 562.794l228.567 301.882h1453.346l230.724-291.1z"
          opacity="0.498"
        ></path>
        <path
          fillOpacity="1"
          stroke="#000"
          strokeWidth="10"
          d="M140.16 515.356l-2.157 47.438 1916.95 8.625v-51.75z"
          opacity="0.498"
        ></path>
        <path
          fillOpacity="1"
          stroke="#000"
          strokeWidth="10"
          d="M2033.995 190.592l25.92-41.93h20.585v385.757l-12.198 40.406-10.673-3.812-1.525-55.653-16.772-1.525z"
          opacity="0.498"
        ></path>
        <path
          fillOpacity="1"
          stroke="#000"
          strokeWidth="10"
          d="M166.035 194.067l-23.72-58.22-30.187-6.469 10.781 407.54 17.25 30.189-2.156-58.22 36.657 6.469z"
          opacity="0.498"
        ></path>
        <path
          fillOpacity="1"
          stroke="#000"
          strokeWidth="10"
          d="M140.16 133.69l1921.263 12.938-25.876 45.283-1871.668-6.47z"
          opacity="0.498"
        ></path>
        <path
          fillOpacity="1"
          stroke="#000"
          strokeDasharray="none"
          strokeWidth="10"
          d="M159.566 191.91l1873.825-4.312 2.156 329.914-1863.043-2.156z"
          opacity="0.498"
        ></path>
      </g>
    </svg>
  );
}

export default ArcadeImage;