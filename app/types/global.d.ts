interface Window {
  gtag_report_conversion?: (url?: string) => boolean;
  dataLayer: unknown[];
  gtag: (
    command: 'event' | 'config' | 'js' | 'set',
    targetId: string,
    config?: {
      send_to?: string;
      value?: number;
      currency?: string;
      event_callback?: () => void;
      [key: string]: unknown;
    }
  ) => void;
}
