import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  await prisma.user.delete({
    where: {
      id: Number(id),
    },
  });

  return NextResponse.json({
    message: "User deleted successfully",
  });
}