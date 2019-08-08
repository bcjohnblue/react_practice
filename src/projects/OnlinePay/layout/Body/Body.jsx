import React from 'react';
import styles from './Body.module.sass';
import BodyTitle from '../../components/BodyTitle/BodyTitle';
import BodyMain from '../../components/BodyMain/BodyMain';

const Body = props => {
  const { activeStep, dispatchActiveStep } = props;

  return (
    <div className={styles.body}>
      <BodyTitle activeStep={activeStep} />
      <BodyMain
        activeStep={activeStep}
        dispatchActiveStep={dispatchActiveStep}
      />
    </div>
  );
};

export default Body;