import UserAvatar from "../features/authentication/UserAvatar";
import useUser from "../features/authentication/useUser";
import HeaderMenu from "./HeaderMenu";

function Header() {
  const { isPending } = useUser();
  return (
    <div className="border border-secondary-200 bg-secondary-0 px-8 py-4">
      <div
        className={`container flex items-center justify-end gap-x-8 xl:max-w-screen-lg ${isPending ? "opacity-50 blur-sm" : ""}`}
      >
        <UserAvatar />
        <HeaderMenu />
      </div>
    </div>
  );
}

export default Header;
