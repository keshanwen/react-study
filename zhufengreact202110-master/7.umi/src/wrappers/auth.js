
import { Redirect } from 'umi';
function auth(props) {
    const isLogin = localStorage.getItem('isLogin');
    if (isLogin) {
        return props.children;
    } else {
        return <Redirect to={{ pathname: '/login', state: { from: '/profile' } }} />
    }
}
export default auth;