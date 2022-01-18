import React from 'react';
import LeftPanel from './LeftPanel.jsx';

export default function Base(props) {
  return (
    <>
      <section className="secondflex">
        <LeftPanel />
        {props.add}
      </section>
    </>
  )
}
