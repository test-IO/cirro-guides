import clsx from "clsx"
import { Icon } from "@/components/Icon"

const TYPE_MAP = {
  warning: {
    background: 'bg-red-50',
    icon: 'exclamation_circle',
    iconColor: 'text-red-600'
  },
};

export function Callout({ children, type }) {
  const { background, icon, iconColor } = TYPE_MAP[type] || TYPE_MAP.warning;

  return (
    <div className={clsx("rounded-md p-4", background)} >
      <div className="flex">
        <div className="flex pr-2 items-center">
          <Icon icon={icon} color={iconColor} className="h-8 w-8" />
        </div>
        <div className="flex">
          <span>{children}</span>
        </div>
      </div>
    </div>
  );
}
