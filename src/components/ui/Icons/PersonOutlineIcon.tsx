import { Svg, Path, type SvgProps } from 'react-native-svg';

interface PersonOutlineIconProps extends SvgProps {
  size?: number;
}

export const PersonOutlineIcon = ({ size = 16, ...props }: PersonOutlineIconProps) => {
  return (
    <Svg height={size} width={size} viewBox="0 0 512 512" {...props}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z"
      />

      <Path
        fill="none"
        stroke="currentColor"
        strokeMiterlimit={10}
        strokeWidth={32}
        d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z"
      />
    </Svg>
  );
};
