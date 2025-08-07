"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RedirectPage() {
  const router = useRouter();

  useEffect(() => {
    router.push("/home");
  }, [router]);

  return <p>Redirecting to Home...</p>;
}
