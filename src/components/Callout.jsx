import { Icon } from "@/components/Icon"
import clsx from "clsx"

const TYPE_MAP = {
  warning: {
    background: "bg-red-50",
    icon: "exclamation_circle",
    iconColor: "text-red-600",
  },
  info: {
    background: "bg-blue-50",
    icon: "exclamation_circle",
    iconColor: "text-blue-600",
  },
}

export function Callout({ children, type }) {
  const { background, icon, iconColor } = TYPE_MAP[type] || TYPE_MAP.warning

  return (
    <div className={clsx("rounded-md p-4", background, "dark:bg-slate-800")}>
      <div className="flex">
        <div className="flex items-center pr-2">
          <Icon icon={icon} color={iconColor} className="h-8 w-8" />
        </div>
        <div className="flex">
          <span>{children}</span>
        </div>
      </div>
    </div>
  )
}
