import { revalidatePath } from "next/cache"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  // Optional: verify a secret header here
  try {
    const body = await req.json().catch(() => ({}))
    // Revalidate homepage and any paths you may derive from payload
    revalidatePath("/")
    return NextResponse.json(
      { revalidated: true, received: body },
      { status: 200 }
    )
  } catch (e) {
    return NextResponse.json({ error: "Failed to revalidate" }, { status: 500 })
  }
}
