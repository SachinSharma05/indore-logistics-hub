"use server";

import { db } from "@/db";
import { complaints } from "@/db/schema";
import { redirect } from "next/navigation";

export async function createComplaint(formData: FormData) {
    const clientId = formData.get("client_id") as string;
    const awb = formData.get("awb") as string;
    const message = formData.get("message") as string;

    if (!clientId || !awb || !message) {
        throw new Error("All fields are required");
    }

    await db.insert(complaints).values({
        client_id: parseInt(clientId, 10),
        awb,
        message,
        status: "open",
        created_at: new Date(),
    });

    redirect("/dashboard/complaints?success=true");
}