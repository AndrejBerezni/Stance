export interface Review {
  id: number;
  product_id: string;
  user_id: string;
  rating: number;
  content: string;
  created_at: Date;
}

export interface ReviewsResponse {
  data: Review[];
  meta: {
    page: number;
    totalPages: number;
    pageSize: number;
    totalItems: number;
  };
}
