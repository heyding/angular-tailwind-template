export interface BrandDesignConfig {
  fontFamily: string;
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
  textMuted: string;
  heroImageUrl: string;
}

export interface BrandTextConfig {
  appName: string;
  appInitial: string;
  skipToContentLabel: string;
  complianceBadgeLabel: string;
  complianceText: string;
  complianceLinkLabel: string;
  complianceLinkUrl: string;
  footerCompanyName: string;
  footerLearnMoreUrl: string;
  privacyLabel: string;
  imprintLabel: string;
  developerName: string;
  developerRole: string;
  developerLinkedinUrl: string;
  developerImageUrl: string;
}

export interface BrandConfig {
  design: BrandDesignConfig;
  text: BrandTextConfig;
}
