import {
  HiCollection,
  HiHome,
  HiOutlineViewGrid,
  HiUsers,
} from "react-icons/hi";
import AppLayout from "../../ui/AppLayout";
import CustomNavlink from "../../ui/CustomNavlink";
import Sidebar from "../../ui/Sidebar";

function AdminLayout() {
  return (
    <AppLayout>
      <Sidebar>
        <CustomNavlink to="dashboard">
          <HiHome />
          <span>داشبورد</span>
        </CustomNavlink>
        <CustomNavlink to="users">
          <HiUsers />
          <span>کاربر ها</span>
        </CustomNavlink>
        <CustomNavlink to="proposals">
          <HiCollection />
          <span>درخواست ها</span>
        </CustomNavlink>
        <CustomNavlink to="projects">
          <HiOutlineViewGrid />
          <span>پروژه ها</span>
        </CustomNavlink>
      </Sidebar>
    </AppLayout>
  );
}

export default AdminLayout;
