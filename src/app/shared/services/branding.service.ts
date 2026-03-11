import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, isDevMode } from '@angular/core';
import { BehaviorSubject, catchError, firstValueFrom, map, of, tap } from 'rxjs';
import { BrandConfig } from '../models/branding.model';

const REQUIRED_DESIGN_KEYS: Array<keyof BrandConfig['design']> = [
  'fontFamily',
  'primary',
  'secondary',
  'accent',
  'background',
  'surface',
  'text',
  'textMuted',
  'heroImageUrl',
];

const REQUIRED_TEXT_KEYS: Array<keyof BrandConfig['text']> = [
  'appName',
  'appInitial',
  'skipToContentLabel',
  'complianceBadgeLabel',
  'complianceText',
  'complianceLinkLabel',
  'complianceLinkUrl',
  'footerCompanyName',
  'footerLearnMoreUrl',
  'privacyLabel',
  'imprintLabel',
  'developerName',
  'developerRole',
  'developerLinkedinUrl',
  'developerImageUrl',
];

const DEFAULT_BRAND_CONFIG: BrandConfig = {
  design: {
    fontFamily: 'Inter, sans-serif',
    primary: '#4f46e5',
    secondary: '#7c3aed',
    accent: '#ec4899',
    background: '#f9fafb',
    surface: '#ffffff',
    text: '#111827',
    textMuted: '#6b7280',
    heroImageUrl:
      'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100',
  },
  text: {
    appName: 'Angular Template',
    appInitial: 'A',
    skipToContentLabel: 'Zum Hauptinhalt springen',
    complianceBadgeLabel: '🇩🇪 D-Stack Ready',
    complianceText: 'Dieses Template ist vollständig konform mit den Standards des',
    complianceLinkLabel: 'deutschland-stack',
    complianceLinkUrl: 'https://technologie.deutschland-stack.gov.de/',
    footerCompanyName: 'Angular Tailwind Template',
    footerLearnMoreUrl: 'https://github.com/heyding/angular-tailwind-template',
    privacyLabel: 'Datenschutz',
    imprintLabel: 'Impressum',
    developerName: 'Tommy Heyding',
    developerRole: 'Software Developer',
    developerLinkedinUrl: 'https://www.linkedin.com/in/tommyheyding/',
    developerImageUrl: 'assets/img/tommy-heyding.jpeg',
  },
};

@Injectable({
  providedIn: 'root',
})
export class BrandingService {
  private readonly brandSubject = new BehaviorSubject<BrandConfig>(DEFAULT_BRAND_CONFIG);

  readonly brand$ = this.brandSubject.asObservable();

  constructor(
    private http: HttpClient,
    @Inject(DOCUMENT) private document: Document
  ) {}

  get brand(): BrandConfig {
    return this.brandSubject.value;
  }

  async initialize(): Promise<void> {
    await firstValueFrom(
      this.http.get<Partial<BrandConfig>>('./assets/branding/brand.config.json').pipe(
        catchError(() => of({})),
        tap(config => this.warnAboutMissingFields(config)),
        map(config => this.mergeWithDefaults(config)),
        tap(config => {
          this.brandSubject.next(config);
          this.applyCssVariables(config);
          this.document.title = config.text.appName;
        })
      )
    );
  }

  private mergeWithDefaults(config: Partial<BrandConfig>): BrandConfig {
    return {
      design: {
        ...DEFAULT_BRAND_CONFIG.design,
        ...(config.design ?? {}),
      },
      text: {
        ...DEFAULT_BRAND_CONFIG.text,
        ...(config.text ?? {}),
      },
    };
  }

  private warnAboutMissingFields(config: Partial<BrandConfig>): void {
    if (!isDevMode()) {
      return;
    }

    const missingDesign = REQUIRED_DESIGN_KEYS.filter(key => config.design?.[key] === undefined);
    const missingText = REQUIRED_TEXT_KEYS.filter(key => config.text?.[key] === undefined);

    if (missingDesign.length === 0 && missingText.length === 0) {
      return;
    }

    const details = [
      ...(missingDesign.length > 0 ? [`design: ${missingDesign.join(', ')}`] : []),
      ...(missingText.length > 0 ? [`text: ${missingText.join(', ')}`] : []),
    ].join(' | ');

    console.warn(
      `[BrandingService] Missing fields in assets/branding/brand.config.json. Falling back to defaults for: ${details}`
    );
  }

  private applyCssVariables(config: BrandConfig): void {
    const rootStyle = this.document.documentElement.style;

    rootStyle.setProperty('--brand-font-family', config.design.fontFamily);
    rootStyle.setProperty('--brand-primary', config.design.primary);
    rootStyle.setProperty('--brand-secondary', config.design.secondary);
    rootStyle.setProperty('--brand-accent', config.design.accent);
    rootStyle.setProperty('--brand-bg', config.design.background);
    rootStyle.setProperty('--brand-surface', config.design.surface);
    rootStyle.setProperty('--brand-text', config.design.text);
    rootStyle.setProperty('--brand-text-muted', config.design.textMuted);
    rootStyle.setProperty('--brand-hero-image', `url("${config.design.heroImageUrl}")`);
  }
}
