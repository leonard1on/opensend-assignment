import { AccessIds, Accesses } from "./Access";

interface viewToggles {
  id: number;
  role_id: number;
  view_type: string;
  clients: boolean;
  revive: boolean;
  postal: boolean;
  overview: boolean;
  delivery_integration: boolean;
  traffic_integration: boolean;
  s3_integration: boolean;
  webhook_source_integration: boolean;
  google_integration: boolean;
  subscription: boolean;
  billing: boolean;
  events: boolean;
  contacts: boolean;
  members: boolean;
  administrators: boolean;
  widget_setting: boolean;
  default_widget_setting: boolean;
  b2b_widgets: boolean;
  switch_role: boolean;
}

export interface View {
  type: string;
  access: AccessIds;
  accesses: Accesses;
  viewToggles: viewToggles;
}
