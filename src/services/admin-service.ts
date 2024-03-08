
const baseUrl = process.env.NEXTJS_SERVER_URL || "http://localhost:4000";

class AdminService {
    static async getRegisteredUsers() {
        const response = await fetch(`${baseUrl}/api/admin/users`);
        console.log("response", response);
        return response.json()
    }
}
export default AdminService;