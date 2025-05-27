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

export interface ReviewsResponse {
  data: { reviews: Review[]; statistics: Record<string, any> };
  meta: {
    page: number;
    totalPages: number;
    pageSize: number;
    totalItems: number;
  };
}
