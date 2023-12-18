// TipsForLocals.js
import React from 'react';
import { Link } from 'react-router-dom';

function TipsForLocals() {
    return (
        <div>
        <h2>Tips for Locals 컴포넌트</h2>
        <ul>
            <li>
            <Link to="/tips-for-locals/korea">한국 팁</Link>
            </li>
            <li>
            <Link to="/tips-for-locals/vietnam">베트남 팁</Link>
            </li>
        </ul>
        </div>
    );
}

export default TipsForLocals;
