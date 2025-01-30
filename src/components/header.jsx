import { Input } from "./ui/input";
import React from "react";
import { Button } from "@/components/ui/button";
import { signIn } from "@/app/actions/sign-in";
import { signOut } from "@/app/actions/sign-out";

const HeaderPage = () => {
  return (
    <div className="grid grid-cols-3 items-center h-14">
      <div className="flex justify-start">
        <h1 className="font-bold text-xl">Discuss</h1>
      </div>
      <div className="flex justify-center">
        <Input type="text" placeholder="Search post..." />
      </div>
      <div className="flex justify-end gap-2">
        <form action={signIn}>
          {" "}
          <Button variant={"outline"}>Sign in</Button>
        </form>
        <form action={signIn}>
          <Button>Sign up</Button>
        </form>
      </div>
    </div>
  );
};

export default HeaderPage;
