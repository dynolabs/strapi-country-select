import React, { forwardRef } from 'react';
import { useIntl } from 'react-intl';

import { Combobox, ComboboxOption, Field, Flex, Typography } from '@strapi/design-system';
import { FieldValue, InputProps } from '@strapi/strapi/admin';

import { countries } from '../../utils/countries';
import { getTranslation } from '../../utils/getTranslation';
import { CountryIcon } from '../CountryIcon';

type TProps = InputProps & FieldValue;

const Input = forwardRef<HTMLInputElement, TProps>((props, forwardedRef) => {
  // Destructure the props
  const {
    disabled = false,
    name,
    required = false,
    error,
    hint,
    placeholder,
    value,
    label,
    labelAction,
    onChange,
  } = props;

  const { formatMessage } = useIntl();

  // Helper function to handle the onChange event
  const handleOnChange = (option: string) => {
    onChange({
      target: {
        name,
        value: option,
      },
    } as React.ChangeEvent<HTMLInputElement>);
  };

  return (
    <Field.Root name={name} id={name} error={error} hint={hint} required={required}>
      <Field.Label action={labelAction}>{label}</Field.Label>

      <Combobox
        aria-label={formatMessage({
          id: getTranslation('form.label'),
          defaultMessage: 'Country select',
        })}
        disabled={disabled}
        value={value}
        placeholder={placeholder}
        required={required}
        onChange={handleOnChange}
        autocomplete={{ type: 'list', filter: 'contains' }}
        startIcon={<CountryIcon code={value} />}
      >
        {countries.map((country) => (
          <ComboboxOption key={country.name} value={country.code} textValue={country.name}>
            <Flex alignItems="center" gap="4px">
              <CountryIcon code={country.code} />
              <Typography>{country.name}</Typography>
            </Flex>
          </ComboboxOption>
        ))}
      </Combobox>

      <Field.Hint />
      <Field.Error />
    </Field.Root>
  );
});

export default Input;
