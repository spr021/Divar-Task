import React from 'react';
import Divider from './Divider';
import FeatureRow from './FeatureRow'
import ScoreRow from './ScoreRow';
import TitleRow from './TitleRow';
import UnexpandableRow from './UnexpandableRow';

export const Widgets = (props) => {
    switch (props.type) {
        case 'FEATURE_ROW':
            return <FeatureRow {...props.data} />
        case 'SCORE_ROW':
            return <ScoreRow {...props.data} />;
        case 'TITLE_ROW':
         return <TitleRow {...props.data}/>;
        case 'SECTION_DIVIDER_ROW':
         return <Divider />;
        case 'UNEXPANDABLE_ROW':
         return <UnexpandableRow {...props.data} />;
        default:
            return null;
    };
};