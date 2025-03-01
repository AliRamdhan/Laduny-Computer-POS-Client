"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/laduny/dashboard");
  }, [router]);

  return <div>Loading...</div>;
};

export default Page;
