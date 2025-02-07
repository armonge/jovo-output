import { Type } from 'class-transformer';
import { IsInstance, IsOptional, ValidateNested } from '../index';
import { OutputTemplateBase } from './OutputTemplateBase';
import { OutputTemplatePlatforms } from './OutputTemplatePlatforms';

export class OutputTemplate extends OutputTemplateBase {
  @IsOptional()
  @IsInstance(OutputTemplatePlatforms)
  @ValidateNested()
  @ValidateNested({ each: true })
  @Type(() => OutputTemplatePlatforms)
  platforms?: OutputTemplatePlatforms;
}
