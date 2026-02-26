"use server";

import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import { requireAuth } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export async function updateProfile(formData: FormData) {
  const user = await requireAuth();

  const phone = formData.get("phone") as string;
  const companyName = formData.get("company_name") as string;
  const companyAddress = formData.get("company_address") as string;

  try {
    await db
      .update(users)
      .set({
        phone,
        company_name: companyName,
        company_address: companyAddress,
      })
      .where(eq(users.id, user.id));

    revalidatePath("/profile");

    return { success: true };
  } catch (error) {
    return { success: false, message: "Something went wrong" };
  }
}