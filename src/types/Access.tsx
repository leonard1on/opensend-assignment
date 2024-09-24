interface role {
  id: number;
  name: string;
}

interface store {
  id: number;
  name: string;
  url: string;
  created_at: string;
  status: string;
  traffic_status: string;
  public_id: string;
  private_id: string;
  website_technology: string;
  client_type: string;
  plan_group_id: number;
  revive_plan_group_id: number;
  email_milestones_id: string | null;
  marketing_platform: string;
  email_subdomain: boolean;
  estimated_revenue: string;
  estimated_site_traffic: string;
  quick_description: string | null;
  recent_3_templates: boolean;
  store_category: number;
  use_default_dashboard_group: boolean;
  default_dashboard_group_id: string | null;
  owner_invited: boolean;
  hidden_contact_table_columns: unknown[]; // No values inside array
  referral: string | null;
  avatar_url: string | null;
  _count: {
    members: number;
  };
}

export interface AccessIds {
  store_id: number;
  user_id: number;
  role_id: number;
}

interface Access {
  store_id: number;
  user_id: number;
  role_id: number;
  role?: role;
  store?: store;
}

export type Accesses = Access[];
