import type { Services, Portfolio, Testimonials } from "@/entities";

/**
 * Pagination options for querying collections
 */
export interface PaginationOptions {
  limit?: number;
  skip?: number;
}

/**
 * Paginated result with metadata
 */
export interface PaginatedResult<T> {
  items: T[];
  totalCount: number;
  hasNext: boolean;
  currentPage: number;
  pageSize: number;
  nextSkip: number | null;
}

/**
 * Mock data for standalone mode (no Wix)
 */
const MOCK_SERVICES: Services[] = [
  {
    _id: "1",
    serviceName: "Wedding Decoration",
    description: "Complete wedding venue decoration with floral arrangements, lighting, and thematic setups.",
    serviceImage: "https://static.wixstatic.com/media/641119_97f2828b817a40ed80c8c11fe3c47f9a~mv2.png?originWidth=1152&originHeight=896",
    serviceType: "Wedding",
    features: "Floral design, Mandap decoration, Stage setup",
    isPopular: true,
  },
  {
    _id: "2",
    serviceName: "Birthday Party Setup",
    description: "Fun and vibrant birthday party decorations for all ages.",
    serviceImage: "https://static.wixstatic.com/media/641119_dca951d9392b4fed947557ea2f164bc0~mv2.png?originWidth=1152&originHeight=896",
    serviceType: "Birthday",
    features: "Balloon decor, Theme setup, Cake table",
    isPopular: false,
  },
  {
    _id: "3",
    serviceName: "Corporate Events",
    description: "Professional event decoration for corporate meetings and celebrations.",
    serviceImage: "https://static.wixstatic.com/media/641119_8d2d07b617584ce9bc31ae921531fe05~mv2.png?originWidth=1152&originHeight=896",
    serviceType: "Corporate",
    features: "Backdrop, Branding, Seating arrangement",
    isPopular: true,
  },
];

const MOCK_PORTFOLIO: Portfolio[] = [
  {
    _id: "1",
    projectTitle: "Luxury Wedding Reception",
    projectImage: "https://static.wixstatic.com/media/641119_09939e1631c64b06b31dbbe1ff27b9ff~mv2.png?originWidth=1152&originHeight=896",
    eventCategory: "Wedding",
    projectDescription: "Elegant outdoor wedding with premium floral arrangements.",
    completionDate: "2024-06-15",
  },
  {
    _id: "2",
    projectTitle: "Kids Birthday Bash",
    projectImage: "https://static.wixstatic.com/media/641119_1762fa63c4de42018f310accfeeab817~mv2.png?originWidth=1152&originHeight=896",
    eventCategory: "Birthday",
    projectDescription: "Colorful themed birthday party with balloon installations.",
    completionDate: "2024-05-20",
  },
  {
    _id: "3",
    projectTitle: "Annual Corporate Gala",
    projectImage: "https://static.wixstatic.com/media/641119_a70ca72fb9eb4970922b4246cc04981d~mv2.png?originWidth=1152&originHeight=896",
    eventCategory: "Corporate",
    projectDescription: "Sophisticated corporate event with custom branding.",
    completionDate: "2024-04-10",
  },
];

const MOCK_TESTIMONIALS: Testimonials[] = [
  {
    _id: "1",
    clientName: "Priya Sharma",
    reviewText: "Exceptional service! Our wedding looked absolutely stunning. The team went above and beyond.",
    rating: 5,
    eventType: "Wedding",
    reviewDate: "2024-07-01",
    clientPhoto: "https://static.wixstatic.com/media/12d367_4f26ccd17f8f4e3a8958306ea08c2332~mv2.png",
  },
  {
    _id: "2",
    clientName: "Rahul Verma",
    reviewText: "Professional and creative. Our corporate event was a huge success.",
    rating: 5,
    eventType: "Corporate",
    reviewDate: "2024-06-15",
  },
  {
    _id: "3",
    clientName: "Anita Patel",
    reviewText: "My daughter's birthday party was magical. Highly recommend!",
    rating: 5,
    eventType: "Birthday",
    reviewDate: "2024-05-28",
  },
];

const MOCK_DATA: Record<string, unknown[]> = {
  services: MOCK_SERVICES,
  portfolio: MOCK_PORTFOLIO,
  testimonials: MOCK_TESTIMONIALS,
};

/**
 * Mock CRUD Service for standalone mode (no Wix Data)
 * Returns sample data for Services, Portfolio, and Testimonials
 */
export class BaseCrudService {
  static async getAll<T>(
    collectionId: string,
    _includeRefs?: unknown,
    pagination?: PaginationOptions
  ): Promise<PaginatedResult<T>> {
    const limit = Math.min(pagination?.limit ?? 50, 1000);
    const skip = pagination?.skip ?? 0;
    const items = (MOCK_DATA[collectionId] || []) as T[];
    const paginatedItems = items.slice(skip, skip + limit);
    const hasNext = skip + limit < items.length;

    return {
      items: paginatedItems,
      totalCount: items.length,
      hasNext,
      currentPage: Math.floor(skip / limit),
      pageSize: limit,
      nextSkip: hasNext ? skip + limit : null,
    };
  }

  static async getById<T>(_collectionId: string, itemId: string): Promise<T | null> {
    for (const items of Object.values(MOCK_DATA)) {
      const found = items.find((item: { _id?: string }) => item._id === itemId);
      if (found) return found as T;
    }
    return null;
  }
}
