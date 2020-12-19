import React from 'react';
import { jc } from '../../../utils';
import { ValueDistributor } from '../../ui-ux/value-distributor';
import './herzberg-ribbon.css';

export type HerzbergRibbonProps = {
  testQuestions: HerzberTestRecord[];
  onTestCompletion?: (answers: HerzbergAnswer[])=>void;
}  & React.HTMLAttributes<HTMLElement>;

export type HerzbergAnswer = {
  leftKey: string;
  leftChoice: number;
  rightKey: string;
  rightChoice: number;
}

type HerzbergRibbonState = {
  isComplete: boolean;
  answersAccumulator: Map<number, HerzbergAnswer>
}

export type HerzberTestRecord = {
  first: {key: string, question: string}
  second: {key: string, question: string}
}

export class HerzbergRibbon extends React.Component<HerzbergRibbonProps, HerzbergRibbonState>{
  constructor(props: HerzbergRibbonProps){
    super(props);
    this.state = {
      isComplete: false,
      answersAccumulator: new Map<number, HerzbergAnswer>()
    }
  }

  onUserChoiceCb(questionIdx: number, leftKey: string, rightKey: string, userChoice: number){
    this.state.answersAccumulator.set(questionIdx, {
      leftKey, leftChoice: 5-userChoice,
      rightKey, rightChoice: userChoice
    });

    if(this.state.answersAccumulator.size>=this.props.testQuestions.length){
      this.setState({isComplete: true});
      const answers = Array.from(this.state.answersAccumulator.entries())
        .sort(([idxA], [idxB]) => idxA - idxB)
        .map(([,answer])=>answer);
      this.props.onTestCompletion?.(answers);
    }
  }

  render(){
    const {testQuestions, className = '', ...htmlProps} = this.props;
    
    return (<div className='HerzbergRibbon'>
      {testQuestions.map(({first, second}, idx)=>{
        const {question: leftSide, key: leftKey} = first;
        const {question: rightSide, key: rightKey} = second;
        return(
          <div key={`question-${idx}`} className={jc('herzberg-container', className)} {...htmlProps}>
            <div className="questions-container">
              <div className="question first-question">{leftSide}</div>
              <div className="question second-question">{rightSide}</div>
            </div>
            <div className="values-distribution">
              <ValueDistributor variant='small' onUserChoice={(userChoice)=>this.onUserChoiceCb(idx,leftKey,rightKey,userChoice)} />
            </div>
          </div>
        )
      })}
    </div>)
  }
}