import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const body = await request.json()
    const { fullName, email, phone, course, inquiryType, message, toNumber } = body

    // Yahan aap SMS gateway integrate karein
    // Jaise: MSG91, TextLocal, Fast2SMS, Twilio, etc.
    
    // Example using Fast2SMS (popular in India)
    const smsText = `New Inquiry: ${inquiryType.toUpperCase()} - Name: ${fullName}, Phone: ${phone}, Course: ${course}, Message: ${message}`
    
    // Fast2SMS API Call
    const smsResponse = await fetch('https://www.fast2sms.com/dev/bulkV2', {
      method: 'POST',
      headers: {
        'authorization': process.env.FAST2SMS_API_KEY, // .env file mein save karein
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        route: 'v3',
        sender_id: 'TXTIND',
        message: smsText,
        language: 'english',
        flash: 0,
        numbers: toNumber // 6201084662
      })
    })

    // Agar Fast2SMS nahi hai to email bhej sakte hain
    // Ya database mein save kar sakte hain

    return NextResponse.json({ 
      success: true, 
      message: 'Inquiry submitted successfully' 
    })
    
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to submit inquiry' },
      { status: 500 }
    )
  }
}