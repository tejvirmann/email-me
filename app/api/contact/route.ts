import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { email, message } = await request.json()

    if (!message || !message.trim()) {
      return NextResponse.json({ error: 'message is required' }, { status: 400 })
    }

    await resend.emails.send({
      from: 'Email Me <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL!,
      replyTo: email || undefined,
      subject: email ? `message from ${email}` : 'new message',
      html: `
        <div style="font-family: 'Courier New', monospace; max-width: 600px; padding: 2rem; background: #0a0a0a; color: #f0f0f0;">
          <h2 style="font-size: 1.5rem; margin-bottom: 1.5rem; letter-spacing: -0.02em;">new message</h2>
          ${email ? `<p style="color: #888; font-size: 0.85rem; margin-bottom: 0.5rem;">from: ${email}</p>` : '<p style="color: #555; font-size: 0.85rem; margin-bottom: 0.5rem;">from: anonymous</p>'}
          <hr style="border: none; border-top: 1px solid #333; margin: 1rem 0;" />
          <p style="line-height: 1.8; white-space: pre-wrap;">${message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err: any) {
    console.error('contact error:', err)
    return NextResponse.json({ error: err.message || 'failed to send' }, { status: 500 })
  }
}
