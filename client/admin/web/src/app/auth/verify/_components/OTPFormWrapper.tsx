import React from "react";
import OTPForm from "./OTPForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/laduny/components/ui/card";
import { GalleryVerticalEnd } from "lucide-react";
const OTPFormWrapper = () => {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10">
      <div className="w-full max-w-sm">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>
              {" "}
              <a
                href="#"
                className="flex flex-col items-center gap-2 font-medium"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-md">
                  <GalleryVerticalEnd className="size-6" />
                </div>
                <span className="sr-only">Acme Inc.</span>
              </a>
              <h1 className="text-xl text-center font-bold">
                Welcome to Acme Inc.
              </h1>
            </CardTitle>
            <CardDescription>
              <div className="text-center text-lg">
                Two-factor authentication
              </div>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <OTPForm />
          </CardContent>
          <CardFooter className="flex justify-between">
            <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary  ">
              By clicking continue, you agree to our{" "}
              <a href="#">Terms of Service</a> and{" "}
              <a href="#">Privacy Policy</a>.
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default OTPFormWrapper;
