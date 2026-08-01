import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// POST /api/leads - Save contact & enrollment lead enquiries to PostgreSQL
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, courseSlug, message, source } = body;

    if (!name || !email || !phone) {
      return NextResponse.json(
        { success: false, error: "Name, email, and phone number are required." },
        { status: 400 }
      );
    }

    const lead = await prisma.leadEnquiry.create({
      data: {
        name,
        email,
        phone,
        courseSlug: courseSlug || "General Enquiry",
        message: message || null,
        source: source || "WEBSITE_FORM",
      },
    });

    return NextResponse.json({
      success: true,
      message: "Lead enquiry submitted successfully",
      leadId: lead.id,
    });
  } catch (error: any) {
    console.error("Error creating lead enquiry:", error);
    return NextResponse.json(
      { success: false, error: "Failed to submit lead enquiry" },
      { status: 500 }
    );
  }
}
