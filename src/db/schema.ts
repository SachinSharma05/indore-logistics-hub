import {
  boolean,
  decimal,
  integer,
  json,
  pgTable,
  serial,
  text,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

export const pickupRequests = pgTable("pickup_requests", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  phone: varchar("phone", { length: 20 }).notNull(),
  
  // New Category Field
  shipmentCategory: varchar("shipment_category", { length: 100 }), 
  
  serviceType: varchar("service_type", { length: 50 }).notNull(),
  pickupAddress: text("pickup_address").notNull(),
  deliveryAddress: text("delivery_address").notNull(),
  pickupTime: timestamp("pickup_time").notNull(),

  // New Dimension Fields
  weight: decimal("weight", { precision: 10, scale: 2 }), // e.g. 12.50
  length: integer("length"),
  breadth: integer("breadth"),
  height: integer("height"),

  status: varchar("status", { length: 50 }).default("pending").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
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

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: varchar("username", { length: 150 }).notNull().unique(),
  email: varchar("email", { length: 254 }).notNull().unique(),
  password_hash: text("password_hash").notNull(),
  role: text("role").notNull().default("client"), // client | super_admin
  roleId: uuid('role_id').references(() => roles.id),
  company_name: text("company_name"),
  company_address: text("company_address"),
  contact_person: text("contact_person"),
  phone: text("phone"),
  providers: json("providers").$type<string[]>().default([]),
  is_active: boolean("is_active").notNull().default(true),
  created_at: timestamp("created_at").defaultNow().notNull(),
});

export const roles = pgTable('roles', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: varchar('name', { length: 50 }).notNull().unique(),
  createdAt: timestamp('created_at').defaultNow(),
});