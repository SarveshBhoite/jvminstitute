import { NextRequest, NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";
import { apiSuccessResponse } from "@/utils/apiResponse";
import { handleApiError, ApiError } from "@/utils/errorHandler";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;
    const folder = (formData.get("folder") as string) || "jvm_uploads";

    if (!file) {
      throw new ApiError("No file provided in upload request", 400);
    }

    // Convert file to ArrayBuffer then Buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Upload to Cloudinary using Promise wrapper
    const uploadResult = await new Promise<{ secure_url: string }>((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: `jvm_institute/${folder}`,
          resource_type: "auto",
        },
        (error, result) => {
          if (error || !result) {
            reject(error || new Error("Cloudinary upload failed"));
          } else {
            resolve(result);
          }
        }
      );
      uploadStream.end(buffer);
    });

    return apiSuccessResponse(
      { url: uploadResult.secure_url },
      "Image uploaded to Cloudinary successfully",
      200
    );
  } catch (error) {
    return handleApiError(error);
  }
}
