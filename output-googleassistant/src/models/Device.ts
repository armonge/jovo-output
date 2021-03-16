import { IsArray, IsEnum } from '@jovotech/output';

export enum Capability {
  Unspecified = 'UNSPECIFIED',
  Speech = 'SPEECH',
  RichResponse = 'RICH_RESPONSE',
  LongFormAudio = 'LONG_FORM_AUDIO',
  InteractiveCanvas = 'INTERACTIVE_CANVAS',
  WebLink = 'WEB_LINK',
}

export class Device {
  @IsArray()
  @IsEnum(Capability, { each: true })
  capabilities: Capability[];
}
