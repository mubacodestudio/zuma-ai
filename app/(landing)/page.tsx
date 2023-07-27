import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      Landing Page(unprocted)
      <div>
        <Link href={"/sign-in"}>
          <Button>Login</Button>
        </Link>

        <Link href={"/sign-up"}>
          <Button>Register</Button>
        </Link>
      </div>
    </div>
  );
}
