import ProfileHeader from '../components/profile/ProfileHeader'
import ProfileTweets from '../components/profile/ProfileTweets'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widgets'

const style = {
    wrapper: `flex max-h-max justify-center select-none bg-[#15202b] text-white`,
    content: 'max-w-max max-h-max  flex justify-between ml-32 sm: ml-4 max-h-max',
    mainContent: `flex-[2] border-r border-l border-[#38444d] overflow-auto`,
}

const profile = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.content}>
                <Sidebar/>
                <div className={style.mainContent}>
                    <ProfileHeader />
                    <ProfileTweets />
                </div>
                <Widgets />
            </div>
        </div>
    )
}

export default profile