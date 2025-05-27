export interface Review {
  id: number;
  product_id: string;
  user_id: string;
  user_name: string;
  user_avatar: string;
  rating: number;
  content: string;
  created_at: Date;
}

export interface TotalReviews {
  number_of_reviews: number;
  rating: number;
}

export interface StatisticsItem {
  rating: number;
  count: number;
}

export interface ReviewsResponse {
  data: {
    reviews: Review[];
    statistics: StatisticsItem[];
    total: TotalReviews;
  };
  meta: {
    page: number;
    totalPages: number;
    pageSize: number;
    totalItems: number;
  };
}

export type Grade = 'excellent' | 'good' | 'average' | 'belowAverage' | 'poor';
