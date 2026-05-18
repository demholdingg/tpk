import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, company, phone, service, message } = body

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      )
    }

    // ── Option A: Nodemailer (SMTP) ────────────────────────────────────────────
    // Uncomment and configure when SMTP credentials are available:
    //
    // import nodemailer from 'nodemailer'
    // const transporter = nodemailer.createTransport({
    //   host: process.env.SMTP_HOST,
    //   port: Number(process.env.SMTP_PORT),
    //   auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    // })
    // await transporter.sendMail({
    //   from:    `"${name}" <${process.env.SMTP_USER}>`,
    //   to:      process.env.CONTACT_EMAIL ?? 'info@pesonakahayan.co.id',
    //   replyTo: email,
    //   subject: `New Inquiry from ${name} — ${service || 'General'}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Company:</strong> ${company || '-'}</p>
    //     <p><strong>Phone:</strong> ${phone || '-'}</p>
    //     <p><strong>Service:</strong> ${service || '-'}</p>
    //     <hr/>
    //     <p><strong>Message:</strong></p>
    //     <p>${message.replace(/\n/g, '<br/>')}</p>
    //   `,
    // })

    // ── Option B: Resend ───────────────────────────────────────────────────────
    // import { Resend } from 'resend'
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({ from, to, subject, html })

    // ── Dev: log to console ────────────────────────────────────────────────────
    console.log('[Contact Form]', { name, email, company, phone, service, message })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (err) {
    console.error('[Contact API Error]', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
