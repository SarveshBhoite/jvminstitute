import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

// GET /api/referrals/settings - Retrieve referral reward amount
export async function GET() {
  try {
    const setting = await (prisma as any).siteSetting.findUnique({
      where: { key: "referral_reward_amount" },
    });

    const rewardAmount = setting ? parseInt(setting.value, 10) : 2000;

    return NextResponse.json({
      success: true,
      rewardAmount,
    });
  } catch (error: any) {
    console.error("Error fetching referral settings:", error);
    return NextResponse.json({ success: true, rewardAmount: 2000 });
  }
}

// POST /api/referrals/settings - Admin updates referral reward amount
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { rewardAmount } = body;

    const numericAmount = parseInt(String(rewardAmount), 10);
    if (isNaN(numericAmount) || numericAmount < 0) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid reward amount." },
        { status: 400 }
      );
    }

    await (prisma as any).siteSetting.upsert({
      where: { key: "referral_reward_amount" },
      update: { value: String(numericAmount) },
      create: { key: "referral_reward_amount", value: String(numericAmount) },
    });

    return NextResponse.json({
      success: true,
      rewardAmount: numericAmount,
      message: "Referral reward amount updated successfully!",
    });
  } catch (error: any) {
    console.error("Error updating referral settings:", error);
    return NextResponse.json(
      { success: false, error: "Failed to update referral setting" },
      { status: 500 }
    );
  }
}
