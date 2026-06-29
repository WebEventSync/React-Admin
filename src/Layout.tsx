import type { ReactNode } from "react";
import {
  Layout as RALayout,
  CheckForApplicationUpdate,
} from "react-admin";

export const Layout = ({ children }: { children: ReactNode }) => (
  <RALayout
    sx={{
      background:
        "linear-gradient(135deg, #243b8f 0%, #5d2db9 100%)",

      "& .RaLayout-content": {
        background: "transparent",
      },

      "& .RaLayout-appFrame": {
        background: "transparent",
      },

      "& .RaLayout-main": {
        background: "transparent",
      },
    }}
  >
    {children}
    <CheckForApplicationUpdate />
  </RALayout>
);