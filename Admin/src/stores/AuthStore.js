import { create } from "zustand";
import { persist } from "zustand/middleware";

const defaultAdmins = [
  {
    id: 1,
    name: "Super Admin",
    email: "admin@hahu.com",
    password: "hahu@123",
    role: "superAdmin",
  },
];

const useAuthStore = create(
  persist(
    (set, get) => ({
      // Current logged-in admin
      admin: null,

      // Mock database
      admins: defaultAdmins,

      // Login
      login: ({ email, password, role }) => {
        const { admins } = get();

        const foundAdmin = admins.find(
          (admin) =>
            admin.email === email &&
            admin.password === password &&
            admin.role === role,
        );

        if (!foundAdmin) {
          return {
            success: false,
            error: "Invalid email or password.",
          };
        }

        set({
          admin: foundAdmin,
        });

        return {
          success: true,
        };
      },
      logout: () => {
        set({
          admin: null,
        });
      },
      isAuthenticated: () => {
        return get().admin !== null;
      },
    }),
    {
      name: "hahu-auth",
    },
  ),
);

export default useAuthStore;
