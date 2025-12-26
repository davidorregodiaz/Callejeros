import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { callejerosApi } from "../../lib/axios.client";

type tParams = Promise<{ id: string }>;

export async function GET(
  request: NextRequest,
  { params }: { params: tParams }
) {
  const { id } = await params;

  const backendUrl = process.env.BACKEND_API_URL;

  if (!backendUrl) {
    return NextResponse.json(
      { message: "BACKEND_API_URL no está configurado en .env" },
      { status: 500 }
    );
  }

  try {
    const { data, status } = await callejerosApi.get(`/animals/${id}`, {
      timeout: 10000,
    });

    if (status === 204) {
      return new NextResponse(null, { status: 204 });
    }

    return NextResponse.json(data, { status: status });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error.response) {
      const status = error.response.status;
      const errorData = error.response.data || {};

      return NextResponse.json(
        {
          message: errorData.message || "Couldn't fetch animal",
          code: status,
        },
        { status }
      );
    }

    if (error.request) {
      console.error("No response received:", error.request);
      return NextResponse.json(
        { message: "No se pudo conectar con el backend (timeout o red)" },
        { status: 503 }
      );
    }

    console.error("Error inesperado en Axios:", error.message);
    return NextResponse.json(
      {
        message: "Error interno del servidor",
      },
      { status: 500 }
    );
  }
}
