import AppLayout from "../components/AppLayout";
import ProfileHead from "../components/Profile/ProfileHead";
import ProfilePageWrapper from "../components/Profile/ProfilePageWrapper";

const profile = () => {
    return (
        <>
            <AppLayout />
            <ProfileHead />
            <ProfilePageWrapper />
        </>
    );
};

export default  profile;