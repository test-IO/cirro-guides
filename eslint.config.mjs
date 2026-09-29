import next from "eslint-config-next"

const config = [
  ...next,
  { ignores: [".next/", "out/"] },
  // Components read browser-only state (localStorage, navigator) on mount to avoid hydration mismatches.
  { rules: { "react-hooks/set-state-in-effect": "off" } },
]

export default config
