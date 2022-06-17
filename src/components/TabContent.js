import React, { useState } from 'react';
// import styles from "./pages/pages.css";
import Modal from "./Modal.js";

const TabContent = ({id, activeTab, arr}) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        activeTab === id ? <div className='gal-body'>
            <div className='gal-content-wrapper'>
                    { arr.map((i) => (
                        <div key={i.id}>
                            <img src={ i.image } alt="some value" type="image/png" className='gal-content'
                            onClick={() => setIsOpen(true)} />
                            {isOpen && <Modal setIsOpen={setIsOpen} label={i.label} key={i.id} />}
                        </div>
                    ))}
            </div>
        </div>
     : null
    );
}
export default TabContent;