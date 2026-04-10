import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const channelId = searchParams.get('channelId')
  
  if (!channelId) {
    return NextResponse.json({ error: 'Channel ID required' }, { status: 400 })
  }
  
  try {
    const API_KEY = process.env.YOUTUBE_API_KEY
    
    if (!API_KEY) {
      // Return static data if no API key
      return NextResponse.json({
        subscriberCount: 6300,
        viewCount: 1200000,
        videoCount: 450
      })
    }
    
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${API_KEY}`,
      { next: { revalidate: 1800 } } // Cache for 30 minutes
    )
    
    if (!response.ok) {
      throw new Error('YouTube API error')
    }
    
    const data = await response.json()
    
    if (data.items && data.items[0]) {
      const stats = data.items[0].statistics
      return NextResponse.json({
        subscriberCount: parseInt(stats.subscriberCount),
        viewCount: parseInt(stats.viewCount),
        videoCount: parseInt(stats.videoCount)
      })
    }
    
    return NextResponse.json({ error: 'Channel not found' }, { status: 404 })
  } catch (error) {
    console.error('YouTube API error:', error)
    return NextResponse.json({ error: 'Failed to fetch stats' }, { status: 500 })
  }
}