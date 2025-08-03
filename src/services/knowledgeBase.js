import axiosInstance from "@/utils/axiosInstance"

export async function getSlugsKnowledgeBase() {
  try {
    const res = await axiosInstance.get(`/knowledge-bases/slugs`)
    return res.data
  } catch (err) {
    console.error('Error fetching slug:', err)
    return null
  }
}

export async function getKnowledgeBaseBySlug(slug) {
  try {
    const res = await axiosInstance.get(`/knowledge-bases/${slug}`)
    return res.data
  } catch (err) {
    console.error('Error fetching knowledge base:', err)
    return null
  }
}

export async function getKnowledgeBases() {
  try {
    const res = await axiosInstance.get('/knowledge-bases')
    return res.data
  } catch (err) {
    console.error('Error fetching knowledge bases:', err)
    return null
  }
}