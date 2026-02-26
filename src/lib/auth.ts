import { db } from "@/db";
import { users } from "@/db/schema";
import { getSession } from "./session";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

/**
 * Get logged-in user
 */
export async function getCurrentUser() {
  const session = await getSession();

  if (!session?.userId) return null;

  const user = await db.query.users.findFirst({
    where: eq(users.id, session.userId as number),
  });

  return user || null;
}

/**
 * Protect routes
 */
export async function requireAuth() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  return user;
}