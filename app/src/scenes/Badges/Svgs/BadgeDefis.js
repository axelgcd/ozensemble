import React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

export const BadgeDefis = ({ stars, size = 96 }) => {
  const star2 = stars >= 2 ? '#5150A2' : '#E8E8F3';
  const star3 = stars >= 3 ? '#5150A2' : '#E8E8F3';
  const star4 = stars >= 4 ? '#5150A2' : '#E8E8F3';
  const star5 = stars >= 5 ? '#5150A2' : '#E8E8F3';
  return (
    <Svg width={size} height={size} viewBox="0 0 60 60" fill="none">
      <Path
        d="M30.6475 2.97279C30.912 3.07462 31.787 3.74673 32.6213 4.47994C34.7985 6.41479 35.8363 6.92396 37.6066 6.94433C38.4002 6.94433 39.8857 6.78139 40.8827 6.57772C43.7722 5.96672 43.935 6.08892 45.0949 9.51055C46.214 12.8507 47.2721 13.8487 51.0773 15.0911C52.7459 15.641 53.4784 16.1094 53.6819 16.8019C53.7633 17.0259 53.6209 18.1461 53.397 19.307C53.1732 20.4679 52.9901 21.8732 52.9901 22.4435C52.9901 23.8488 53.8447 25.58 55.4319 27.3112C56.1237 28.0851 56.8359 29.022 56.9783 29.409C57.3446 30.2847 57.0801 30.8347 55.2691 32.9121C53.5802 34.8469 52.9901 36.1097 52.9901 37.7187C52.9901 38.3908 53.0918 39.348 53.2139 39.8572C53.6616 41.7513 53.7836 42.9326 53.6005 43.4214C53.3767 43.9916 52.4406 44.5008 50.4465 45.1322C47.1704 46.1913 46.153 47.2707 44.9321 51.0182C44.1995 53.2789 43.8129 53.7066 42.653 53.7066C42.124 53.7066 41.1473 53.5641 40.4758 53.4011C39.8043 53.2382 38.5834 53.116 37.7694 53.0956C35.9177 53.0956 35.0224 53.5233 32.6416 55.5193C30.0981 57.6782 29.8539 57.6782 27.3917 55.56C25.1534 53.6048 24.0749 53.0956 22.325 53.0956C21.5721 53.116 20.3512 53.2382 19.6186 53.4011C18.8861 53.5641 17.8687 53.6863 17.3396 53.7066C16.5257 53.7066 16.3425 53.6252 15.9762 53.1364C15.7524 52.8105 15.3454 51.8533 15.0606 51.0182C13.8397 47.2707 12.8222 46.1913 9.54614 45.1322C6.1683 44.0731 5.96482 43.7676 6.57527 40.7737C7.38921 36.8632 7.10433 35.682 4.62182 32.8102C3.84858 31.8937 3.09569 30.8754 2.95325 30.5495C2.62767 29.7348 2.9329 29.1238 4.60147 27.2705C6.14795 25.58 7.00259 23.8488 7.00259 22.4435C7.00259 21.8732 6.81945 20.4679 6.59562 19.307C6.37179 18.1461 6.22935 17.0259 6.31074 16.8019C6.51423 16.1094 7.26712 15.6206 8.91534 15.0911C12.6391 13.9302 13.7786 12.8507 14.8978 9.51055C16.0576 6.08892 16.2204 5.96672 19.1099 6.57772C20.107 6.78139 21.5924 6.94433 22.386 6.94433C24.1156 6.92396 25.2755 6.37406 27.1068 4.72434C28.3277 3.60416 29.5283 2.78949 29.9353 2.78949C30.0574 2.78949 30.3829 2.87096 30.6475 2.97279Z"
        fill="#C79CFF"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28.5516 0.202896C27.6359 0.549133 26.8423 1.09904 25.133 2.62655C23.3017 4.2559 22.8744 4.35774 20.1477 3.8282C18.9268 3.5838 17.5634 3.40049 17.0954 3.40049C14.8774 3.42086 13.1275 5.21315 12.2728 8.32927C11.642 10.7529 10.8891 11.4658 8.12175 12.3619C6.10726 13.0137 5.35436 13.4414 4.52008 14.3579C3.48231 15.4984 3.25848 16.7204 3.66544 18.92C4.41834 23.0341 4.37764 23.2174 2.3021 25.5393C-0.668773 28.8591 -0.750166 31.0383 1.97652 34.073C4.2759 36.6188 4.43868 37.1076 3.82823 39.8979C3.31952 42.2401 3.38057 43.9102 4.01137 44.9896C4.66252 46.1302 5.65959 46.7819 7.83687 47.5558C10.1769 48.3909 10.2583 48.4316 10.2583 48.6353L12.1507 51.4663L12.7002 52.8512C13.0054 53.6252 13.4937 54.5824 13.799 54.9898C14.9385 56.4765 16.9937 56.9246 19.7204 56.2525C21.511 55.8248 23.0372 55.8655 23.8511 56.3543C24.2377 56.5784 24.5022 56.8635 24.4615 56.9653L27.1272 59.0835C28.4702 60.3055 31.5225 60.3055 32.8654 59.0835L35.5311 56.9653C35.4904 56.8635 35.7549 56.5784 36.1415 56.3543C36.9555 55.8655 38.4816 55.8248 40.2723 56.2525C44.0367 57.169 46.1326 56.1303 47.3332 52.7698C47.5774 52.0569 47.8012 51.507 47.8419 51.5274L49.7343 48.6353C49.7916 48.452 49.8157 48.3909 52.1558 47.5558C54.3331 46.7819 55.3301 46.1302 55.9813 44.9896C56.6121 43.9102 56.6731 42.2401 56.1644 39.8979C55.554 37.1076 55.7167 36.6188 58.0161 34.073C60.7428 31.018 60.6818 28.8794 57.6905 25.5393C56.9987 24.7857 56.3069 23.8896 56.1441 23.5637C55.7981 22.8916 55.7574 21.7918 56.0423 20.6105C56.8156 17.4129 56.6528 15.6817 55.4726 14.3579C54.6383 13.4414 53.8854 13.0137 51.8709 12.3619C49.0221 11.425 48.371 10.814 47.6995 8.28854C46.8652 5.15205 45.0745 3.40049 42.6937 3.40049C42.3275 3.40049 41.0659 3.5838 39.845 3.8282C37.0979 4.37811 36.7113 4.27627 34.6765 2.46362C33.8422 1.73042 32.7637 0.89537 32.2957 0.610233C31.2579 -0.000770569 29.5894 -0.184074 28.5516 0.202896ZM32.6213 4.47994C31.787 3.74673 30.912 3.07462 30.6475 2.97279C30.3829 2.87096 30.0574 2.78949 29.9353 2.78949C29.5283 2.78949 28.3277 3.60416 27.1068 4.72434C25.2755 6.37406 24.1156 6.92396 22.386 6.94433C21.5924 6.94433 20.107 6.78139 19.1099 6.57772C16.2204 5.96672 16.0576 6.08892 14.8978 9.51055C13.7786 12.8507 12.6391 13.9302 8.91534 15.0911C7.26712 15.6206 6.51423 16.1094 6.31074 16.8019C6.22935 17.0259 6.37179 18.1461 6.59562 19.307C6.81945 20.4679 7.00259 21.8732 7.00259 22.4435C7.00259 23.8488 6.14795 25.58 4.60147 27.2705C2.9329 29.1238 2.62767 29.7348 2.95325 30.5495C3.09569 30.8754 3.84858 31.8937 4.62182 32.8102C7.10433 35.682 7.38921 36.8632 6.57527 40.7737C5.96482 43.7676 6.1683 44.0731 9.54614 45.1322C12.8222 46.1913 13.8397 47.2707 15.0606 51.0182C15.3454 51.8533 15.7524 52.8105 15.9762 53.1364C16.3425 53.6252 16.5257 53.7066 17.3396 53.7066C17.8687 53.6863 18.8861 53.5641 19.6186 53.4011C20.3512 53.2382 21.5721 53.116 22.325 53.0956C24.0749 53.0956 25.1534 53.6048 27.3917 55.56C29.8539 57.6782 30.0981 57.6782 32.6416 55.5193C35.0224 53.5233 35.9177 53.0956 37.7694 53.0956C38.5834 53.116 39.8043 53.2382 40.4758 53.4011C41.1473 53.5641 42.124 53.7066 42.653 53.7066C43.8129 53.7066 44.1995 53.2789 44.9321 51.0182C46.153 47.2707 47.1704 46.1913 50.4465 45.1322C52.4406 44.5008 53.3767 43.9916 53.6005 43.4214C53.7836 42.9326 53.6616 41.7513 53.2139 39.8572C53.0918 39.348 52.9901 38.3908 52.9901 37.7187C52.9901 36.1097 53.5802 34.8469 55.2691 32.9121C57.0801 30.8347 57.3446 30.2847 56.9783 29.409C56.8359 29.022 56.1237 28.0851 55.4319 27.3112C53.8447 25.58 52.9901 23.8488 52.9901 22.4435C52.9901 21.8732 53.1732 20.4679 53.397 19.307C53.6209 18.1461 53.7633 17.0259 53.6819 16.8019C53.4784 16.1094 52.7459 15.641 51.0773 15.0911C47.2721 13.8487 46.214 12.8507 45.0949 9.51055C43.935 6.08892 43.7722 5.96672 40.8827 6.57772C39.8857 6.78139 38.4002 6.94433 37.6066 6.94433C35.8363 6.92396 34.7985 6.41479 32.6213 4.47994Z"
        fill="#C79CFF"
      />
      {/* <Path
        d="M26.1522 11.0314C19.9866 12.3756 14.9606 16.3879 12.3967 21.9888C11.1351 24.7587 10.7891 26.551 10.7688 29.9726C10.7688 33.659 11.1758 35.3902 12.7019 38.5267C15.6117 44.4942 21.2076 48.425 27.9225 49.2397C33.498 49.9118 39.4194 47.8547 43.4891 43.8221C47.1315 40.2171 49.0239 35.8994 49.2681 30.7873C49.4919 25.4308 47.6809 20.6038 43.9368 16.6527C41.088 13.6587 37.3846 11.6424 33.3759 10.95C31.7074 10.6445 27.7191 10.7056 26.1522 11.0314ZM34.78 14.1883C42.1868 16.5508 46.9076 23.4145 46.4193 31.052C46.2361 33.5979 45.8495 35.0439 44.7304 37.3047C42.6345 41.5817 38.7683 44.7386 34.1085 46.0013C31.9108 46.592 28.0853 46.592 25.8877 46.0013C22.6319 45.1255 19.4372 43.0889 17.3617 40.5837C13.5769 36.0216 12.5188 29.8708 14.5536 24.2902C16.4257 19.1374 21.0244 15.1048 26.4371 13.8624C28.3499 13.4347 32.969 13.5976 34.78 14.1883Z"
        fill="#C79CFF"
      /> */}
      <Path
        d="M16.5 46.3354L15.2896 47.0652C15.2361 47.0993 15.1802 47.1139 15.1219 47.109C15.0635 47.1041 15.0125 47.0847 14.9687 47.0506C14.925 47.0166 14.891 46.974 14.8667 46.923C14.8424 46.8719 14.8375 46.8146 14.8521 46.7514L15.1729 45.372L14.101 44.4451C14.0524 44.4013 14.0221 44.3514 14.01 44.2954C13.9978 44.2395 14.0014 44.1848 14.0208 44.1313C14.0403 44.0778 14.0694 44.034 14.1083 43.9999C14.1472 43.9659 14.2007 43.944 14.2687 43.9343L15.6833 43.8102L16.2302 42.5111C16.2545 42.4527 16.2922 42.4089 16.3434 42.3797C16.3943 42.3505 16.4465 42.3359 16.5 42.3359C16.5535 42.3359 16.6058 42.3505 16.6569 42.3797C16.7079 42.4089 16.7455 42.4527 16.7698 42.5111L17.3167 43.8102L18.7312 43.9343C18.7993 43.944 18.8528 43.9659 18.8917 43.9999C18.9305 44.034 18.9597 44.0778 18.9792 44.1313C18.9986 44.1848 19.0023 44.2395 18.9902 44.2954C18.978 44.3514 18.9476 44.4013 18.8989 44.4451L17.8271 45.372L18.1479 46.7514C18.1625 46.8146 18.1576 46.8719 18.1333 46.923C18.109 46.974 18.075 47.0166 18.0312 47.0506C17.9875 47.0847 17.9364 47.1041 17.8781 47.109C17.8198 47.1139 17.7639 47.0993 17.7104 47.0652L16.5 46.3354Z"
        fill="#5150A2"
      />
      <Path
        d="M22.5 49.3354L21.2896 50.0652C21.2361 50.0993 21.1802 50.1139 21.1219 50.109C21.0635 50.1041 21.0125 50.0847 20.9687 50.0506C20.925 50.0166 20.891 49.974 20.8667 49.923C20.8424 49.8719 20.8375 49.8146 20.8521 49.7514L21.1729 48.372L20.101 47.4451C20.0524 47.4013 20.0221 47.3514 20.01 47.2954C19.9978 47.2395 20.0014 47.1848 20.0208 47.1313C20.0403 47.0778 20.0694 47.034 20.1083 46.9999C20.1472 46.9659 20.2007 46.944 20.2687 46.9343L21.6833 46.8102L22.2302 45.5111C22.2545 45.4527 22.2922 45.4089 22.3434 45.3797C22.3943 45.3505 22.4465 45.3359 22.5 45.3359C22.5535 45.3359 22.6058 45.3505 22.6569 45.3797C22.7079 45.4089 22.7455 45.4527 22.7698 45.5111L23.3167 46.8102L24.7312 46.9343C24.7993 46.944 24.8528 46.9659 24.8917 46.9999C24.9305 47.034 24.9597 47.0778 24.9792 47.1313C24.9986 47.1848 25.0023 47.2395 24.9902 47.2954C24.978 47.3514 24.9476 47.4013 24.8989 47.4451L23.8271 48.372L24.1479 49.7514C24.1625 49.8146 24.1576 49.8719 24.1333 49.923C24.109 49.974 24.075 50.0166 24.0312 50.0506C23.9875 50.0847 23.9364 50.1041 23.8781 50.109C23.8198 50.1139 23.7639 50.0993 23.7104 50.0652L22.5 49.3354Z"
        fill={star2}
      />
      <Path
        d="M29.5 50.3354L28.2896 51.0652C28.2361 51.0993 28.1802 51.1139 28.1219 51.109C28.0635 51.1041 28.0125 51.0847 27.9687 51.0506C27.925 51.0166 27.891 50.974 27.8667 50.923C27.8424 50.8719 27.8375 50.8146 27.8521 50.7514L28.1729 49.372L27.101 48.4451C27.0524 48.4013 27.0221 48.3514 27.01 48.2954C26.9978 48.2395 27.0014 48.1848 27.0208 48.1313C27.0403 48.0778 27.0694 48.034 27.1083 47.9999C27.1472 47.9659 27.2007 47.944 27.2687 47.9343L28.6833 47.8102L29.2302 46.5111C29.2545 46.4527 29.2922 46.4089 29.3434 46.3797C29.3943 46.3505 29.4465 46.3359 29.5 46.3359C29.5535 46.3359 29.6058 46.3505 29.6569 46.3797C29.7079 46.4089 29.7455 46.4527 29.7698 46.5111L30.3167 47.8102L31.7312 47.9343C31.7993 47.944 31.8528 47.9659 31.8917 47.9999C31.9305 48.034 31.9597 48.0778 31.9792 48.1313C31.9986 48.1848 32.0023 48.2395 31.9902 48.2954C31.978 48.3514 31.9476 48.4013 31.8989 48.4451L30.8271 49.372L31.1479 50.7514C31.1625 50.8146 31.1576 50.8719 31.1333 50.923C31.109 50.974 31.075 51.0166 31.0312 51.0506C30.9875 51.0847 30.9364 51.1041 30.8781 51.109C30.8198 51.1139 30.7639 51.0993 30.7104 51.0652L29.5 50.3354Z"
        fill={star3}
      />
      <Path
        d="M36.5 49.3354L35.2896 50.0652C35.2361 50.0993 35.1802 50.1139 35.1219 50.109C35.0635 50.1041 35.0125 50.0847 34.9687 50.0506C34.925 50.0166 34.891 49.974 34.8667 49.923C34.8424 49.8719 34.8375 49.8146 34.8521 49.7514L35.1729 48.372L34.101 47.4451C34.0524 47.4013 34.0221 47.3514 34.01 47.2954C33.9978 47.2395 34.0014 47.1848 34.0208 47.1313C34.0403 47.0778 34.0694 47.034 34.1083 46.9999C34.1472 46.9659 34.2007 46.944 34.2687 46.9343L35.6833 46.8102L36.2302 45.5111C36.2545 45.4527 36.2922 45.4089 36.3434 45.3797C36.3943 45.3505 36.4465 45.3359 36.5 45.3359C36.5535 45.3359 36.6058 45.3505 36.6569 45.3797C36.7079 45.4089 36.7455 45.4527 36.7698 45.5111L37.3167 46.8102L38.7312 46.9343C38.7993 46.944 38.8528 46.9659 38.8917 46.9999C38.9305 47.034 38.9597 47.0778 38.9792 47.1313C38.9986 47.1848 39.0023 47.2395 38.9902 47.2954C38.978 47.3514 38.9476 47.4013 38.8989 47.4451L37.8271 48.372L38.1479 49.7514C38.1625 49.8146 38.1576 49.8719 38.1333 49.923C38.109 49.974 38.075 50.0166 38.0312 50.0506C37.9875 50.0847 37.9364 50.1041 37.8781 50.109C37.8198 50.1139 37.7639 50.0993 37.7104 50.0652L36.5 49.3354Z"
        fill={star4}
      />
      {/* <Path
        d="M16.5 46.3354L15.2896 47.0652C15.2361 47.0993 15.1802 47.1139 15.1219 47.109C15.0635 47.1041 15.0125 47.0847 14.9687 47.0506C14.925 47.0166 14.891 46.974 14.8667 46.923C14.8424 46.8719 14.8375 46.8146 14.8521 46.7514L15.1729 45.372L14.101 44.4451C14.0524 44.4013 14.0221 44.3514 14.01 44.2954C13.9978 44.2395 14.0014 44.1848 14.0208 44.1313C14.0403 44.0778 14.0694 44.034 14.1083 43.9999C14.1472 43.9659 14.2007 43.944 14.2687 43.9343L15.6833 43.8102L16.2302 42.5111C16.2545 42.4527 16.2922 42.4089 16.3434 42.3797C16.3943 42.3505 16.4465 42.3359 16.5 42.3359C16.5535 42.3359 16.6058 42.3505 16.6569 42.3797C16.7079 42.4089 16.7455 42.4527 16.7698 42.5111L17.3167 43.8102L18.7312 43.9343C18.7993 43.944 18.8528 43.9659 18.8917 43.9999C18.9305 44.034 18.9597 44.0778 18.9792 44.1313C18.9986 44.1848 19.0023 44.2395 18.9902 44.2954C18.978 44.3514 18.9476 44.4013 18.8989 44.4451L17.8271 45.372L18.1479 46.7514C18.1625 46.8146 18.1576 46.8719 18.1333 46.923C18.109 46.974 18.075 47.0166 18.0312 47.0506C17.9875 47.0847 17.9364 47.1041 17.8781 47.109C17.8198 47.1139 17.7639 47.0993 17.7104 47.0652L16.5 46.3354Z"
        fill={star3}
      /> */}

      <Path
        d="M42.5 46.3354L41.2896 47.0652C41.2361 47.0993 41.1802 47.1139 41.1219 47.109C41.0635 47.1041 41.0125 47.0847 40.9687 47.0506C40.925 47.0166 40.891 46.974 40.8667 46.923C40.8424 46.8719 40.8375 46.8146 40.8521 46.7514L41.1729 45.372L40.101 44.4451C40.0524 44.4013 40.0221 44.3514 40.01 44.2954C39.9978 44.2395 40.0014 44.1848 40.0208 44.1313C40.0403 44.0778 40.0694 44.034 40.1083 43.9999C40.1472 43.9659 40.2007 43.944 40.2687 43.9343L41.6833 43.8102L42.2302 42.5111C42.2545 42.4527 42.2922 42.4089 42.3434 42.3797C42.3943 42.3505 42.4465 42.3359 42.5 42.3359C42.5535 42.3359 42.6058 42.3505 42.6569 42.3797C42.7079 42.4089 42.7455 42.4527 42.7698 42.5111L43.3167 43.8102L44.7312 43.9343C44.7993 43.944 44.8528 43.9659 44.8917 43.9999C44.9305 44.034 44.9597 44.0778 44.9792 44.1313C44.9986 44.1848 45.0023 44.2395 44.9902 44.2954C44.978 44.3514 44.9476 44.4013 44.8989 44.4451L43.8271 45.372L44.1479 46.7514C44.1625 46.8146 44.1576 46.8719 44.1333 46.923C44.109 46.974 44.075 47.0166 44.0312 47.0506C43.9875 47.0847 43.9364 47.1041 43.8781 47.109C43.8198 47.1139 43.7639 47.0993 43.7104 47.0652L42.5 46.3354Z"
        fill={star5}
      />
      <Rect x="20" y="17" width="8.47619" height="8.47619" rx="1" stroke="#5150A2" strokeWidth="2" />
      <Rect x="20" y="17" width="8.47619" height="8.47619" rx="1" stroke="#4030A5" strokeWidth="2" />
      <Rect x="31.5238" y="17" width="8.47619" height="8.47619" rx="1" stroke="#5150A2" strokeWidth="2" />
      <Rect x="31.5238" y="17" width="8.47619" height="8.47619" rx="1" stroke="#4030A5" strokeWidth="2" />
      <Rect x="31.5238" y="28.5234" width="8.47619" height="8.47619" rx="1" stroke="#5150A2" strokeWidth="2" />
      <Rect x="31.5238" y="28.5234" width="8.47619" height="8.47619" rx="1" stroke="#4030A5" strokeWidth="2" />
      <Rect x="20" y="28.5234" width="8.47619" height="8.47619" rx="1" stroke="#5150A2" strokeWidth="2" />
      <Rect x="20" y="28.5234" width="8.47619" height="8.47619" rx="1" stroke="#4030A5" strokeWidth="2" />
    </Svg>
  );
};
