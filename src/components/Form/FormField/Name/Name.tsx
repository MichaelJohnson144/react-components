import { Controller, useFormContext } from 'react-hook-form';
import { CustomTextField } from '../TextFieldStyle';
import { InputAdornment } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignature } from '@fortawesome/free-solid-svg-icons';

export default function Name() {
  const {
    control,
    formState: { errors },
    register,
  } = useFormContext();

  return (
    <Controller
      control={control}
      defaultValue={''}
      name={'fullName'}
      render={({ field: { ref, value } }) => (
        <CustomTextField
          className={'!w-full'}
          error={!!errors.fullName}
          helperText={
            errors.fullName ? 'Please enter your full name with leading caps ' : null
          }
          InputProps={{
            endAdornment: (
              <InputAdornment
                className={'!h-fit !text-3xl sm:!text-4xl !text-pink-400'}
                position={'end'}
              >
                <FontAwesomeIcon icon={faSignature} />
              </InputAdornment>
            ),
          }}
          inputRef={ref}
          label={'Full Name *'}
          placeholder={'John / Jane Doe'}
          {...register('fullName', {
            onBlur: undefined,
            onChange: undefined,
            pattern: /^[A-Z]+(([',. -][A-Z ])?[a-zA-Z]*)*$/g,
            required: true,
          })}
          value={value}
          variant={'outlined'}
        />
      )}
    />
  );
}
