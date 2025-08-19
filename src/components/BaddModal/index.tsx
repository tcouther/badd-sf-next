"use client";

import React, {FC, ReactNode} from 'react';

interface IProps {
  id?:string;
  cta?:string; 
  ctaClass?:string;
  headline?:string; 
  children?:ReactNode;
};

const BaddModal: FC<IProps> = ({id='def-modal', cta='def-cta', ctaClass='btn btn-primary', headline='def-headline', children})=>{
  return (
    <>
      <button type="button" className={ctaClass} data-bs-toggle="modal" data-bs-target={`#${id}`}>
        {cta}
      </button>
      <div className="modal fade" id={id} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby={`${id}-label`} aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id={`${id}-label`}>{headline}</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BaddModal;

