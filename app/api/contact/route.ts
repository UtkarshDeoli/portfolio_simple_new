import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { type, name, email, subject, message } = await request.json()

    // Basic validation
    if (!name || !email || !message || !type) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Here you would implement the actual email/message sending logic
    // Options:
    // 1. Use Nodemailer with Gmail/SMTP
    // 2. Use SendGrid
    // 3. Use Resend
    // 4. Use AWS SES
    // 5. For DMs, integrate with Discord, Slack, or Telegram APIs

    // For now, we'll just log the data and simulate success
    console.log('Contact form submission:', {
      type,
      name,
      email,
      subject: subject || 'No subject',
      message,
      timestamp: new Date().toISOString()
    })

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000))

    // TODO: Replace with actual email/messaging service implementation
    // Example with Nodemailer:
    /*
    const nodemailer = require('nodemailer')
    
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    })

    const mailOptions = {
      from: email,
      to: 'utkarsh.deoli@gmail.com',
      subject: `Portfolio Contact: ${subject || 'New Message'}`,
      html: `
        <h3>New ${type} from Portfolio</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Type:</strong> ${type}</p>
        ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    }

    await transporter.sendMail(mailOptions)
    */

    return NextResponse.json(
      { 
        success: true, 
        message: `${type === 'email' ? 'Email' : 'Message'} sent successfully!` 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
