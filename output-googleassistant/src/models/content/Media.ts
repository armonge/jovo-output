import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Type,
  ValidateNested,
} from '@jovotech/output';
import { IsValidMediaObjectImage } from '../../decorators/validation/IsValidMediaObjectImage';
import { Image } from '../common/Image';

export enum MediaType {
  Unspecified = 'MEDIA_TYPE_UNSPECIFIED',
  Audio = 'AUDIO',
  MediaStatusAck = 'MEDIA_STATUS_ACK',
}

export enum OptionalMediaControls {
  Unspecified = 'OPTIONAL_MEDIA_CONTROLS_UNSPECIFIED',
  Paused = 'PAUSED',
  Stopped = 'STOPPED',
}

export class MediaImage {
  @IsValidMediaObjectImage()
  @Type(() => Image)
  large?: Image;

  @IsValidMediaObjectImage()
  @Type(() => Image)
  icon?: Image;
}

export class MediaObject {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  description: string;

  @IsUrl({ protocols: ['https', 'http'] })
  url: string;

  @ValidateNested()
  @Type(() => MediaImage)
  image: MediaImage;
}

export class Media {
  @IsEnum(MediaType)
  mediaType: MediaType;

  @IsString()
  @IsNotEmpty()
  startOffset: string;

  @IsOptional()
  @IsArray()
  @IsEnum(OptionalMediaControls, { each: true })
  optionalMediaControls?: OptionalMediaControls[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MediaObject)
  mediaObjects: MediaObject[];
}
