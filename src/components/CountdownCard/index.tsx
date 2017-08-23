import * as React from 'react';
import './style.css';

export interface countdownCardProps { targetDate: Date }

const getDaysUntilTarget = (target: Date): number =>
    Math.ceil(new Date(target.getTime() - new Date().getTime()).getTime() / 1000 / 60 / 60 / 24);

const formatDate = (target: Date): string =>
    `${target.getMonth() + 1}/${target.getDate()}/${target.getFullYear()}`;

const CenteringContainer = ({ targetDate }: countdownCardProps) =>
<div className="countdownCard">
    {getDaysUntilTarget(targetDate)} days until next session, @ {formatDate(targetDate)}
</div>;

export default CenteringContainer;