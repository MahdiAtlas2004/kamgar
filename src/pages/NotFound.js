import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>متاسفیم</h2>
            <p>صفحه مورد نظر یافت نشد</p>
            <Link to="/">بازگشت به صفحه اصلی</Link>
        </div>
     );
}
 
export default NotFound;