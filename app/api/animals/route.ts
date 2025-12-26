import { NextResponse } from "next/server";

export async function GET() {
  const url = process.env.BACKEND_API_URL + "/animals";

  try {
    const response = await fetch(url);

    if (!response.ok) {
      return NextResponse.json(
        {
          message: "Couldn't fetch adoptions, something went wrong",
          code: response.status,
        },
        {
          status: response.status,
        }
      );
    }

    if (response.status === 204) {
      return new NextResponse(null, { status: 204 });
    }

    const { data } = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Something went wrong",
        detail: String(error),
      },
      {
        status: 500,
      }
    );
  }
}
