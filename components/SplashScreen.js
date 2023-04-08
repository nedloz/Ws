import { View, Dimensions, } from "react-native"
import { Svg, Path } from "react-native-svg"

import { LinearGradient } from 'expo-linear-gradient'

const Device_width = Dimensions.get('window').width
const Device_height = Dimensions.get('window').height
export default function SplashScreen() {
  return (
    <LinearGradient
      colors={['#73D5BC', '#2254F5', '#A1CAFF']}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      style={{
        width: Device_width,
        height: Device_height,
        backgroundColor: '#3740F5A6',
        alignItems: "center",
        justifyContent: 'center',
      }} >
      <Svg width="263" height="48" viewBox="0 0 263 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M14.5189 39.5433C11.561 39.5433 8.99186 38.9323 6.8116 37.7102C4.64522 36.4743 2.96488 34.7314 1.7706 32.4817C0.5902 30.2182 0 27.5449 0 24.462V23.4413C0 20.4972 0.569369 17.8934 1.70811 15.6298C2.86073 13.3523 4.49246 11.5679 6.60329 10.2764C8.72801 8.98486 11.2624 8.33911 14.2064 8.33911C16.2478 8.33911 18.1712 8.63074 19.9765 9.214C21.7818 9.79725 23.3927 10.686 24.8092 11.8803V19.2127H20.289L19.6641 14.6091C18.9697 14.1231 18.1851 13.7412 17.3102 13.4634C16.4353 13.1718 15.4493 13.026 14.3523 13.026C11.7832 13.026 9.76259 13.9634 8.29057 15.8381C6.81854 17.699 6.08253 20.2195 6.08253 23.3996V24.462C6.08253 27.656 6.84631 30.1904 8.37389 32.0651C9.90147 33.9399 11.9845 34.8773 14.6231 34.8773C15.4979 34.8773 16.3728 34.7801 17.2477 34.5856C18.1365 34.3773 18.9419 34.1135 19.6641 33.7941L20.289 29.5238H24.8092V36.7728C23.6288 37.5505 22.1568 38.2102 20.3931 38.7517C18.6295 39.2795 16.6714 39.5433 14.5189 39.5433Z" fill="white" />
        <Path d="M29.6072 39.1059V35.4605L32.8568 34.8356V20.8583L29.6072 20.2334V16.5672H40.3766L46.1258 32.0235H46.2508L52.0417 16.5672H62.8944V20.2334L59.6657 20.8583V34.8356L62.8944 35.4605V39.1059H51.2918V35.4605L53.5832 34.8356V25.691L53.4582 25.6702L48.2297 39.1059H44.1469L39.0434 25.9201L38.9185 25.9409V34.8356L41.2306 35.4605V39.1059H29.6072Z" fill="white" />
        <Path d="M73.3097 39.5433C71.0739 39.5433 69.2964 38.9462 67.9771 37.7519C66.6578 36.5437 65.9982 34.905 65.9982 32.8359C65.9982 30.725 66.8522 29.003 68.5604 27.6699C70.2823 26.3367 72.8098 25.6702 76.1427 25.6702H79.1215V24.0037C79.1215 22.9205 78.8021 22.0456 78.1632 21.3791C77.5383 20.6986 76.594 20.3584 75.3303 20.3584C74.6776 20.3584 74.0874 20.4417 73.5597 20.6083C73.0459 20.7611 72.5807 20.9833 72.164 21.2749L71.6849 24.2537H67.3105L67.2272 18.4003C68.4076 17.7337 69.6852 17.1921 71.06 16.7755C72.4348 16.3589 73.9694 16.1506 75.6636 16.1506C78.6076 16.1506 80.9337 16.838 82.6418 18.2128C84.3499 19.5876 85.204 21.5388 85.204 24.0662V33.3566C85.204 33.6621 85.204 33.9607 85.204 34.2523C85.2179 34.544 85.2456 34.8356 85.2873 35.1272L87.6412 35.4605V39.1059H80.1005C79.9477 38.717 79.795 38.3004 79.6422 37.856C79.4895 37.4116 79.3784 36.9673 79.3089 36.5229C78.5868 37.4394 77.7327 38.1754 76.7468 38.7309C75.7747 39.2725 74.629 39.5433 73.3097 39.5433ZM74.9345 35.0439C75.7816 35.0439 76.5801 34.8564 77.33 34.4815C78.0938 34.0926 78.691 33.5858 79.1215 32.9608V29.3988H76.1218C74.7887 29.3988 73.7749 29.7043 73.0806 30.3154C72.4001 30.9264 72.0599 31.6624 72.0599 32.5234C72.0599 33.3289 72.3099 33.9538 72.8098 34.3982C73.3236 34.8287 74.0319 35.0439 74.9345 35.0439Z" fill="white" />
        <Path d="M89.6617 47.7714V44.1052L92.5988 43.4803V20.8583L89.3493 20.2334V16.5672H98.1814L98.4731 19.1918C99.1396 18.2197 99.9451 17.4698 100.889 16.9421C101.834 16.4144 102.959 16.1506 104.264 16.1506C106.083 16.1506 107.639 16.6505 108.93 17.6504C110.221 18.6364 111.207 20.0181 111.888 21.7957C112.582 23.5732 112.929 25.6493 112.929 28.024V28.4614C112.929 30.6834 112.582 32.6276 111.888 34.294C111.194 35.9466 110.194 37.2381 108.888 38.1685C107.597 39.085 106.041 39.5433 104.222 39.5433C101.848 39.5433 99.9937 38.6823 98.6605 36.9603V43.4803L101.598 44.1052V47.7714H89.6617ZM102.41 34.8773C103.965 34.8773 105.09 34.3009 105.785 33.1483C106.493 31.9957 106.847 30.4334 106.847 28.4614V28.024C106.847 25.8993 106.486 24.1773 105.764 22.858C105.042 21.5388 103.91 20.8791 102.368 20.8791C100.674 20.8791 99.4382 21.6012 98.6605 23.0455V32.9192C99.4243 34.2246 100.674 34.8773 102.41 34.8773Z" fill="white" />
        <Path d="M120.033 39.1059V35.4605L123.261 34.8356V21.2124H119.491L119.262 24.2537H114.596V16.5672H138.134V24.2537H133.468L133.218 21.2124H129.365V34.8356L132.594 35.4605V39.1059H120.033Z" fill="white" />
        <Path d="M140.093 39.1059L140.009 34.3148L140.676 34.294C141.606 34.294 142.308 34.051 142.78 33.5649C143.252 33.0789 143.571 32.2526 143.738 31.0861C143.918 29.9057 144.009 28.267 144.009 26.1701V20.8583L140.759 20.2334V16.5672H164.818V20.2334L161.569 20.8583V34.8356L164.818 35.4605V39.1059H152.258V35.4605L155.507 34.8356V21.2749H150.091V26.1701C150.091 30.6139 149.404 33.8843 148.029 35.9813C146.668 38.0643 144.342 39.1059 141.051 39.1059H140.093Z" fill="white" />
        <Path d="M175.13 39.5433C172.894 39.5433 171.116 38.9462 169.797 37.7519C168.478 36.5437 167.818 34.905 167.818 32.8359C167.818 30.725 168.672 29.003 170.38 27.6699C172.102 26.3367 174.63 25.6702 177.963 25.6702H180.941V24.0037C180.941 22.9205 180.622 22.0456 179.983 21.3791C179.358 20.6986 178.414 20.3584 177.15 20.3584C176.497 20.3584 175.907 20.4417 175.38 20.6083C174.866 20.7611 174.4 20.9833 173.984 21.2749L173.505 24.2537H169.13L169.047 18.4003C170.227 17.7337 171.505 17.1921 172.88 16.7755C174.255 16.3589 175.789 16.1506 177.483 16.1506C180.427 16.1506 182.754 16.838 184.462 18.2128C186.17 19.5876 187.024 21.5388 187.024 24.0662V33.3566C187.024 33.6621 187.024 33.9607 187.024 34.2523C187.038 34.544 187.065 34.8356 187.107 35.1272L189.461 35.4605V39.1059H181.92C181.768 38.717 181.615 38.3004 181.462 37.856C181.309 37.4116 181.198 36.9673 181.129 36.5229C180.407 37.4394 179.553 38.1754 178.567 38.7309C177.595 39.2725 176.449 39.5433 175.13 39.5433ZM176.754 35.0439C177.601 35.0439 178.4 34.8564 179.15 34.4815C179.914 34.0926 180.511 33.5858 180.941 32.9608V29.3988H177.942C176.609 29.3988 175.595 29.7043 174.9 30.3154C174.22 30.9264 173.88 31.6624 173.88 32.5234C173.88 33.3289 174.13 33.9538 174.63 34.3982C175.143 34.8287 175.852 35.0439 176.754 35.0439Z" fill="white" />
        <Path d="M202.813 39.5433C200.591 39.5433 198.682 39.0781 197.085 38.1477C195.502 37.2172 194.287 35.9327 193.44 34.294C192.593 32.6414 192.169 30.7528 192.169 28.6281V25.7326C192.169 22.3581 192.606 19.5321 193.481 17.2546C194.356 14.9632 195.571 13.1788 197.127 11.9011C198.696 10.6096 200.515 9.76254 202.584 9.35981C203.931 9.13762 204.924 8.84599 205.563 8.48493C206.216 8.10998 206.542 7.50589 206.542 6.67267H211.25L211.312 6.79765C211.354 8.60297 211.048 9.97779 210.396 10.9221C209.743 11.8525 208.84 12.5399 207.688 12.9843C206.535 13.4148 205.23 13.7689 203.772 14.0467C201.716 14.4494 200.196 15.1368 199.21 16.1089C198.224 17.0671 197.606 18.3725 197.356 20.0251L197.439 20.1292C198.203 19.4488 199.106 18.8933 200.147 18.4628C201.189 18.0323 202.341 17.817 203.605 17.817C205.619 17.817 207.361 18.2614 208.833 19.1502C210.305 20.039 211.437 21.2749 212.229 22.858C213.034 24.4273 213.437 26.2465 213.437 28.3156V28.7531C213.437 30.8778 213.013 32.7525 212.166 34.3773C211.319 36.0021 210.097 37.2728 208.5 38.1893C206.917 39.092 205.021 39.5433 202.813 39.5433ZM202.813 34.8773C204.383 34.8773 205.528 34.3218 206.25 33.2108C206.986 32.086 207.354 30.6001 207.354 28.7531V28.3156C207.354 26.6075 206.986 25.2119 206.25 24.1287C205.514 23.0455 204.355 22.5039 202.772 22.5039C201.202 22.5039 200.057 23.0455 199.335 24.1287C198.613 25.2119 198.251 26.6075 198.251 28.3156V28.6281C198.251 30.489 198.613 31.9957 199.335 33.1483C200.057 34.3009 201.216 34.8773 202.813 34.8773Z" fill="white" />
        <Path fill-rule="evenodd" clip-rule="evenodd" d="M262.999 24.8856C262.999 32.7393 256.633 39.1059 248.779 39.1059H223.894L223.893 39.1065V14.2209C223.893 6.36721 230.26 0.000549382 238.113 0.000549382H262.999L262.999 0V24.8856ZM245.225 10.6653H241.67V17.7754H234.56V21.3305H241.67V28.4407H245.225V21.3305H252.335V17.7754H245.225V10.6653Z" fill="white" />
      </Svg>
    </LinearGradient>
  )
}