import { formatValidationErrors, IsEitherValid, validate, ValidationOptions } from '@jovotech/output';
import { Image, MediaObject } from '../../models';

export function IsValidMediaObjectImage(validationOptions?: ValidationOptions): PropertyDecorator {
  return IsEitherValid<MediaObject>(
    {
      name: 'isValidMediaObjectImage',
      keys: ['largeImage', 'icon'],
      validate: async (value, args) => {
        if (!(value instanceof Image)) {
          return `$property has to be an instance of Image`;
        }

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
    },
    validationOptions,
  );
}
