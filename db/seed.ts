import { PrismaClient } from "@prisma/client";
import sampleData from "./sample-data";

async function main() {
    const prisma = new PrismaClient(); // No need for `await` here

    try {
        // Delete all existing products
        await prisma.product.deleteMany();

        // Seed the database with sample data
        await prisma.product.createMany({
            data: sampleData.products,
        });

        console.log("Database seeded with sample data");
    } catch (error) {
        console.error("Error seeding the database:", error);
    } finally {
        await prisma.$disconnect(); // Disconnect the Prisma Client
    }
}

main();