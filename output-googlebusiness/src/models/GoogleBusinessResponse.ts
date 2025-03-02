import {
  ArrayMaxSize,
  formatValidationErrors,
  IsArray,
  IsBoolean,
  IsEitherValid,
  IsNotEmpty,
  IsOptional,
  IsString,
  Type,
  validate,
  ValidateNested,
} from '@jovotech/output';
import { Image } from './Image';
import { Representative } from './Representative';
import { RichCard } from './RichCard';
import { Suggestion } from './Suggestion';

export class GoogleBusinessResponse {
  [key: string]: unknown;

  @IsString()
  @IsNotEmpty()
  messageId: string;

  @ValidateNested()
  @Type(() => Representative)
  representative: Representative;

  @IsOptional()
  @IsArray()
  @ArrayMaxSize(13)
  @ValidateNested({ each: true })
  @Type(() => Suggestion)
  suggestions?: Suggestion[];

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  fallback?: string;

  @IsOptional()
  @IsBoolean()
  containsRichText?: boolean;

  // union
  @IsEitherValid<GoogleBusinessResponse>({
    name: 'isValidGoogleBusinessResponseContent',
    keys: ['text', 'image', 'richCard'],
    validate: async (value, args) => {
      if (typeof value !== 'string') {
        return '$property must be a string';
      }
      if (!value) {
        return '$property should not be empty';
      }
      return;
    },
  })
  text?: string;

  @IsEitherValid<GoogleBusinessResponse>({
    name: 'isValidGoogleBusinessResponseContent',
    keys: ['text', 'image', 'richCard'],
    validate: async (value, args) => {
      const errors = await validate(value);
      if (errors.length) {
        return formatValidationErrors(errors, {
          text: '$property is invalid:',
          delimiter: '\n  - ',
          path: '$property',
        });
      }
      return;
    },
  })
  @Type(() => Image)
  image?: Image;

  @IsEitherValid<GoogleBusinessResponse>({
    name: 'isValidGoogleBusinessResponseContent',
    keys: ['text', 'image', 'richCard'],
    validate: async (value, args) => {
      const errors = await validate(value);
      if (errors.length) {
        return formatValidationErrors(errors, {
          text: '$property is invalid:',
          delimiter: '\n  - ',
          path: '$property',
        });
      }
      return;
    },
  })
  @Type(() => RichCard)
  richCard?: RichCard;
}
