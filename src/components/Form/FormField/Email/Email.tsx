import { Controller, useFormContext } from 'react-hook-form';
import { InputAdornment } from '@mui/material';
import { CustomTextField } from '../TextFieldStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Email() {
  const {
    control,
    formState: { errors },
    register,
  } = useFormContext();

  return (
    <Controller
      control={control}
      defaultValue={''}
      name={'email'}
      render={({ field: { ref, value } }) => (
        <CustomTextField
          className={'!mb-4 sm:!mb-0 !w-full'}
          error={!!errors.email}
          helperText={errors.email ? 'Please enter a valid email address' : null}
          InputProps={{
            endAdornment: (
              <InputAdornment
                className={'!h-fit !text-3xl sm:!text-4xl !text-pink-400'}
                position={'end'}
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </InputAdornment>
            ),
          }}
          inputRef={ref}
          label={'Email *'}
          placeholder={'Email'}
          {...register('email', {
            max: 254,
            onBlur: undefined,
            onChange: undefined,
            pattern:
              /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/gim,
            required: true,
          })}
          type={'email'}
          value={value}
          variant={'outlined'}
        />
      )}
    />
  );
}
