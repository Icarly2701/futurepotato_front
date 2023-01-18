import AppLayout from "../components/AppLayout";
import StoryForm from "../components/Story/StoryForm";
import MainPosts from "../components/Mainpost/MainPosts";
import Recommend from "../components/MainSide/Recommend";

const index = () => {
    return(
        <>
        <AppLayout/>
        <section className="main">
            <div className="wrapper">
                <div className="left-col">
                    <StoryForm />
                    <MainPosts />
                </div>
                <div className="right-col">
                    <Recommend />
                </div>
            </div>
        </section>
        </>
    );
};

export default index;