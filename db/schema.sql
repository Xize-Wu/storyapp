DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS stories CASCADE;
DROP TABLE IF EXISTS parent_comments CASCADE;
DROP TABLE IF EXISTS child_comments CASCADE;

CREATE TABLE "users" (
  "id" integer PRIMARY KEY,
  "username" varchar NOT NULL UNIQUE,
  "email" varchar NOT NULL UNIQUE,
  "password" varchar,
  "created_at" timestamp DEFAULT (now()),
  "application_message" text NOT NULL,
  "is_admin" boolean DEFAULT false,
  "is_approved" boolean DEFAULT false
);

CREATE TABLE "stories"(
  "id" integer PRIMARY KEY,
  "user_id" integer NOT NULL,
  "created_at" timestamp DEFAULT (now()),
  "title" varchar,
  "content" text,
  "is_published" boolean DEFAULT false,
  "is_deleted" boolean DEFAULT false
);

CREATE TABLE "parent_comments"(
  "id" integer PRIMARY KEY,
  "story_id" integer NOT NULL,
  "user_id" integer NOT NULL,
  "created_at" timestamp DEFAULT (now()),
  "content" text
);

CREATE TABLE "child_comments"(
  "id" integer PRIMARY KEY,
  "parent_id" integer NOT NULL,
  "user_id" integer NOT NULL,
  "created_at" timestamp DEFAULT (now()),
  "content" text
);

ALTER TABLE "stories"
ADD CONSTRAINT "fk_stories_user"
FOREIGN KEY ("user_id")
REFERENCES "users" ("id");

ALTER TABLE "parent_comments"
ADD CONSTRAINT "fk_parent_comments_story"
FOREIGN KEY ("story_id")
REFERENCES "stories" ("id");

ALTER TABLE "parent_comments"
ADD CONSTRAINT "fk_parent_comments_user"
FOREIGN KEY ("user_id")
REFERENCES "users" ("id");

ALTER TABLE "child_comments"
ADD CONSTRAINT "fk_child_comments_parent"
FOREIGN KEY ("parent_id")
REFERENCES "parent_comments" ("id");
