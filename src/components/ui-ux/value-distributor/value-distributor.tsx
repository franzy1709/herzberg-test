import React, { useCallback, useState } from 'react';
import './value-distributor.css';
import { jc, jcm } from '../../../utils';

export type ValueDistributorProps = {}  & React.HTMLAttributes<HTMLElement>;

export const ValueDistributor: React.FC<ValueDistributorProps> = ({className, ...htmlProps})=>{
  const [thumbPosition, setThumbPosition] = useState(0);
  const [dragStarted, setDragStarted] = useState(false);

  const touchMoveCb = useCallback((evt: React.TouchEvent<HTMLDivElement>)=>{
    // const target = evt.nativeEvent.target as HTMLElement;
    // evt.nativeEvent.
    // const {parentElement} = target;

    // const tClientRect = target.getBoundingClientRect();
    // const pClientRect = parentElement?.getBoundingClientRect();
    // const distanceLeft = tClientRect.left-(pClientRect?.left ?? 0);
    // if(distanceLeft>0){
    //   target.style.setProperty('--touch-position', `${distanceLeft}px`)
    // }
  },[]);

  return (<div className={className} {...htmlProps}>
    <div className='tracker'>
      <div className="track">
        <div className='track-point' onClick={()=>setThumbPosition(0)}><div className="track-point--lable track-point--lable__left">5</div></div>
        <div className='track-point' onClick={()=>setThumbPosition(1)}><div className="track-point--lable track-point--lable__left">4</div></div>
        <div className='track-point' onClick={()=>setThumbPosition(2)}><div className="track-point--lable track-point--lable__left">3</div></div>
        <div className='track-point' onClick={()=>setThumbPosition(3)}><div className="track-point--lable track-point--lable__left">2</div></div>
        <div className='track-point' onClick={()=>setThumbPosition(4)}><div className="track-point--lable track-point--lable__left">1</div></div>
        <div className='track-point' onClick={()=>setThumbPosition(1)}><div className="track-point--lable track-point--lable__right">1</div></div>
        <div className='track-point' onClick={()=>setThumbPosition(2)}><div className="track-point--lable track-point--lable__right">2</div></div>
        <div className='track-point' onClick={()=>setThumbPosition(3)}><div className="track-point--lable track-point--lable__right">3</div></div>
        <div className='track-point' onClick={()=>setThumbPosition(4)}><div className="track-point--lable track-point--lable__right">4</div></div>
        <div className='track-point' onClick={()=>setThumbPosition(5)}><div className="track-point--lable track-point--lable__right">5</div></div>
      </div>
      <div className={jcm({
        'tracker-thumb': true,
        'tracker-thumb__left-side': thumbPosition === 0,
        'tracker-thumb__right-side': thumbPosition === 5,
      })} style={{
        '--thumb-position': thumbPosition
      }as React.CSSProperties} 
        onTouchStart={()=>setDragStarted(true)}
        onTouchEnd={()=>{setDragStarted(false)}}
        onTouchCancel={()=>setDragStarted(false)}
        onTouchMove={touchMoveCb}
      />
    </div>
  </div>)
}

