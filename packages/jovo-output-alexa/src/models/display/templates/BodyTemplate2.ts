import {
  Equals,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  Type,
  ValidateNested,
} from 'jovo-output';
import { Image } from '../../common/Image';
import { BackButtonVisibility, DisplayTemplate, DisplayTemplateType } from '../DisplayTemplate';
import { TextContent } from '../TextContent';

export class BodyTemplate2 implements DisplayTemplate<DisplayTemplateType.Body2> {
  @Equals(DisplayTemplateType.Body2)
  type: DisplayTemplateType.Body2;

  @IsString()
  @IsNotEmpty()
  token: string;

  @IsOptional()
  @IsEnum(BackButtonVisibility)
  backButton?: BackButtonVisibility;

  @IsOptional()
  @ValidateNested()
  @Type(() => Image)
  backgroundImage?: Image;

  @IsString()
  @IsNotEmpty()
  title: string;

  @ValidateNested()
  @Type(() => Image)
  image: Image;

  @ValidateNested()
  @Type(() => TextContent)
  textContent: TextContent;
}
