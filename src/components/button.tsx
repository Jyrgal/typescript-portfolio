import { animated, useSpring } from '@react-spring/web';
import { memo, useState } from 'react';

export const Button = memo(
  ({
    value,
    type,
    styles,
    onClick,
  }: {
    value: string;
    type?: 'button' | 'submit' | 'reset';
    styles?: string;
    onClick: () => void;
  }) => {
    const [toggle, useToggle] = useState(false);
    const props = useSpring({
      from: { opacity: 0 },
      to: {
        opacity: toggle ? 1 : 0,
        width: toggle ? '100%' : '0%',
        backgroundColor: toggle ? 'blue' : 'cyan',
      },
    });
    return (
      <button
        className={styles}
        onClick={(e) => {
          e.preventDefault();
          onClick();
        }}
        onMouseEnter={() => useToggle(true)}
        onMouseLeave={() => useToggle(false)}
      >
        {value}
        <animated.div style={props} className='border relative'></animated.div>
      </button>
    );
  },
);
