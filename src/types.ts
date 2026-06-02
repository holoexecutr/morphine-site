export interface Product {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export interface Reseller {
  id: string;
  username: string;
  avatarUrl: string;
  createdAt: string;
  verifiedAt?: string;
  deletedAt?: string;
  cooldown?: string;
  status: "verified" | "unverified" | "deleted";
}
