import React, {useContext} from "react";

import {Link} from "react-router-dom";

import {AdminContext} from "../../../contexts/AdminContext";
import {AdminTeamContext} from "../../../contexts/AdminTeamContext"
import {AdminSettingContext} from "../../../contexts/AdminSetting";

const AdminDashBoard = props => {
    // contexts
    const adminUser = useContext(AdminContext)

    return (
    <h1>Hello {adminUser.display_name}!</h1>
    )
}

export default AdminDashBoard;