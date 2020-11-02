import React, { useState, useRef } from 'react';
import classnames from 'classnames';

import isFunction from 'lodash/isFunction';
import { WithContext as ReactTags } from 'react-tag-input';

import Tag from '@/components/common/Tag';

import styles from './TagInput.module.scss';

const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

export default function TagInput({ label, placeholder = 'Добавить тэг', name, className, ...rest }) {
  const [tags, setTags] = useState([]);

  const componentClasses = classnames(styles['tag-input'], className);

    //   handleDelete(i) {
    //     const { tags } = this.state;
    //     this.setState({
    //      tags: tags.filter((tag, index) => index !== i),
    //     });
    // }

  const handleAddition = tag => {
    setTags([
      ...tags,
      tag
    ]);
  };

  return (
    <label className={ componentClasses }>
      {
        label && <div className={ styles.caption }>{ label }</div>
      }
      
      <ReactTags
        classNames={{
          tagInputField: 'form-control'
        }}
        placeholder={ placeholder }
        name={ name }
        tags={[]}
        // handleDelete={this.handleDelete}
        handleAddition={handleAddition}
        // handleDrag={this.handleDrag}
        delimiters={delimiters}

        { ...rest }
      />

      <div className={ styles.tags }>
        {
          tags.map(tag => (
            <Tag
              id={ tag.id }
              text={ tag.text }
              key={ tag.id }
            />
          ))
        }
      </div>
    </label>
  );
}
