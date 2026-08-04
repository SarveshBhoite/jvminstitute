import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

// GET /api/events - Retrieve all events from PostgreSQL
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");
    const search = searchParams.get("search");

    const where: any = {};
    if (category && category !== "all") {
      where.category = category;
    }
    if (search) {
      where.OR = [
        { title: { contains: search, mode: "insensitive" } },
        { description: { contains: search, mode: "insensitive" } },
        { speakerName: { contains: search, mode: "insensitive" } },
      ];
    }

    const events = await prisma.event.findMany({
      where,
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ success: true, events });
  } catch (error: any) {
    console.error("Error fetching events:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch events from database" },
      { status: 500 }
    );
  }
}

// POST /api/events - Create new event registration in PostgreSQL
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { eventId, name, email, phone, expLevel } = body;

    if (!eventId || !name || !email || !phone) {
      return NextResponse.json(
        { success: false, error: "Missing required registration fields" },
        { status: 400 }
      );
    }

    const event = await prisma.event.findUnique({
      where: { id: eventId },
    });

    if (!event) {
      return NextResponse.json(
        { success: false, error: "Event not found" },
        { status: 404 }
      );
    }

    const passId = `JVM-PASS-${Math.floor(100000 + Math.random() * 900000)}`;

    const registration = await prisma.eventRegistration.create({
      data: {
        eventId,
        passId,
        name,
        email,
        phone,
        expLevel: expLevel || "Student",
      },
    });

    // Increment seats filled
    await prisma.event.update({
      where: { id: eventId },
      data: { seatsFilled: { increment: 1 } },
    });

    return NextResponse.json({
      success: true,
      registration: {
        passId,
        name: registration.name,
        eventTitle: event.title,
        date: event.date,
        time: event.time,
      },
    });
  } catch (error: any) {
    console.error("Error saving event registration:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process registration" },
      { status: 500 }
    );
  }
}
