"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import formbricks from "@formbricks/js";

export default function FormbricksProvider() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    formbricks.init({
      environmentId: process.env.NEXT_PUBLIC_ENV_ID_FORM || "",
      apiHost: "https://app.formbricks.com",
    });
  }, []);

  useEffect(() => {
    formbricks?.registerRouteChange();
  }, [pathname, searchParams]);

  return null;
}
