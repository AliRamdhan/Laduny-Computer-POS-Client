"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    localStorage.setItem("token", `${process.env.NEXT_AUTH_SECRET}`);
    router.push("/laduny/dashboard");
  }, [router]);

  return <div>Loading...</div>;
};

export default Page;
