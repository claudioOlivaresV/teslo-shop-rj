import { Button } from "@/components/ui/button";
import React from "react";

export const HomePage = () => {
  return (
    <div>
      <h1 className="text-3xl font-montserrat">HomePage</h1>
      <h1 className="text-3xl font-montserrat font-normal">HomePage</h1>
      <h1 className="text-3xl font-montserrat font-bold">HomePage</h1>

      <div className="flex min-h-svh flex-col items-center justify-center">
        <Button>Click me</Button>
      </div>
    </div>
  );
};
