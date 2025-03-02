import {
  Equals,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  Type,
  ValidateNested,
} from '@jovotech/output';
import { Image } from '../../common/Image';
import { BackButtonVisibility, DisplayTemplate, DisplayTemplateType } from '../DisplayTemplate';

export class BodyTemplate7 implements DisplayTemplate<DisplayTemplateType.Body7> {
  @Equals(DisplayTemplateType.Body7)
  type: DisplayTemplateType.Body7;

  @IsString()
  @IsNotEmpty()
  token: string;

  @IsOptional()
  @IsEnum(BackButtonVisibility)
  backButton?: BackButtonVisibility;

  @IsString()
  @IsNotEmpty()
  @MaxLength(200)
  title: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Image)
  backgroundImage?: Image;

  @ValidateNested()
  @Type(() => Image)
  image: Image;
}
