"use server";

import { db } from "@/db";
import { users } from "@/db/schema";
import { verifyPassword } from "@/lib/hash";
import { createSession } from "@/lib/session";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

export async function loginUser(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const user = await db.query.users.findFirst({
    where: eq(users.email, email),
  });

  if (!user) throw new Error("Invalid credentials");

  const valid = await verifyPassword(
    password,
    user.password_hash
  );

  if (!valid) throw new Error("Invalid credentials");

  await createSession({
    userId: user.id,
    role: user.role,
  });

  redirect("/dashboard");
}