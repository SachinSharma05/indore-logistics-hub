"use server";

import { db } from "@/db"; // Adjust based on your setup
import { pickupRequests } from "@/db/schema";
import { redirect } from "next/navigation";

export async function createPickupRequest(formData: FormData) {
  // Extract all fields
  const name = formData.get("name") as string;
  const phone = formData.get("phone") as string;
  const serviceType = formData.get("serviceType") as string;
  const shipmentCategory = formData.get("shipmentCategory") as string;
  const pickupAddress = formData.get("pickupAddress") as string;
  const deliveryAddress = formData.get("deliveryAddress") as string;
  const pickupTime = formData.get("pickupTime") as string;
  
  // Extract Numeric Dimensions
  const weight = formData.get("weight") ? Number(formData.get("weight")) : null;
  const length = formData.get("length") ? Number(formData.get("length")) : null;
  const breadth = formData.get("breadth") ? Number(formData.get("breadth")) : null;
  const height = formData.get("height") ? Number(formData.get("height")) : null;

  // Basic Validation
  if (!name || !phone || !serviceType || !pickupAddress || !deliveryAddress || !pickupTime) {
    throw new Error("Missing required fields. Please fill out the full manifest.");
  }

  try {
    await db.insert(pickupRequests).values({
      name,
      phone,
      serviceType,
      shipmentCategory,
      pickupAddress,
      deliveryAddress,
      pickupTime: new Date(pickupTime),
      weight: weight?.toString(), // Drizzle decimal often expects string or number depending on driver
      length,
      breadth,
      height,
      status: "pending",
    });
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to schedule pickup. Please try again.");
  }

  redirect("/thank-you");
}