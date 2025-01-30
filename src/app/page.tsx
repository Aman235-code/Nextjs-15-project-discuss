// import { Button } from "@/components/ui/button";
// import { signIn } from "./actions/sign-in";
// import { signOut } from "./actions/sign-out";
// import { auth } from "@/auth";

export default async function Home() {
  // const session = await auth();
  return (
    <div>
      <h1>Home Page</h1>
      {/* <form action={signIn}>
        <Button type="submit">SignIn</Button>
      </form>
      <form action={signOut}>
        <Button type="submit">Sign Out</Button>
      </form> */}
      {/* {session?.user && <div>{JSON.stringify(session.user)}</div>} */}
    </div>
  );
}
