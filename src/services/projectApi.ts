export const projectApi = {
  getProjectViews: async (
    projectId: number,
    fallback: number
  ): Promise<number> => {
    // METHOD 2: localStorage Persistence
    const views = localStorage.getItem(`project_views_${projectId}`);
    return views ? parseInt(views, 10) : fallback;
  },
  trackProjectView: async (
    projectId: number,
    fallback: number
  ): Promise<number> => {
    const currentViews = await projectApi.getProjectViews(projectId, fallback);
    // METHOD 1: Local state demo via random views increment on load
    const randomIncrement = Math.floor(Math.random() * 5) + 1;
    const newViews = currentViews + randomIncrement;
    localStorage.setItem(`project_views_${projectId}`, newViews.toString());
    return newViews;
  },
  getProjectLikes: async (
    projectId: number,
    fallback: number
  ): Promise<number> => {
    const likes = localStorage.getItem(`project_likes_${projectId}`);
    return likes ? parseInt(likes, 10) : fallback;
  },
  updateProjectLikes: async (
    projectId: number,
    newLikes: number
  ): Promise<number> => {
    localStorage.setItem(`project_likes_${projectId}`, newLikes.toString());
    return newLikes;
  },
  hasUserLiked: (projectId: number): boolean => {
    // METHOD 2: Prevent the same user from liking multiple times
    return localStorage.getItem(`has_liked_${projectId}`) === "true";
  },
  setUserLiked: (projectId: number, liked: boolean): void => {
    localStorage.setItem(`has_liked_${projectId}`, liked.toString());
  },
};
