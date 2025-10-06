import { createClient } from "contentful";

const client = createClient({
  space: "4nnvuqcer8v1",
  accessToken: import.meta.env.VITE_API_KEY,
});
const getProjects = async () => {
  try {
    const { items } = await client.getEntries({ content_type: "portofolio" });
    const formattedProjects = items.map((item) => {
      const id = item.sys.id;
      const { github, img, text, title, url } = item.fields;
      return { id, github, img, text, title, url };
    });
    return formattedProjects;
  } catch (error) {
    console.log(error);
  }
};
const projects = await getProjects();
export default projects;