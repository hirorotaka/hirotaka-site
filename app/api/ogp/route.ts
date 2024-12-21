// app/api/ogp/route.ts
import { NextResponse } from 'next/server';
import ogs from 'open-graph-scraper';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const url = searchParams.get('url');

    if (!url) {
      return NextResponse.json({ error: 'URL is required', status: 400 });
    }

    const options = {
      url,
      timeout: 10000, // 10秒でタイムアウト
      headers: {
        'user-agent':
          'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
      },
    };

    const { result } = await ogs(options);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({
      error: error instanceof Error ? error.message : 'Unknown error',
      status: 500,
    });
  }
}
