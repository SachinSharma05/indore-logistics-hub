CREATE TABLE "pickup_requests" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"phone" varchar(20) NOT NULL,
	"service_type" varchar(50) NOT NULL,
	"pickup_address" text NOT NULL,
	"delivery_address" text NOT NULL,
	"pickup_time" timestamp NOT NULL,
	"status" varchar(50) DEFAULT 'pending' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
