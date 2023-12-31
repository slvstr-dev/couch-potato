import { PropsWithChildren, useCallback, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { type VariantProps, tv } from 'tailwind-variants';

import { Option } from '@/types/interfaces';

export type ToggleVariants = VariantProps<typeof toggle>;

export type ToggleProps = PropsWithChildren<ToggleVariants> & {
  baseClassName?: string;
  onChange?: (option: Option) => void;
  isDisabled?: boolean;
  options: Option[];
};

export const Toggle = ({ isDisabled, baseClassName, options, onChange }: ToggleProps) => {
  const [activeIdx, setActiveIdx] = useState(0);

  const { base, text, pill } = toggle();

  return (
    <View className={base({ className: baseClassName })} style={{ gap: 10 }}>
      {options?.map((option, idx) => {
        const handlePress = useCallback(() => {
          setActiveIdx(idx);

          onChange?.(option);
        }, [idx, onChange]);

        return (
          <TouchableOpacity
            key={option.value}
            className={pill({
              isActive: activeIdx === idx,
              isDisabled,
            })}
            onPress={handlePress}
            disabled={isDisabled}>
            <Text className={text({ isActive: activeIdx === idx })}>{option.label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const toggle = tv({
  slots: {
    base: 'flex-row flex-wrap',
    pill: 'rounded-full px-8 py-2',
    text: 'font-semibold text-primary',
  },
  variants: {
    isActive: {
      true: {
        pill: 'bg-primary',
        text: 'text-white',
      },
    },
    isDisabled: {
      true: {
        pill: 'opacity-50',
      },
    },
  },
});
