import {ASObject} from "../models/asObject/ASObject.model";

export enum ASModelType {
    Object = 'Object',
    Activity = 'Activity',
    Application = 'Application',
    Article = 'Article',
    Document = 'Document',
    Event = 'Event',
    Group = 'Group',
    Note = 'Note',
    Organization = 'Organization',
    Person = 'Person',
    Service = 'Service',
    Audio = 'Audio',
    Image = 'Image',
    Page = 'Page',
    Video = 'Video',
    Place = 'Place',
    Relationship = 'Relationship',
    Question = 'Question',
    Tombstone = 'Tombstone',
    Profile = 'Profile',
    Link = 'Link',
    Mention = 'Mention',
}

// TODO: implement
export type Image = 'placeholder';
export type Article = 'placeholder';
export type Audio = 'placeholder';
export type Document = 'placeholder';
export type Event = 'placeholder';
export type Note = 'placeholder';
export type Page = 'placeholder';
export type Place = 'placeholder';
export type Profile = 'placeholder';
export type Relationship = 'placeholder';
export type Tombstone = 'placeholder';
export type Video = 'placeholder';
export type Mention = 'placeholder';
export type Link = 'placeholder';
export type Collection = 'placeholder';
export type AnyCollection = Collection;
export type AnyASObject = ASObject | Article | Audio | Document | Event | Image | Note | Page | Place | Profile | Relationship | Tombstone | Video;
export type DateTime = string;
export type LanguageTag = string;
export type MediaType = string;
export type Duration = string;
export type UrlValue = string | Link;
export type IdValue = string;
export type TypeValue = string;
export type ContentValue = string;
export type ContentMapValue = Record<string, string>;
export type MediaTypeValue = MediaType;
export type NameValue = string;
export type NameMapValue = Record<string, string>;
export type SummaryValue = string;
export type SummaryMapValue = Record<string, string>;
export type EndTimeValue = DateTime;
export type StartTimeValue = DateTime;
export type PublishedValue = DateTime;
export type UpdatedValue = DateTime;
export type RepliesValue = AnyCollection | string;
export type RelationshipValue = string | AnyASObject;
export type IconValue = string | Image | Link;
export type ImageValue = string | Image | Link;
export type AttachmentValue = string | AnyASObject | Link;
export type AudienceValue = string | AnyASObject | Link;
export type InReplyToValue = string | AnyASObject | Link;
export type LocationValue = string | Place | Link;
export type PreviewValue = string | AnyASObject | Link;
export type ToValue = string | AnyASObject | Link;
export type BtoValue = string | AnyASObject | Link;
export type CcValue = string | AnyASObject | Link;
export type BccValue = string | AnyASObject | Link;
export type GeneratorValue = string | AnyASObject | Link;
export type ObjectValue = string | AnyASObject | Link;
export type AttributedToValue = string | AnyASObject | Link | Mention;
export type TagValue = string | AnyASObject | Link | Mention;
export type ActorValue = string | AnyASObject | Link;
export type TargetValue = string | AnyASObject | Link;
export type ResultValue = string | AnyASObject | Link;
export type OriginValue = string | AnyASObject | Link;
export type InstrumentValue = string | AnyASObject | Link;
export type OneOfValue = string | AnyASObject | Link;
export type AnyOfValue = string | AnyASObject | Link;
export type SubjectValue = string | AnyASObject | Link;
export type AccuracyValue = number;
export type AltitudeValue = number;
export type LatitudeValue = number;
export type LongitudeValue = number;
export type RadiusValue = number;
export type UnitsValue = 'cm' | 'feet' | 'inches' | 'km' | 'm' | 'miles' | string;
export type ClosedValue = string | AnyASObject | Link | DateTime | boolean;
export type FormerTypeValue = string;
export type DeletedValue = DateTime;
export type DescribesValue = string | AnyASObject;
export type HrefValue = string;
export type HreflangValue = LanguageTag;
export type RelValue = string;
export type HeightValue = number;
export type WidthValue = number;