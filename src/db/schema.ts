import {
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const pickupRequests = pgTable("pickup_requests", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  phone: varchar("phone", { length: 20 }).notNull(),
  serviceType: varchar("service_type", { length: 50 }).notNull(),
  pickupAddress: text("pickup_address").notNull(),
  deliveryAddress: text("delivery_address").notNull(),
  pickupTime: timestamp("pickup_time").notNull(),
  status: varchar("status", { length: 50 })
    .default("pending")
    .notNull(),
  createdAt: timestamp("created_at")
    .defaultNow()
    .notNull(),
});

export const complaints = pgTable("complaints", {
  id: serial("id").primaryKey(),
  client_id: integer("client_id").notNull(),   // FK → users.id
  awb: varchar("awb", { length: 50 }).notNull(),
  // Client side
  message: text("message").notNull(),
  // Resolver side
  resolution_comment: text("resolution_comment"), // 👈 NEW
  resolved_by: integer("resolved_by"),             // FK → users.id (admin/associate)
  resolved_at: timestamp("resolved_at"),
  status: varchar("status", { length: 20 })
    .default("open")
    .notNull(), // open | in_progress | resolved
  created_at: timestamp("created_at").defaultNow().notNull(),
  updated_at: timestamp("updated_at").defaultNow().notNull(),
});