import * as amplitude from "@amplitude/analytics-browser";

// Custom Amplitude config
const config = {
  logLevel: amplitude.Types.LogLevel.Warn,
  defaultTracking: {
    sessions: true,
  },
};
const AMPLITUDE_API_KEY = process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY;

export const initAmplitude = () => {
  if (AMPLITUDE_API_KEY) {
    amplitude.init(AMPLITUDE_API_KEY, undefined, config);
  }
};

export const trackAmplitudeData = (
  eventType: string | amplitude.Types.BaseEvent,
  eventProperties?: Record<string, unknown>
) => {
  amplitude.track(eventType, eventProperties);
};

export const setAmplitudeUserProperties = (key: string, value: string) => {
  const identify = new amplitude.Identify();
  identify.set(key, value);
  amplitude.identify(identify);
};

export const setAmplitudeUserId = (userId: number) => {
  amplitude.setUserId(String(userId).padStart(12, "0"));
};
