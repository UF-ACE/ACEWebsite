


export default function Announcement() {
    return (
        <div className="card w-full py-0.05 my-2; shadow-md">
        <div className="card-body">
            <button className="btn btn-xs hover:text-error absolute right-2 top-2">delete</button>
            <h2 className="card-title">Announcement Title!</h2>
            <p>Description of Announcement will be here</p>
            <div className="card-actions justify-end">
            </div>
        </div>
        </div>
    );
}