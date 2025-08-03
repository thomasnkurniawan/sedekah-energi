// hooks/useBootstrap.ts
import { useEffect } from "react";

export function useBootstrap() {
  useEffect(() => {
    // Only runs in browser
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
}