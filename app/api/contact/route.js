import { NextResponse } from "next/server"

export async function POST(request) {
  try {
    // Parse the request body
    const body = await request.json()

    // Validate the form data
    const { name, email, phone, description } = body

    if (!name || !email || !phone || !description) {
      return NextResponse.json({ error: "جميع الحقول مطلوبة" }, { status: 400 })
    }

    // Here you would typically send the data to a database or email service
    // For this example, we'll just log it and return a success response
    console.log("Form submission:", { name, email, phone, description })

    // In a real application, you might use a service like Nodemailer, SendGrid, etc.
    // Example: await sendEmail({ name, email, phone, description });

    // Return a success response
    return NextResponse.json({ success: true, message: "تم استلام رسالتك بنجاح" }, { status: 200 })
  } catch (error) {
    console.error("Error processing contact form:", error)

    return NextResponse.json({ error: "حدث خطأ أثناء معالجة النموذج" }, { status: 500 })
  }
}
