import React from 'react';

type IconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

const PixOutline = (
  { size = 24, ...props }: IconProps,
  svgRef: React.Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    width={size}
    height={size}
    ref={svgRef}
    {...props}
  >
    <path
      d="M5.06748 14.3734L5.0469 14.353L5.02518 14.3338L4.44069 13.8166L3.26578 12.6417C2.91141 12.2873 2.91141 11.7127 3.26578 11.3583L4.43168 10.1925L5.02626 9.66653L5.04808 9.64723L5.06874 9.6267L5.08939 9.60617C5.08939 9.60617 5.08939 9.60617 5.0894 9.60616C5.45111 9.24661 6.05023 9.00005 6.4999 9.00005C6.80861 9.00005 7.16675 9.12743 7.64835 9.60616C7.64835 9.60617 7.64835 9.60617 7.64836 9.60617L7.66255 9.62029L7.67677 9.63442L7.69154 9.64797L7.70629 9.6615C7.7063 9.66151 7.7063 9.66151 7.7063 9.66151C7.88154 9.82228 8.03645 9.97899 8.21863 10.1636L8.21915 10.1641L8.33393 10.2802L8.33496 10.2813C8.54989 10.4981 8.82817 10.7748 9.14992 11.0266C9.88601 11.6026 10.7843 11.998 11.9903 12C10.8303 12.002 9.92795 12.3502 9.16348 12.9266L9.76551 13.725L9.16348 12.9266C8.71235 13.2667 8.29134 13.7135 7.96931 14.0552L7.94382 14.0822L8.67148 14.7682L7.94381 14.0822C7.83257 14.2003 7.73287 14.306 7.63868 14.4022C7.16059 14.8748 6.80619 15 6.49993 15C6.04957 15 5.44927 14.753 5.08807 14.3939L5.08806 14.3939L5.06748 14.3734ZM16.056 9.91786L15.3284 9.23192L16.056 9.91785C16.1673 9.79984 16.267 9.69413 16.3611 9.59789C16.8392 9.12528 17.1936 9.00005 17.4999 9.00005C17.9503 9.00005 18.5506 9.24712 18.9118 9.60617L18.9323 9.62663L18.9529 9.64709L18.9747 9.66632L19.5614 10.1855L20.7342 11.3583C21.0886 11.7127 21.0886 12.2873 20.7342 12.6417L19.5688 13.807L18.9736 14.3336L18.9518 14.3529L18.9311 14.3734L18.9104 14.3939C18.5487 14.7535 17.9496 15 17.4999 15C17.1912 15 16.8331 14.8727 16.3515 14.394C16.3515 14.3939 16.3515 14.3939 16.3515 14.3939L16.3373 14.3798L16.3231 14.3657L16.3083 14.3521L16.2935 14.3386C16.2935 14.3386 16.2935 14.3386 16.2935 14.3386C16.1183 14.1778 15.9634 14.0211 15.7812 13.8365L15.7807 13.836L15.6659 13.7198L15.6649 13.7188C15.4499 13.502 15.1717 13.2253 14.8499 12.9735C14.1138 12.3975 13.2155 12.0021 12.0095 12C13.1695 11.9981 14.0719 11.6499 14.8364 11.0735C15.2875 10.7334 15.7085 10.2866 16.0305 9.9449L16.056 9.91786ZM13.5153 6.78695L14.229 7.48735L13.5153 6.78695C13.3207 6.98526 13.1604 7.15531 13.0256 7.29835L13.0241 7.29996C12.7257 7.61662 12.5867 7.76014 12.4282 7.87964C12.3544 7.9353 12.3132 7.95508 12.2776 7.96718C12.2394 7.98021 12.1604 8.00005 11.9999 8.00005C11.8573 8.00005 11.7943 7.98157 11.7676 7.97185C11.7406 7.96202 11.6998 7.94279 11.6151 7.87651C11.5107 7.79483 11.3874 7.67875 11.1765 7.46602C11.1762 7.46577 11.176 7.46553 11.1758 7.46528L11.0753 7.36359L11.0747 7.36302L11.0702 7.35845C10.8983 7.18414 10.6821 6.96491 10.4392 6.7405C10.0248 6.33281 9.54041 5.94654 8.98223 5.64189L11.3583 3.26578C11.7127 2.91141 12.2873 2.91141 12.6417 3.26578L15.0179 5.64207C14.4469 5.95395 13.9533 6.35125 13.5327 6.76929L13.5327 6.76924L13.524 6.77809L13.5153 6.78695ZM10.467 17.2307L10.4714 17.2264L10.4802 17.2176L10.4802 17.2176L10.4845 17.2131C10.6792 17.0148 10.8395 16.8447 10.9743 16.7016L10.9757 16.7001C11.2741 16.3835 11.4131 16.24 11.5716 16.1204C11.6454 16.0648 11.6867 16.045 11.7222 16.0329C11.7605 16.0199 11.8394 16 11.9999 16C12.1426 16 12.2055 16.0185 12.2322 16.0282C12.2592 16.0381 12.3001 16.0573 12.3848 16.1236L13.001 15.3361L12.3848 16.1236C12.4891 16.2053 12.6124 16.3213 12.8233 16.5341C12.8236 16.5343 12.8238 16.5346 12.8241 16.5348L12.9245 16.6365L12.925 16.637L12.9295 16.6415C13.1014 16.8159 13.3177 17.0352 13.5606 17.2596C13.975 17.6673 14.4595 18.0536 15.0176 18.3582L12.6417 20.7342C12.2873 21.0886 11.7127 21.0886 11.3583 20.7342L8.98203 18.3579C9.55301 18.046 10.0466 17.6487 10.467 17.2307Z"
      stroke="#B8C3FF"
      strokeWidth="2"
    />
  </svg>
);

const ForwardRef = React.forwardRef(PixOutline);
export default ForwardRef;