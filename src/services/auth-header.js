
export default function authHeader() {
    try {
        let user = JSON.parse(localStorage.getItem('user'));

        if (user && user.accessToken) {
            return 'Bearer ' + user.accessToken; // for Spring Boot back-end
        } else {
            return '';
        }
    }catch (e) {
        return ''
    }
}