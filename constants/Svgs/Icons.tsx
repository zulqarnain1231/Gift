type Props = {
  ClassName: string;
  stroke: string;
  fill: string;
};

export const GoldGift: React.FC<Props> = ({
  ClassName,
  stroke,
  fill,
}: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill={fill}
      stroke={stroke}
      className={ClassName}
    >
      <path
        d="M23.1007 3.4695C25.8221 0.832498 30.375 2.77087 30.375 6.57787C30.375 7.05487 30.2366 7.50037 29.997 7.875H31.1186C31.4644 7.87514 31.8068 7.94342 32.1262 8.07592C32.4456 8.20843 32.7358 8.40256 32.9802 8.64723C33.2245 8.89191 33.4183 9.18233 33.5504 9.5019C33.6825 9.82148 33.7503 10.1639 33.75 10.5097V15.3652C33.7503 15.9976 33.5232 16.6089 33.1101 17.0877C32.697 17.5664 32.1255 17.8807 31.5 17.973V31.4032C31.5 33.3225 29.9284 34.875 27.999 34.875H8.001C6.075 34.875 4.5 33.3382 4.5 31.4032V17.973C3.87445 17.8807 3.30297 17.5664 2.8899 17.0877C2.47682 16.6089 2.2497 15.9976 2.25 15.3652V10.5097C2.24971 10.164 2.3175 9.82166 2.44953 9.50216C2.58155 9.18266 2.77521 8.89229 3.01945 8.64763C3.26369 8.40297 3.55373 8.20881 3.87301 8.07624C4.19228 7.94368 4.53455 7.87529 4.88025 7.875H5.99738C5.75293 7.48661 5.6238 7.03679 5.625 6.57787C5.625 2.77087 10.1756 0.822373 12.8993 3.4695L14.913 5.4225C15.1727 4.81659 15.604 4.2999 16.1537 3.93609C16.7034 3.57227 17.3475 3.37723 18.0068 3.375C19.3849 3.375 20.5695 4.21312 21.0915 5.418L23.1007 3.4695ZM6.75 18V31.4032C6.75 32.0704 7.29225 32.625 8.001 32.625H14.625V18H6.75ZM21.375 18V32.625H27.999C28.3268 32.6286 28.6427 32.502 28.8772 32.2729C29.1118 32.0438 29.2458 31.7311 29.25 31.4032V18H21.375ZM31.5 15.3652V10.5097C31.5003 10.4595 31.4907 10.4097 31.4717 10.3632C31.4528 10.3167 31.4249 10.2743 31.3896 10.2386C31.3543 10.2029 31.3123 10.1745 31.266 10.155C31.2197 10.1355 31.17 10.1253 31.1198 10.125H21.375V15.75H31.1198C31.17 15.7497 31.2197 15.7395 31.266 15.72C31.3123 15.7005 31.3543 15.6721 31.3896 15.6364C31.4249 15.6006 31.4528 15.5583 31.4717 15.5118C31.4907 15.4653 31.5003 15.4155 31.5 15.3652ZM14.625 10.125H4.88025C4.83002 10.1253 4.78034 10.1355 4.73404 10.155C4.68775 10.1745 4.64575 10.2029 4.61044 10.2386C4.57513 10.2743 4.5472 10.3167 4.52825 10.3632C4.50931 10.4097 4.4997 10.4595 4.5 10.5097V15.3652C4.4997 15.4155 4.50931 15.4653 4.52825 15.5118C4.5472 15.5583 4.57513 15.6006 4.61044 15.6364C4.64575 15.6721 4.68775 15.7005 4.73404 15.72C4.78034 15.7395 4.83002 15.7497 4.88025 15.75H14.625V10.125Z"
        fill="#F7BF44"
      />
    </svg>
  );
};
export const GoldUnderLine: React.FC<Props> = ({
  ClassName,
  stroke,
  fill,
}: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="234"
      height="44"
      viewBox="0 0 234 44"
      fill={fill}
      className={ClassName}
      stroke={stroke}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M86.7575 17.1271C85.3313 17.4322 83.9134 17.756 82.5039 18.1001C81.9908 18.2251 81.6773 18.7421 81.802 19.2541L81.8086 19.2743C74.1746 19.4052 66.5422 19.609 58.9135 19.8876C47.8932 20.2903 36.8031 20.9543 25.8206 21.9869C14.9673 23.0073 11.9688 23.2697 2.63127 24.9776C2.36424 25.0264 1.84908 25.0232 1.57194 25.1007C1.3084 25.1742 1.11975 25.3023 0.998611 25.4278C0.843442 25.5868 0.754209 25.77 0.716424 25.9704C0.676448 26.1889 0.688398 26.4558 0.87603 26.754C1.40536 27.5909 2.26095 27.8208 3.30442 27.6444C4.20224 27.4925 5.28761 26.9542 6.13809 26.8928C20.2963 25.8715 34.4449 24.7389 48.6045 23.7382C70.2813 22.2063 91.8926 21.4852 113.507 21.0548C136.231 21.2558 158.944 22.0791 181.618 23.4767C196.385 24.3862 211.121 25.7362 225.869 26.9173C225.858 26.9822 225.856 27.0499 225.859 27.119C225.891 27.645 226.346 28.0458 226.872 28.0139C227.406 27.9814 232.167 27.8463 233.044 27.6302C233.547 27.5064 233.743 27.1963 233.808 27.0635C233.985 26.6995 233.996 26.3038 233.601 25.9264C233.523 25.854 233.378 25.7343 233.111 25.6579C232.882 25.5909 232.316 25.5062 231.287 25.4281C214.77 24.1606 198.272 22.5903 181.736 21.5701C174.353 21.1161 166.966 20.7213 159.573 20.391C169.607 20.2612 179.645 20.1138 189.699 19.8977C190.132 19.8897 190.342 19.8194 190.381 19.8029C190.933 19.5647 190.971 19.129 190.96 18.8821C190.957 18.794 190.883 18.0666 190.073 17.9644C189.599 17.9043 186.175 17.7875 184.857 17.7177C178.527 17.3765 178.674 17.4302 172.198 17.1357C157.956 16.4899 143.735 16.0603 129.476 15.7131C123.791 15.5749 118.106 15.4637 112.42 15.3822C128.807 13.9886 145.534 14.0458 161.474 13.8744C169.697 13.7862 177.922 13.7491 186.145 13.8552C189.828 13.9028 193.51 14.0122 197.193 14.0782C198.337 14.0986 199.478 14.1457 200.621 14.173C200.756 14.176 202.529 14.1906 202.82 14.1843C203.582 14.1678 203.757 13.4901 203.764 13.463C203.797 13.3355 203.923 12.4237 202.976 12.283C189.303 10.2499 174.97 10.726 161.159 10.3947C136.988 9.81484 112.753 9.93925 88.5823 10.689C77.8916 11.0205 67.2352 11.7123 56.5595 12.4005C51.2277 12.7443 45.8817 13.1087 40.6007 13.9481C40.0709 14.0324 38.8702 14.1191 38.2877 14.2191C37.9913 14.2701 37.7803 14.3507 37.6836 14.4057C37.2602 14.6443 37.1758 14.9952 37.169 15.2413C37.1648 15.4257 37.204 16.0751 38.0764 16.2734C50.5423 19.1119 64.3762 17.2845 77.0353 17.1772C80.2758 17.1497 83.5154 17.1332 86.7575 17.1271ZM97.3134 17.1441C93.5585 17.7172 89.8406 18.3978 86.1753 19.2076C95.2889 19.0844 104.403 19.0648 113.521 19.1457C128.563 18.8462 143.604 18.687 158.664 18.4932C148.926 18.1355 139.186 17.8593 129.429 17.6219C118.728 17.3613 108.021 17.1974 97.3134 17.1441ZM149.432 12.0779C129.172 11.7805 108.884 11.9692 88.6432 12.5972C77.9716 12.9282 67.3377 13.6189 56.6827 14.3059C52.4901 14.5762 48.286 14.8579 44.1147 15.3797C54.8919 16.7055 66.3757 15.3582 77.0193 15.2681C83.7414 15.2112 90.4668 15.2008 97.19 15.2341C114.285 12.6437 132.143 12.2526 149.432 12.0779Z"
        fill="#F7BF44"
      />
    </svg>
  );
};
