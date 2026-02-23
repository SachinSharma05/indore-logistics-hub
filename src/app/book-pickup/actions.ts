"use server";

import { db } from "@/db";
import { pickupRequests } from "@/db/schema";
import { redirect } from "next/navigation";

export async function createPickupRequest(formData: FormData) {
  const name = formData.get("name") as string;
  const phone = formData.get("phone") as string;
  const serviceType = formData.get("serviceType") as string;
  const pickupAddress = formData.get("pickupAddress") as string;
  const deliveryAddress = formData.get("deliveryAddress") as string;
  const pickupTime = formData.get("pickupTime") as string;

  if (
    !name ||
    !phone ||
    !serviceType ||
    !pickupAddress ||
    !deliveryAddress ||
    !pickupTime
  ) {
    throw new Error("All fields are required");
  }

  await db.insert(pickupRequests).values({
    name,
    phone,
    serviceType,
    pickupAddress,
    deliveryAddress,
    pickupTime: new Date(pickupTime),
  });

  redirect("/thank-you");
}