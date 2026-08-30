// Core types mirroring Mythology Atlas — Architecture Finalization v0.4.
// This is a prototype seed dataset, not a production database:
// every entity is a plain object keyed by a stable `id`, and every
// cross-reference is that id, never a duplicated copy of the entity.

export type EntityType =
  | 'Civilization'
  | 'Deity'
  | 'DivineGroup'
  | 'Story'
  | 'AncientText'
  | 'Topic'
  | 'Place'
  | 'Source';

export interface BaseEntity {
  id: string;
  entityType: EntityType;
  canonicalName: string;
  alternativeNames?: string[];
  slug: string;
  status: 'draft' | 'published';
}

export type ClaimEvidenceClassification =
  | 'AncientSource'
  | 'ArchaeologicalEvidence'
  | 'ScholarlyConsensus'
  | 'ScholarlyInterpretation'
  | 'ScholarlyDebate'
  | 'LaterTradition'
  | 'ModernInterpretation'
  | 'ModernSpeculative'
  | 'Unattested';

export type RelationshipCertainty =
  | 'Documented'
  | 'ArchaeologicallyAttested'
  | 'WellEstablished'
  | 'Proposed'
  | 'Disputed'
  | 'Indirect'
  | 'Speculative';

export type EvidenceRole = 'Supports' | 'Disputes' | 'Contextualizes' | 'OriginOfClaim';

export interface EvidenceLink {
  sourceId: string;
  evidenceRole: EvidenceRole;
  locator?: string;
  note?: string;
}

export interface Source {
  id: string;
  sourceCategory:
    | 'PrimaryAncientText'
    | 'ArchaeologicalArtifact'
    | 'MuseumCollection'
    | 'AcademicBook'
    | 'PeerReviewedArticle'
    | 'UniversityResource'
    | 'ArchaeologicalReport'
    | 'ModernPublication';
  citation: string;
  url?: string;
}

export interface Claim {
  id: string;
  statement: string;
  aboutEntityIds: string[];
  claimType: 'Descriptive' | 'Interpretive' | 'Historical' | 'Comparative' | 'Genealogical';
  evidenceClassification: ClaimEvidenceClassification;
  evidenceLinks: EvidenceLink[];
  researchNote?: string; // required in real system when classification === 'Unattested'
  status: 'Draft' | 'NeedsReview' | 'Published';
}

export interface Relationship {
  id: string;
  fromEntityId: string;
  toEntityId: string;
  relationType: string;
  certaintyTier: RelationshipCertainty;
  evidenceLinks: EvidenceLink[];
  notes?: string;
}

export interface ContentSection {
  id: string;
  parentEntityId: string;
  sectionLabel: string;
  prose: string;
  claimIds: string[];
  connectiveOnly?: boolean;
}

export interface Civilization extends BaseEntity {
  entityType: 'Civilization';
  timePeriod: string;
  region: string;
  majorCityIds: string[];
  majorDeityIds: string[];
  importantMythologicalFigureIds?: string[]; // major literary/cosmic figures without an attested civic cult, distinct from majorDeityIds
  majorTextIds: string[];
  topicIds: string[];
  relatedCivilizationIds: string[];
  overview: string;
  contentSectionIds: string[];
}

export interface Deity extends BaseEntity {
  entityType: 'Deity';
  cultures: string[];
  primaryCultCenterId?: string;
  roles: string[];
  symbols?: string[];
  associatedPlaceIds: string[];
  associatedStoryIds: string[];
  ancientTextIds: string[];
  relatedFigureIds: string[];
  contentSectionIds: string[];
}

export interface DivineGroup extends BaseEntity {
  entityType: 'DivineGroup';
  cultures: string[];
  membershipVaries: boolean;
  membershipWarning?: string;
  memberDeityIds: string[];
  contentSectionIds: string[];
}

export interface Story extends BaseEntity {
  entityType: 'Story';
  summary: string;
  cultures: string[];
  characterIds: string[];
  textIds: string[];
  topicIds: string[];
  themes: string[];
  contentSectionIds: string[];
}

export interface AncientText extends BaseEntity {
  entityType: 'AncientText';
  language: string;
  compositionPeriod: string;
  storyIds: string[];
  characterIds: string[];
  themes: string[];
  contentSectionIds: string[];
}

export interface Topic extends BaseEntity {
  entityType: 'Topic';
  overview: string;
  relatedDeityIds: string[];
  relatedStoryIds: string[];
  relatedTextIds: string[];
  relatedTopicIds: string[];
  contentSectionIds: string[];
}

export interface Place extends BaseEntity {
  entityType: 'Place';
  placeType: 'city' | 'temple' | 'region' | 'site';
  associatedDeityIds: string[];
  historicalNotes?: string;
  contentSectionIds?: string[];
}

export type AnyEntity =
  | Civilization
  | Deity
  | DivineGroup
  | Story
  | AncientText
  | Topic
  | Place;

export interface RecentlyViewedItem {
  id: string;
  entityType: EntityType;
  name: string;
  viewedAt: number;
}
