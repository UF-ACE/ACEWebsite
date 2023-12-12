import CreateAnnouncementModal from './components/create_announcement_modal';
import Link from 'next/link'
import { useSearchParams} from 'next/navigation'
import Announcement from './components/announcement';

export default function Announcements() {
   const searchParams = useSearchParams();  
   const showModal = searchParams.get('modal');
    return (
        <>   
        <div className="flex min-h-screen flex-col items-center justify-center">
            <div className="w-3/5 my-2">
                <Announcement/>
            </div>                    
            <Link
                href="/announcements?modal=true"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                add announcement
            </Link>

            {showModal && <CreateAnnouncementModal />}
        </div>
    </>
    );
}