import { NextResponse } from "next/server";

export interface ApiResponsePayload<T = any> {
  success: boolean;
  message: string;
  data?: T;
  errors?: any;
}

export function apiSuccessResponse<T = any>(
  data: T,
  message: string = "Request successful",
  statusCode: number = 200,
  headers?: Record<string, string>
) {
  const payload: ApiResponsePayload<T> = {
    success: true,
    message,
    data,
  };
  return NextResponse.json(payload, { status: statusCode, headers });
}

export function apiErrorResponse(
  message: string = "An error occurred",
  statusCode: number = 400,
  errors: any = null,
  headers?: Record<string, string>
) {
  const payload: ApiResponsePayload = {
    success: false,
    message,
    ...(errors ? { errors } : {}),
  };
  return NextResponse.json(payload, { status: statusCode, headers });
}
