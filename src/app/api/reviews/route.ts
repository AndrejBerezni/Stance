// app/api/reviews/route.ts
import { NextRequest, NextResponse } from 'next/server';

import { getReviewsForProduct } from '@/features/product/data/server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    const productId = searchParams.get('productId');
    const sort = searchParams.get('sort') as 'rating' | 'created_at';
    const limit = parseInt(searchParams.get('limit') || '10');
    const page = parseInt(searchParams.get('page') || '1');

    if (!productId) {
      return NextResponse.json(
        { error: 'Product ID is required' },
        { status: 400 }
      );
    }

    const result = await getReviewsForProduct({
      productId,
      sort: sort || 'created_at',
      limit,
      page,
    });

    return NextResponse.json(result);
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch reviews' },
      { status: 500 }
    );
  }
}
