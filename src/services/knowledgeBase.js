import axiosInstance from "@/utils/axiosInstance";

export async function getSlugsKnowledgeBase() {
  try {
    const res = await axiosInstance.get(`/knowledge-bases/slugs`);
    return res.data;
  } catch (err) {
    console.error("Error fetching slug:", err);
    return null;
  }
}

export async function getKnowledgeBaseBySlug(slug) {
  try {
    const res = await axiosInstance.get(`/knowledge-bases/${slug}`);
    return res.data;
  } catch (err) {
    console.error("Error fetching knowledge base:", err);
    return null;
  }
}

export async function getKnowledgeBases(params) {
  const {
    page = 1,
    pageSize = 3,
    sort = "latest",
    search = "",
    category,
  } = params;

  try {
    const res = await axiosInstance.get(`/knowledge-bases`, {
      params: {
        page,
        pageSize,
        sort,
        search,
        category,
      },
    });
    return res.data;
  } catch (err) {
    console.error("Error fetching knowledge bases:", err);
    return null;
  }
}

export async function getKBCategories() {
  try {
    const res = await axiosInstance.get("/categories");
    console.log(res);
    return res.data.data;
  } catch (err) {
    console.error("Error fetching categories:", err);
    return null;
  }
}
