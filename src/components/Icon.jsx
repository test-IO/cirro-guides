import {
  ClipboardDocumentCheckIcon,
  MoonIcon,
  RectangleStackIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline"
import clsx from "clsx"
import { useId } from "react"

const icons = {
  shield_check: ShieldCheckIcon,
  rectangle_stack: RectangleStackIcon,
  clipboard_document_check: ClipboardDocumentCheckIcon,
}

const iconStyles = {
  blue: "[--icon-foreground:var(--color-slate-900)] [--icon-background:var(--color-white)]",
  amber: "[--icon-foreground:var(--color-amber-900)] [--icon-background:var(--color-amber-100)]",
}

export function Icon({ color = "blue", icon, className, ...props }) {
  let id = useId()
  let IconComponent = icons[icon]

  return <IconComponent id={id} className={clsx(className, "text-sky-500")} {...props} />
}
