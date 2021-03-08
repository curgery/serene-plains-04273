import React from 'react';
import SocialMedia from '../components/SocialMedia';

import ArticlesList from '../components/ArticlesList';
import articleContent from './article-content';

const ArticlesListPage = () => (
  <>
    <h1>Articles</h1>
    <SocialMedia />

    <ArticlesList articles={articleContent} />
  </>
);

export default ArticlesListPage;
