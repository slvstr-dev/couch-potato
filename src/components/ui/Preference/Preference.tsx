import { PropsWithChildren, Ref, forwardRef, useCallback } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { type VariantProps, tv } from 'tailwind-variants';

import { Icon, IconProps } from '@/components/ui/Icon/Icon';
import { Option } from '@/types/interfaces';

export type PreferenceVariants = VariantProps<typeof preference>;

export type PreferenceProps = PropsWithChildren<PreferenceVariants> & {
  baseClassName?: string;
  onPress: (option: Option) => void;
  isDisabled?: boolean;
  icon?: IconProps['icon'];
  label: string;
  option: Option;
};

export const Preference = forwardRef(function Preference(
  { isDisabled, baseClassName, option, onPress, label, icon }: PreferenceProps,
  ref: Ref<View>,
) {
  const { button } = preference();

  const handlePress = useCallback(() => {
    onPress(option);
  }, [onPress]);

  return (
    <View ref={ref} className={baseClassName} style={{ gap: 8 }}>
      <Text className="font-bold px-2">{label}</Text>

      <TouchableOpacity
        className={button({ isDisabled })}
        onPress={handlePress}
        disabled={isDisabled}>
        {!!icon && <Icon icon={icon} className="text-theme-medium" />}

        <Text className="flex-1">{option.label}</Text>

        <Icon icon="ChevronForward" className="text-theme-primary" />
      </TouchableOpacity>
    </View>
  );
});

const preference = tv({
  slots: {
    button: 'flex-row items-center p-2.5 border-theme-grey border border-y bg-white gap-x-2.5',
  },
  variants: {
    isDisabled: {
      true: {
        button: 'opacity-50',
      },
    },
  },
});