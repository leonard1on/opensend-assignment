interface TrafficSource {
  client_id: string;
  config: unknown;
  created_at: string;
  description: string | null;
  id: number;
  name: string;
  publisher_id: string;
  source_type: string;
  status: string;
  traffic_source_type: string;
  traffic_source_id: string | null;
  updated_at: string;
}

interface Modification {
  action: {
    id: number;
    code: string;
    percentage: number;
    description: string;
    additional_info: string | null;
  };
  timestamp: string;
}

interface PlanDetails {
  id: number;
  is_custom_plan: boolean;
  monthly_prepayment: number;
  name: string;
  notes: string;
  per_email_delivered: string;
  plan_type: string;
  plan_level: number;
  prepaid_deliveries: string;
  unique_monthly_visitors: string;
}

interface StorePlan {
  additional_info: {
    store_status: string;
  };
  created_at: string;
  id: number;
  limit_reached_at: string | null;
  meta_data: {
    modifications: Modification[];
    modified_plan: PlanDetails;
    original_plan: PlanDetails;
  };
  next_store_plan_id: string | null;
  payment_duration: string;
  payment_failed_at: string | null;
  plan: PlanDetails;
  plan_id: number;
  plan_canceled_at: string | null;
  plan_start_at: string;
  prepaid_until: string;
  quota_status: string;
  receive_extra_emails: boolean;
  renews_on: string;
  rollover_credit: number;
  status: string;
  store_id: number;
  updated_at: string;
}

interface StoreAddress {
  id: number;
  apartment: string;
  city: string;
  state: string;
  zip: string;
  address: string;
  store_id: number;
  country: string;
}

interface OnboardingProcedure {
  id: number;
  is_trial_enabled: boolean;
  onboarding_status: string;
  receive_extra_emails: boolean;
  recommended_plan_id: number | null;
  scheduled_meeting_time: string | null;
  selected_plan_id: number;
  store_id: number;
  technical_manager: string | null;
}

interface ClientInformation {
  business_name: string;
  email: string;
  first_name: string;
  last_name: string;
  phone_number: string | null;
  store: {
    url: string;
    name: string;
    store_address: {
      country: string;
    };
    email_subdomain: boolean;
    marketing_platform: string | null;
    recent_3_templates: boolean;
    estimated_site_traffic: string | null;
  };
}

interface Prospect {
  business_name: string;
  client_id: number;
  client_information: ClientInformation;
  client_type: string;
  created_at: string;
  email: string;
  email_provider: string | null;
  estimated_site_traffic: string | null;
  first_name: string;
  id: number;
  last_name: string;
  phone_number: string | null;
  referral: string | null;
  selected_plan_id: number | null;
  source: string | null;
  status: string;
  updated_at: string;
  website_technology: string;
  website_url: string;
}

interface Discount {
  additional_info: string;
  code: string;
  description: string;
  id: number;
  percentage: number;
}

interface DestinationConfig {
  token?: string;
  list_id?: string;
  tag_name?: string;
  additional_fields?: string | null;
}

interface Destination {
  client_id: string;
  config: DestinationConfig;
  created_at: string;
  description: string | null;
  destination_type: string;
  id: number;
  name: string;
  status: string;
  subscriber_id: string;
  updated_at: string;
}

interface Dashboard {
  default_widget_template_id: string | null;
  id: number;
  name: string;
  store_id: number;
  use_default_widget: boolean;
}

interface Store {
  avatar_url: string | null;
  client_type: string;
  created_at: string;
  dashboards: Dashboard[];
  default_dashboard_group_id: string | null;
  destinations: Destination[];
  discount: Discount;
  email_milestones_id: string | null;
  email_subdomain: boolean;
  estimated_revenue: string | null;
  estimated_site_traffic: string;
  hidden_contact_table_columns: string[];
  id: number;
  marketing_platform: string;
  name: string;
  onboarding_procedure: OnboardingProcedure;
  owner_invited: boolean;
  plan_group_id: number;
  private_id: string;
  prospect: Prospect;
  public_id: string;
  quick_description: string | null;
  recent_3_templates: boolean;
  referral: string | null;
  revive_credit: string | null;
  revive_discount: string | null;
  revive_plan_group_id: number;
  revive_prepaid_credit: string | null;
  status: string;
  store_address: StoreAddress;
  store_category: number;
  store_plans: StorePlan;
  traffic_sources: TrafficSource[];
  traffic_status: string;
  url: string;
  use_default_dashboard_group: boolean;
  view_config: string | null;
  website_technology: string;
}

interface Owner {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  phone_number: string | null;
  password: string;
  otp: string | null;
  last_connected_store: string | null;
  status: string;
  terms_accepted: boolean;
  user_group: string;
  created_at: string;
  updated_at: string;
  last_active: string;
  password_last_changed: string;
  url: string | null;
}

export interface StoreInfo {
  message: string;
  number_of_members: number;
  store: Store;
  owner: Owner;
}
