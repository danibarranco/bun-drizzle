CREATE SCHEMA "auth";
--> statement-breakpoint
ALTER TABLE "auth"."users" ALTER COLUMN "phone" DROP NOT NULL;