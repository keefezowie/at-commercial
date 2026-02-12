export type MarketingLeadRequest = {
  email: string;
  full_name: string;
  company: string;
  role: string;
  use_case: "business_docs" | "cad_workflow" | "mixed" | "other";
  monthly_volume: string;
  file_types: string[];
  target_languages: string[];
  notes?: string;
  intent?: "demo" | "security_review" | "pricing_discussion";
  consent: true;
  source_page: string;
  utm?: Record<string, string>;
};

export type MarketingLeadResponse = {
  status: "accepted" | "rejected";
  lead_id?: string;
  route?: "enterprise" | "mid_market" | "nurture";
  message: string;
};

export type ContactRequest = {
  full_name: string;
  email: string;
  company?: string;
  message: string;
  intent?: "sales" | "support" | "partnership";
  consent: true;
};

