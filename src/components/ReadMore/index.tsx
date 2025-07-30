"use client";

import { useState, useMemo } from 'react';
import classNames from 'classnames';

interface IProps {
  className:string;
  maxLength:number; 
  lineLength:number; 
  copy:Array<string>;
};

function ReadMore(props:IProps) {

  const { className, maxLength, lineLength, copy } = props;

  const [showFullText, setShowFullText] = useState( false );
  const [firstParagraphShort, setFirstParagraphShort] = useState( false );

  const trimParagraphDownToSpace = (str:string)=>{
    // Loop while the string is not empty and the last character is a space
    if ( str.slice(-1) == ' ' ) {
      return str;
    } else {
      while (str.length > 0 && str.slice(-1) !== ' ') {
        // Remove the last character using slice(0, -1)
        str = str.slice(0, -1);
      }
      return str; 
    }
  };

  const copyLength = useMemo(()=>{
    return copy.toString().length;
  },[copy]);

  const fullContent = useMemo(()=>{
    return copy.map((text)=>(<p key={text.substring(0, 10)}>{text}</p>));
  },[copy]);

  const limitedContent = useMemo(()=>{
    let lastParagraph:string = "";
    const firstParagraph:string = copy[0];
    const secondParagraphMaxLength:number = maxLength - lineLength - firstParagraph.length;
    setFirstParagraphShort(copy.length > 1 && ( copy[0].length < maxLength ));

    if ( firstParagraphShort ) {
      lastParagraph = copy[1].toString().substring(0, secondParagraphMaxLength);
      return (<>
        <p>{firstParagraph}</p>
        <p>{trimParagraphDownToSpace(lastParagraph)}&#8230;</p>
      </>)
    } else {
      lastParagraph = firstParagraph.substring(0, maxLength);
      return (<p>{trimParagraphDownToSpace(lastParagraph)}&#8230;</p>);
    }    
  },[copy,firstParagraphShort,lineLength,maxLength]);

  return (<div className={classNames(className, 'readmore')}>
      <div className={classNames('readmore-all', {'visually-hidden' : !showFullText})}>
        { fullContent }
      </div>
      <div className={classNames('readmore-less', {'visually-hidden' : showFullText})} aria-hidden="true">
        { limitedContent }
      </div>
      {copyLength >= maxLength && (
        <button 
          aria-hidden="true" 
          className="readmore-btn btn btn-link px-0 text-decoration-none" 
          onClick={() => setShowFullText(!showFullText)}
        >
          {showFullText ? 'Read less -' : 'Read more +'}
        </button>
      )}
    </div>);
}

export default ReadMore;
