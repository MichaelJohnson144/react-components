import { render, screen, waitFor } from '@testing-library/react';
import Article, { ArticleData } from './Article';

describe('Article component', function () {
  it('should render an article component successfully', function () {
    const { baseElement } = render(<Article />);
    waitFor(function () {
      expect(baseElement).toBeTruthy();
    });
  });

  it('can accept a title successfully', function () {
    const text = 'testText';
    render(<Article title={text} />);
    waitFor(function () {
      const title = screen.getByText(text);
      expect(title).toBeTruthy();
    });
  });

  it('can accept a body of contents successfully', function () {
    const text = 'testBody';
    render(<Article body={text} />);
    waitFor(function () {
      const body = screen.getByText(text);
      expect(body).toBeTruthy();
    });
  });

  it('can accept a function that returns data successfully', function () {
    const data: ArticleData = {
      title: 'testTitle',
      body: 'testBody',
    };
    const getDataContent = async function () {
      return data;
    };
    render(<Article getDataContent={getDataContent} />);
    waitFor(function () {
      const title = screen.getByText(data.title as string);
      const body = screen.getByText(data.body as string);
      expect(title).toBeTruthy();
      expect(body).toBeTruthy();
    });
  });

  it('should render a skeleton while content data renders successfully', function () {
    const data: ArticleData = {
      title: 'testTitle',
      body: 'testBody',
    };
    const getDataContent = function () {
      return new Promise<ArticleData>(function (resolve) {
        setTimeout(function () {
          resolve(data);
        }, 2000);
      });
    };
    render(<Article getDataContent={getDataContent} />);
    const skeletons = screen.getAllByTestId('skeleton');
    expect(skeletons.length).toBe(4);
  });
});
