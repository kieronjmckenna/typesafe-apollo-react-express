-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT,
    "age" INTEGER NOT NULL,
    "hairColor" TEXT,
    "eyeColor" TEXT,
    "height" DOUBLE PRECISION NOT NULL,
    "weight" DOUBLE PRECISION,
    "address" TEXT,
    "netWorth" DOUBLE PRECISION,
    "favoriteFood" TEXT NOT NULL,
    "foo" INTEGER,
    "bar" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT false,
    "premiumUser" BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Fruit" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    PRIMARY KEY ("id")
);
