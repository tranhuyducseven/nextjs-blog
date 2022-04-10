import { useSession, signIn, signOut } from "next-auth/react";
import Layout from "../layout/Layout";

export default function Login() {
  //   const { data: session } = useSession();
  //   if (session) {
  //     return (
  //       <>
  //         Signed in as {session.user.email} <br />
  //         <button onClick={() => signOut()}>Sign out</button>
  //       </>
  //     );
  //   }
  //   return (
  //     <Layout>
  //       Not signed in <br />
  //       <button onClick={() => signIn()}>Sign in</button>
  //     </Layout>
  //   );

  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return <p>Signed in as {session.user.email}</p>;
  }

  return <a href="/api/auth/signin">Sign in</a>;
}
