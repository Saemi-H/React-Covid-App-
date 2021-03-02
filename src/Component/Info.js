import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faProcedures, faSadTear, faSmileBeam, faTired } from '@fortawesome/free-solid-svg-icons'
import './info.css';
import NumberFormat from 'react-number-format';

const Info = ({name,death, Critical, Confirmed, Recover, Upd, Chg}) => {
    return (
        <div>
            <h2>{name}</h2>
            <ul>
                <li>
                    <p className="left">
                        <FontAwesomeIcon icon={faSadTear} />
                        <span>Death</span>
                    </p>
                    <p className="right">
                        <NumberFormat className="numform" thousandSeparator=',' value={death}/>
                    </p>
                </li>
                <li>
                    <p className="left">
                        <FontAwesomeIcon icon={faProcedures} />
                        <span>Critical</span>
                    </p>
                    <p className="right">
                        <NumberFormat className="numform" thousandSeparator=',' value={Critical}/>
                    </p>
                </li>
                <li>
                    <p className="left">
                        <FontAwesomeIcon icon={faTired} />
                        <span>Confirmed</span>
                    </p>
                    <p className="right">
                        <NumberFormat className="numform" thousandSeparator=',' value={Confirmed}/>
                    </p>
                </li>
                <li>
                    <p className="left">
                        <FontAwesomeIcon icon={faSmileBeam} />
                        <span>Recovered</span>
                    </p>
                    <p className="right">
                        <NumberFormat className="numform" thousandSeparator=',' value={Recover}/>
                    </p>
                </li>
                <li>
                    <p className="left">
                        <span>Last-Updated</span>
                    </p>
                    <p className="right">
                        {Upd}
                    </p>
                </li>
                <li>
                    <p className="left">
                        <span>Last-Changed</span>
                    </p>
                    <p className="right">
                        {Chg}
                    </p>
                </li>
            </ul>
           
        </div>
    );
};


export default Info;
