import React from "react";
import client from "../Contentful";
import Col from "../components/grid/Col";
import Row from "../components/grid/Row";
import Card from "../components/Card/Card";
import Nav from "../components/Nav/Nav";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const Home = (props) => {
  const [posts, setPosts] = React.useState(null);

  React.useEffect(() => {
    client
      .getEntries({
        content_type: "post",
        "fields.category": props.slug,
      })
      .then((entries) => {
        setPosts(entries.items);
      });
  }, [props.slug]);

  if (!posts) {
    return (
      <div>
        <h1>Recept</h1>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Recept</h1>
      <Nav />
      <Row align={"space-between"}>
        {posts &&
          posts.map((post, i) => {
            return (
              <Col key={i} size={30}>
                <Card
                  link={`/posts/${post.fields.slug}`}
                  title={post.fields.title}
                  image={post.fields.image.fields.file.url}
                  alt="post image"
                  excerpt={documentToReactComponents(post.fields.excerpt)}
                />
              </Col>
            );
          })}
      </Row>
    </div>
  );
};

export default Home;
