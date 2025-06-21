import { NextRequest, NextResponse } from 'next/server'
const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN
const telegramChatId = process.env.TELEGRAM_CHAT_ID




export async function POST(request: NextRequest) {
  try {
    const { type, name, email, subject, message } = await request.json()
    // console.log('Received contact form data:', {
    //   type,
    //   name,
    //   email,
    //   subject,
    //   message
    // });
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

    // Log the contact form submission
    console.log('Contact form submission:', {
      type,
      name,
      email,
      subject: subject || 'No subject',
      message,
      timestamp: new Date().toISOString()
    })

    // If Telegram bot token or chat ID is not set, skip sending Telegram message
    
    if (!telegramBotToken || !telegramChatId) {
      console.warn(
        'Telegram bot token or chat ID not found in environment variables.'
      )
      return NextResponse.json(
        {
          success: true,
          message: `${
            type === 'email' ? 'Email' : 'Message'
          } sent successfully! (Telegram integration not configured)`
        },
        { status: 200 }
      )
    }

    try {
      // Validate environment variables format
      if (!telegramBotToken.includes(':')) {
        console.error('Invalid Telegram bot token format')
        return NextResponse.json(
          {
            success: true,
            message: `${
              type === 'email' ? 'Email' : 'Message'
            } received successfully! (Telegram configuration error)`
          },
          { status: 200 }
        )
      }

      // Sanitize the message to prevent Telegram API issues
      const sanitizeText = (text: string) => {
        return text
          .replace(/[<>&]/g, (match) => {
            switch (match) {
              case '<': return '&lt;'
              case '>': return '&gt;'
              case '&': return '&amp;'
              default: return match
            }
          })
          .replace(/[\u0000-\u001F\u007F]/g, '') // Remove control characters
      }

      const telegramMessage = `A ${type} Message From Portfolio:
Name: ${sanitizeText(name)}
Email: ${sanitizeText(email)}
Subject: ${sanitizeText(subject || 'No subject')}
Message:
${sanitizeText(message)}`

      // Ensure message isn't too long (Telegram limit is 4096 characters)
      const truncatedMessage = telegramMessage.length > 4000 
        ? telegramMessage.substring(0, 4000) + '...[message truncated]'
        : telegramMessage

      const telegramApiUrl = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`

      console.log('Sending to Telegram:', {
        chatId: telegramChatId,
        messageLength: truncatedMessage.length
      })

      const response = await fetch(telegramApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          chat_id: telegramChatId,
          text: truncatedMessage
        })
      })

      const responseData = await response.json()

      if (!response.ok) {
        console.error('Failed to send Telegram message:', {
          status: response.status,
          statusText: response.statusText,
          error: responseData
        })
        return NextResponse.json(
          {
            success: true,
            message: `${
              type === 'email' ? 'Email' : 'Message'
            } received successfully! (Telegram notification failed: ${responseData.description || 'Unknown error'})`
          },
          { status: 200 }
        )
      } else {
        console.log('Telegram message sent successfully!', responseData)
      }
    } catch (telegramError) {
      console.error('Error sending Telegram message:', telegramError)
      const errorMessage = telegramError instanceof Error ? telegramError.message : 'Unknown error'
      return NextResponse.json(
        {
          success: true,
          message: `${
            type === 'email' ? 'Email' : 'Message'
          } received successfully! (Telegram notification failed: ${errorMessage})`
        },
        { status: 200 }
      )
    }

    // If everything is successful, return a success response
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
