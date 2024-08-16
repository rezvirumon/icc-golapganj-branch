import ConnectionRequestTable from "../Packages/ConnectionRequestTable";
import AddAnnouncement from "./AddAnnouncement";
import AllUsers from "./AllUsers";
import AnnouncementEditor from "./AnnouncementEditor";
import DashComponents from "./DashComponents";

;

const Dashboard = () => {
    return (
        <div className="container mx-auto p-4">
            <DashComponents></DashComponents>
            <AllUsers></AllUsers>
            <ConnectionRequestTable></ConnectionRequestTable>
            <div className="lg:flex p-10 bg-white shadow-xl rounded-lg">
            <AddAnnouncement></AddAnnouncement>
            <AnnouncementEditor></AnnouncementEditor>
            </div>
        </div>
    );
};

export default Dashboard;