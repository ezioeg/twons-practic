import React from 'react';
import {
  Home,
  ShoppingBag,
  Heart,
  MessageCircle,
  User,
  MapPin,
  ChevronDown,
  Bell,
  Search,
  Sliders,
  ArrowLeft,
  Star,
} from 'lucide-react-native';
import Svg, {Path, SvgXml} from 'react-native-svg';

// GENERAL ICONS
export const ConstructionIcon = () => {
  return (
    <Svg width="50" height="50" viewBox="0 0 24 24" fill="none">
      <Path
        fill="none"
        stroke="gray"
        strokeWidth="2"
        d="M5 12l5 5L19 7M3 3l18 18"
      />
    </Svg>
  );
};

// TAB BAR ICONS
export const StartIcon = ({size = 24, color = 'black', fill = 'none'}) => (
  <Home size={size} color={color} fill={fill} />
);
export const CartIcon = ({size = 24, color = 'black', fill = 'none'}) => (
  <ShoppingBag size={size} color={color} fill={fill} />
);
export const WishListIcon = ({size = 24, color = 'black', fill = 'none'}) => (
  <Heart size={size} color={color} fill={fill} />
);
export const ChatIcon = ({size = 24, color = 'black', fill = 'none'}) => (
  <MessageCircle size={size} color={color} fill={fill} />
);
export const ProfileIcon = ({size = 24, color = 'black', fill = 'none'}) => (
  <User size={size} color={color} fill={fill} />
);

// LOCATION ALERT SEARCH FILTER ICONS
export const LocationIcon = ({size = 24, color = '#6c543c', fill = 'none'}) => (
  <MapPin size={size} color={color} fill={fill} />
);

export const ChevronDownIcon = ({
  size = 24,
  color = 'black',
  fill = 'none',
}) => <ChevronDown size={size} color={color} fill={fill} />;

export const BellIcon = ({size = 24, color = 'black', fill = 'black'}) => (
  <Bell size={size} color={color} fill={fill} />
);

export const SearchIcon = ({size = 20, color = '#666', fill = 'none'}) => (
  <Search size={size} color={color} fill={fill} />
);

export const SlidersIcon = ({size = 24, color = 'white', fill = 'none'}) => (
  <Sliders size={size} color={color} fill={fill} />
);

// CATEGORY ICONS
export const TShirtIcon = () => {
  const xml = `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M16 4L20 6L18 12H16V4Z" fill="#6c543c"/>
        <path d="M8 4L4 6L6 12H8V4Z" fill="#6c543c"/>
        <path d="M8 4H16V20H8V4Z" fill="#6c543c"/>
      </svg>
    `;
  return <SvgXml xml={xml} width={50} height={50} />;
};

export const PantIcon = () => {
  const xml = `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M7 4H17L16 20H14L12 10L10 20H8L7 4Z" fill="#6c543c"/>
      </svg>
    `;
  return <SvgXml xml={xml} width={50} height={50} />;
};

export const DressIcon = () => {
  const xml = `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 4C13.1046 4 14 4.89543 14 6C14 7.10457 13.1046 8 12 8C10.8954 8 10 7.10457 10 6C10 4.89543 10.8954 4 12 4Z" fill="#6c543c"/>
        <path d="M8 8L12 20L16 8C16 8 14 10 12 10C10 10 8 8 8 8Z" fill="#6c543c"/>
      </svg>
    `;
  return <SvgXml xml={xml} width={50} height={50} />;
};

export const JacketIcon = () => {
  const xml = `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 4H9L12 6L15 4H18L20 7V20H16V14H8V20H4V7L6 4Z" fill="#6c543c"/>
        <path d="M6 4V7H4" stroke="#6c543c" stroke-width="1.5"/>
        <path d="M18 4V7H20" stroke="#6c543c" stroke-width="1.5"/>
        <path d="M12 6V12" stroke="#6c543c" stroke-width="1.5"/>
        <path d="M8 14H16" stroke="#6c543c" stroke-width="1.5"/>
      </svg>
    `;
  return <SvgXml xml={xml} width={50} height={50} />;
};

// PRODUCT ICONS
export const ArrowLeftIcon = ({size = 24, color = 'black', fill = 'none'}) => (
  <ArrowLeft size={size} color={color} fill={fill} />
);

export const HeartIcon = ({size = 24, color = 'black', fill = 'none'}) => (
  <Heart size={size} color={color} fill={fill} />
);

export const StarIcon = ({size = 18, color = '#F4B400', fill = '#F4B400'}) => (
  <Star size={size} color={color} fill={fill} />
);

export const ShoppingBagIcon = ({
  size = 24,
  color = 'white',
  fill = 'none',
  marginRight = 10,
}) => (
  <ShoppingBag
    size={size}
    color={color}
    fill={fill}
    style={{marginRight: marginRight}}
  />
);
