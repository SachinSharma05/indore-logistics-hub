"use server";

import { db } from "@/db";
import { users } from "@/db/schema";
import { hashPassword } from "@/lib/hash";
import { redirect } from "next/navigation";

export async function registerUser(formData: FormData) {
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const password = formData.get("password") as string;

  const password_hash = await hashPassword(password);

  await db.insert(users).values({
    username: `${firstName} ${lastName}`,
    email,
    phone,
    password_hash,
    role: "public",
  });

  redirect("/login");
}