import { ReactNode, useCallback, useEffect, useState } from 'react';
import cn from 'classnames';
import { Skeleton } from '@mui/material';

export type ArticleData = {
  title: ReactNode;
  body: ReactNode;
};

export interface ArticleProps {
  title?: string;
  body?: string;
  getDataContent?: () => Promise<ArticleData>;
  theme?: 'dark' | 'light';
}

export default function Article({
  body,
  getDataContent,
  title,
  theme = 'dark',
}: ArticleProps) {
  const [data, setData] = useState<ArticleData | null>(null);
  const fetchDataContent: () => Promise<ArticleData> = useCallback(async () => {
    if (typeof getDataContent === 'function') {
      return await getDataContent();
    } else {
      return {
        title,
        body,
      };
    }
  }, [title, body, getDataContent]);
  useEffect(() => {
    async function getData() {
      const result = await fetchDataContent();
      setData(result);
    }

    getData().then((r) => {});
  }, [fetchDataContent]);
  const classNames = cn(
    'flex flex-col md:flex-row flex-nowrap md:gap-4 justify-center md:justify-start content-center items-center',
    {
      'text-zinc-700': theme === 'dark',
      'text-white': theme === 'light',
    },
  );

  return (
    <article className={classNames}>
      <header
        className={
          'flex justify-center items-center mb-4 md:mb-0 w-full md:w-1/3 xl:w-1/4 font-bebas-neue text-2xl md:text-5xl tracking-widest'
        }
      >
        {data === null ? (
          <Skeleton
            animation={'wave'}
            className={'w-full'}
            height={60}
            variant={'text'}
            data-testid={'skeleton'}
          />
        ) : (
          data.title
        )}
      </header>
      <div
        className={
          'w-full md:w-2/3 xl:w-3/4 font-bebas-neue font-bold text-base sm:text-xl tracking-widest'
        }
      >
        {data === null ? (
          <>
            <Skeleton
              animation={'wave'}
              className={'w-full'}
              height={40}
              variant={'text'}
              data-testid={'skeleton'}
            />
            <Skeleton
              animation={'wave'}
              className={'w-full'}
              height={40}
              variant={'text'}
              data-testid={'skeleton'}
            />
            <Skeleton
              animation={'wave'}
              className={'w-full'}
              height={40}
              variant={'text'}
              data-testid={'skeleton'}
            />
          </>
        ) : (
          data.body
        )}
      </div>
    </article>
  );
}
