import { ZodError } from "zod";
import { Prisma } from "@prisma/client";
import { apiErrorResponse } from "./apiResponse";

export class ApiError extends Error {
  statusCode: number;
  errors?: any;

  constructor(message: string, statusCode: number = 400, errors?: any) {
    super(message);
    this.statusCode = statusCode;
    this.errors = errors;
    Object.setPrototypeOf(this, ApiError.prototype);
  }
}

export function handleApiError(error: unknown) {
  console.error("[API Error]", error);

  if (error instanceof ApiError) {
    return apiErrorResponse(error.message, error.statusCode, error.errors);
  }

  if (error instanceof ZodError) {
    const issues = error.issues || (error as any).errors || [];
    const formattedErrors = issues.map((err: any) => ({
      field: Array.isArray(err.path) ? err.path.join(".") : String(err.path || ""),
      message: err.message,
    }));
    return apiErrorResponse("Validation failed", 422, formattedErrors);
  }

  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    const prismaErr = error as Prisma.PrismaClientKnownRequestError;
    if (prismaErr.code === "P2002") {
      const target = (prismaErr.meta?.target as string[]) || ["field"];
      return apiErrorResponse(
        `Record with this ${target.join(", ")} already exists`,
        409
      );
    }
    if (prismaErr.code === "P2025") {
      return apiErrorResponse("Record not found", 404);
    }
    return apiErrorResponse(`Database error: ${prismaErr.message}`, 400);
  }

  const message = error instanceof Error ? error.message : "Internal Server Error";
  return apiErrorResponse(message, 500);
}
