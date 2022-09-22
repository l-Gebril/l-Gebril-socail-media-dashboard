import { AiOutlineInstagram } from "react-icons/ai";
export default function InstagramIcon({ size }) {
  return (
    <>
      <svg width='0' height='0'>
        <linearGradient
          id='instagram-gradient'
          x1='100%'
          y1='100%'
          x2='0%'
          y2='0%'
        >
          <stop stopColor='#FDC468' offset='0%' />
          <stop stopColor='#DF4996' offset='100%' />
        </linearGradient>
      </svg>
      <AiOutlineInstagram
        size={size}
        style={{ fill: "url(#instagram-gradient)" }}
      />
    </>
  );
}
