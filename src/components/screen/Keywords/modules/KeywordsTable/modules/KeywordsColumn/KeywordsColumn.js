import React from 'react';

import styles from './KeywordsColumn.module.scss';

// todo utils
function declarationOf(number, titles) {  
  const cases = [2, 0, 1, 1, 1, 2];

  return titles[
    (number%100>4 && number%100<20) ? 2 : cases[(number%10<5)?number%10:5]
  ];
}

export default function KeywordsColumn({ keywords = [] }) {
  const firstKeywords = keywords.slice(0, 2);
  const keywordsCount = keywords.length - 2;
  const declaration = declarationOf(keywordsCount, ['слово', 'слова', 'слов']);

  return (
    <div className={ styles['keywords-column'] }>
      <span className={ styles['keywords-column-contains'] }>
        Сообщение содержит
      </span>
      {
        firstKeywords.length ? `${firstKeywords.join(', ')} и еще ${keywordsCount} ${declaration}` : '0 слов'
      }
    </div>
  );
}
