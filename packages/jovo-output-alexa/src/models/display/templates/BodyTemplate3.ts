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

export class BodyTemplate3 implements DisplayTemplate<DisplayTemplateType.Body3> {
  @Equals(DisplayTemplateType.Body3)
  type: DisplayTemplateType.Body3;

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
