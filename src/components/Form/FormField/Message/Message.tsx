import { Controller, useFormContext } from 'react-hook-form';
import { CustomTextField } from '../TextFieldStyle';
import { InputAdornment } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

export default function Message() {
  const {
    control,
    formState: { errors },
    register,
  } = useFormContext();

  return (
    <Controller
      control={control}
      defaultValue={''}
      name={'message'}
      render={({ field: { ref, value } }) => (
        <CustomTextField
          className={'!mb-4 !w-full'}
          error={!!errors.message}
          helperText={errors.message ? 'Please enter your message' : null}
          InputProps={{
            className: '!text-white',
            endAdornment: (
              <InputAdornment
                className={'!h-fit !text-3xl sm:!text-4xl !text-pink-400'}
                position={'end'}
              >
                <FontAwesomeIcon icon={faPenToSquare} />
              </InputAdornment>
            ),
          }}
          inputRef={ref}
          label={'Message *'}
          multiline={true}
          placeholder={'Your message'}
          {...register('message', {
            onBlur: undefined,
            onChange: undefined,
            pattern: /.+/g,
            required: true,
          })}
          rows={4}
          value={value}
          variant={'outlined'}
        />
      )}
    />
  );
}
