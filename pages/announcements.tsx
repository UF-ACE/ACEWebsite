import CreateAnnouncementModal from './components/create_announcement_modal';
import Link from 'next/link'
import { useSearchParams} from 'next/navigation'
import Announcement from './components/announcement';

export default function Announcements() {
   const searchParams = useSearchParams();  
   const addModal = searchParams.get('modal');
    return (
        <>   
        <div className="flex min-h-screen flex-col items-center justify-center">
            <Link
                href="/announcements?modal=true"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded absolute right-2 top-2">
                add announcement
            </Link>
            <div className="w-3/5 my-2">
                <Announcement/>
                <Announcement/>
                <Announcement/>
                <Announcement/>
            </div>                    
            {addModal && <CreateAnnouncementModal />}
        </div>
    </>
    );
}