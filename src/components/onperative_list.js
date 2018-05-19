import React from "react";
import auth from "../hoc/auth";


 const Oplist =  props => (
    <div>
        <h1 className="center">This is the Secret Operative List</h1>
        <ul>
            <li>Jim</li>
            <li>Pam</li>
            <li>Lucus</li>
            <li>Johnny</li>
        </ul>

    </div>
);

export default auth(Oplist);