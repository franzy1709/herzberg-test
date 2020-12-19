import React from 'react';
import { jc } from '../../../utils';
import { ValueDistributor } from '../../ui-ux/value-distributor';
import './herzberg.css';

export type HerzbergProps = {
  testQuestions: [React.ReactNode, React.ReactNode][]
}  & React.HTMLAttributes<HTMLElement>;

export const Herzberg: React.FC<HerzbergProps> = ({testQuestions, className = '', ...htmlProps}) => {
  const [leftSide, rightSide] = testQuestions[0];
  return (<div className={jc('Herzberg herzberg-container', className)} {...htmlProps}>
    <div className="questions-container">
      <div className="question first-question">{leftSide}</div>
      <div className="question second-question">{rightSide}</div>
    </div>
    <div className="values-container">
      <div className="value-view first-question-value">2</div>
      <div className="value-view second-question-value">3</div>
    </div>
    <div className="values-distribution">
      <ValueDistributor />
    </div>
  </div>)
}