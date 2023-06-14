export interface Plan {
  application: Application;
}

export interface Application {
  id: number;
  council_reference: string;
  date_scraped: Date;
  address: string;
  description: string;
  info_url: string;
  comment_url: null;
  date_received: Date;
  on_notice_from: null;
  on_notice_to: null;
  lat: number;
  lng: number;
  authority: Authority;
}

export interface Authority {
  full_name: string;
}
