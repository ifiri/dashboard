import React, { useState, useRef } from 'react';
import classnames from 'classnames';

import Button from 'react-bootstrap/Button';

import isFunction from 'lodash/isFunction';
import { WithContext as ReactTags } from 'react-tag-input';

import Icon from '@/components/common/Icon';

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
      <div className={ styles.caption }>{ label }</div>
      <ReactTags
        classNames={{
          tagInputField: "form-control"
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
          tags.map(tag => {
            return <div className={ styles.tag } key={ tag.id }>
              { tag.text }

              <Button className={ styles['tag-close'] } variant="link">
                <Icon name="close" width={ 10 } />
              </Button>
            </div>;
          })
        }
      </div>
    </label>
  );
}
