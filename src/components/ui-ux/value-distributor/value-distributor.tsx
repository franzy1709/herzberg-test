import React, { useCallback, useState } from 'react';
import './value-distributor.css';
import { jcm } from '../../../utils';

export type ValueDistributorProps = {
  variant?: 'large' | 'small',
  onUserChoice?: (position: number)=>void
}  & React.HTMLAttributes<HTMLElement>;

export const ValueDistributor: React.FC<ValueDistributorProps> = ({
  variant='large', 
  onUserChoice,
  className='', ...htmlProps})=>{
  const [userChoice, setUserChoice] = useState<number | null>(null);

  const thumbPosition = userChoice==null ? 2 : userChoice;

  const trackPointClickCb = useCallback((value: number)=>{
    setUserChoice(value);
    onUserChoice?.(value);
  }, []);

  const isInitState = userChoice === null;

  return (<div className={jcm({
        'ValueDistributor': true, 
        'ValueDistributor--small': variant==='small',
        'ValueDistributor--init-state': isInitState,
        [className]: true,
      })} {...htmlProps}>
    <div className='tracker'>
      <div className="track">
        <div className='track-point' onClick={()=>trackPointClickCb(0)}><div className="track-point--lable track-point--lable__left">5</div></div>
        <div className='track-point' onClick={()=>trackPointClickCb(1)}><div className="track-point--lable track-point--lable__left">4</div></div>
        <div className='track-point' onClick={()=>trackPointClickCb(2)}><div className="track-point--lable track-point--lable__left">3</div></div>
        <div className='track-point' onClick={()=>trackPointClickCb(3)}><div className="track-point--lable track-point--lable__left">2</div></div>
        <div className='track-point' onClick={()=>trackPointClickCb(4)}><div className="track-point--lable track-point--lable__left">1</div></div>
        <div className='track-point' onClick={()=>trackPointClickCb(1)}><div className="track-point--lable track-point--lable__right">1</div></div>
        <div className='track-point' onClick={()=>trackPointClickCb(2)}><div className="track-point--lable track-point--lable__right">2</div></div>
        <div className='track-point' onClick={()=>trackPointClickCb(3)}><div className="track-point--lable track-point--lable__right">3</div></div>
        <div className='track-point' onClick={()=>trackPointClickCb(4)}><div className="track-point--lable track-point--lable__right">4</div></div>
        <div className='track-point' onClick={()=>trackPointClickCb(5)}><div className="track-point--lable track-point--lable__right">5</div></div>
      </div>
      <div className={jcm({
          'tracker-thumb': true,
          'tracker-thumb__left-side': thumbPosition === 0,
          'tracker-thumb__right-side': thumbPosition === 5,
        })} 
        style={{
          '--thumb-position': thumbPosition
        }as React.CSSProperties}
        onClick={()=>{
          if(isInitState){
            trackPointClickCb(thumbPosition);
          }
        }}
      />
    </div>
  </div>)
}

