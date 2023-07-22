import UserCard from "@/components/UserCard/UserCard";
import styles from "./page.module.css";
import { prisma } from "@/lib/prisma";
import AuthCheck from "@/components/AuthCheck";

export default async function Users() {
  const users = await prisma.user.findMany();

  return (
    <AuthCheck message="Please sign in to continue">
      <div className={styles.grid}>
        {users.map((user) => {
          return <UserCard key={user.id} {...user} />;
        })}
      </div>
    </AuthCheck>
  );
}
