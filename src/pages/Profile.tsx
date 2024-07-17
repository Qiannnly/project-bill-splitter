import { useEffect, useState } from "react";
import { useUserContext } from "../context/UserContext";
import Layout from "../layout/Layout";
import Header from "../components/header/Header";
import ProfileCard from "../components/profile/ProfileCard";
import ProfileInput from "../components/profile/ProfileInput";
import { Button } from "../components/ui/button";
import { CircleUserIcon, Lock, Mail } from "lucide-react";

type UserProfile = {
  userName: string | null;
  email: string | null;
};
const Profile = () => {
  const { user, logOut } = useUserContext();

  const [userData, setUserData] = useState<UserProfile>({
    userName: "",
    email: "",
  });

  useEffect(() => {
    if (user !== null) {
      const displayName = user.displayName;
      const email = user.email;

      setUserData({ userName: displayName, email: email });
    }
  }, [user]);

  const handleDelete = () => {
    if (user) {
      return logOut();
    }
  };

  return (
    <>
      <Layout>
        <div className="mt-36">
          <Header header="User Profile" />
        </div>

        <ProfileCard title="My Profile">
          <ProfileInput Icon={CircleUserIcon} value={userData.userName} />
          <ProfileInput Icon={Mail} value={userData.email} />
          <ProfileInput Icon={Lock} value={"********"} />
          <div className="text-center mt-10">
            <Button variant="link" onClick={handleDelete}>
              Delete account
            </Button>
          </div>
        </ProfileCard>
      </Layout>
    </>
  );
};

export default Profile;
