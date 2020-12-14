import React from 'react';
import './HerzbergWidget.css';
import { Herzberg } from '../../components/internal/herzberg/herzberg';

export function HerzbergWidget() {

  return (
    <div className="HerzbergWidget">
      <Herzberg 
        testQuestions={[
          ['Для тебя важна хорошо оплачиваемая работа, даже если ты не получаешь должного признания.',
          'Для тебя важно признание и похвала, даже если оплата не так высока.']
        ]}
      />
    </div>
  );
}
