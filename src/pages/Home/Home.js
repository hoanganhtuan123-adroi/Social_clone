import React from "react";
import ProfileLeft from "../../components/ProfileLeft/ProfileLeft";
import UserList from "../../components/UserList/UserList";
import "./Home.css";
function Home() {
    return (
        <div className="home space-x-2 py-2">
            <ProfileLeft />
            <div className="text-[40px] text-red-700">Content</div>
            <UserList/>
        </div>
    );
}

export default Home;
