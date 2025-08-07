// import { create } from 'zustand';
// import { persist } from 'zustand/middleware';

// const useAuthStore = create(
//   persist(
//     (set) => ({
//       token: null,
//       user: null,
//       setAuth: ({ token, user }) => set({ token, user }),
//       clearAuth: () => set({ token: null, user: null }),
//     }),
//     {
//       name: 'auth-storage', 
//     }
//   )
// );

// export default useAuthStore;



// store/authStore.js
import { getProfile } from '@/api/user';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useAuthStore = create(
  persist(
    (set) => ({
      token: null,
      user: null,
      loading: false,

      // Set token + user
      setAuth: ({ token, user }) => set({ token, user }),

      // Clear auth state
      clearAuth: () => set({ token: null, user: null }),

      // Fetch profile
      fetchUser: async () => {
        set({ loading: true });
        try {
          const res = await getProfile();
          set({ user: res.user });
        } catch (error) {
          console.error('Failed to fetch user:', error);
        } finally {
          set({ loading: false });
        }
      },
    }),
    {
      name: 'auth-storage', // localStorage key
    }
  )
);

export default useAuthStore;
