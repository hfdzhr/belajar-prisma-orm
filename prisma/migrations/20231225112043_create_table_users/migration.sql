-- CreateTable
CREATE TABLE "users" (
    "username" VARCHAR(100) NOT NULL,
    "password" VARCHAR(100) NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "token" VARCHAR(100),

    CONSTRAINT "users_pkey" PRIMARY KEY ("username")
);

-- CreateIndex
CREATE INDEX "users_username_name_idx" ON "users"("username", "name");
