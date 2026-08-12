import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

// POST /api/leads - Save contact & enrollment lead enquiries to PostgreSQL
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, courseSlug, message, referralCode, source } = body;

    const cleanPhone = phone ? String(phone).replace(/\D/g, "") : "";

    if (!name || !email || !cleanPhone || cleanPhone.length !== 10) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid 10-digit mobile number." },
        { status: 400 }
      );
    }

    const lead = await (prisma as any).leadEnquiry.create({
      data: {
        name,
        email,
        phone,
        courseSlug: courseSlug || "General Enquiry",
        message: message || null,
        referralCode: referralCode || null,
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
