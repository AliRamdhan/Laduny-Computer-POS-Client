import React from "react";
import OTPForm from "@/laduny/app/auth/verify/_components/OTPForm";

const QROTPGenerator = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="relative w-96 h-96 border border-black">
        <div className="absolute inset-0 w-full h-full" />
        <img
          src="/placeholder.svg"
          width="384"
          height="384"
          alt="QR Code"
          className="rounded-md absolute inset-0 m-auto"
          style={{ aspectRatio: "384/384", objectFit: "cover" }}
        />
      </div>
      <div className="mt-8">
        <OTPForm />
      </div>
    </div>
  );
};

export default QROTPGenerator;
