import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fs from "fs-extra";
import Markdown from "react-markdown";

function BlogPage() {
  const [blogPost, setBlogPost] = useState("");
  const { slug } = useParams();

  useEffect(() => {
    async function getBlogPost() {
      try {
        const content = await fs.readFile(`./blog/${slug}.md`, "utf8");
        setBlogPost(content);
      } catch (error) {
        console.error(error);
      }
    }

    getBlogPost();
  }, [slug]);

  return (
    <div>
      <h1>My Blog Post</h1>
      <Markdown>{blogPost}</Markdown>
    </div>
  );
}

export default BlogPage;

