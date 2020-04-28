import React from "react";
import client from "../Contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Row from "../components/grid/Row";
import Col from "../components/grid/Col";
import styled from "styled-components";

const SinglePostStyled = styled.div`
  text-align: left;

  .post-wrapper {
    width: 80%;
    margin: 0 auto;
    background-color: white;
    padding-bottom: 100px;
    box-shadow: 0px 8px 14px -7px #c7c7c7;
    position: relative;
    font-size: 18px;
    line-height: 28px;

    a {
      position: absolute;
      top: 10px;
      left: 10px;

      img {
        margin: 0;
        width: 60px;
      }
    }

    h1 {
      text-align: center;
      margin-top: 80px;
    }

    .image-wrapper {
      width: 50%;
      height: 600px;
      overflow: hidden;
      margin: 50px 0 20px;

      img {
        width: 100%;
      }
    }
  }
`;

const SinglePost = (props) => {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    client
      .getEntries({
        content_type: "post",
        "fields.slug": props.slug,
      })
      .then((entries) => {
        setPost(entries.items[0]);
      });
  }, [props.slug]);

  if (!post) {
    return (
      <SinglePostStyled>
        <p>Loading...</p>
      </SinglePostStyled>
    );
  }

  return (
    <SinglePostStyled>
      <Row className="post-wrapper">
        <a href="/">
          <img
            src="https://img.icons8.com/ios/96/000000/left.png"
            alt="go back arrow"
          />
        </a>
        <h1>{post && post.fields.title}</h1>
        <Col>
          <div className="image-wrapper">
            <img
              src={post && post.fields.image.fields.file.url}
              alt="post thumbnail"
            />
          </div>
        </Col>
        <Col size={50}>
          <div>{post && documentToReactComponents(post.fields.text)}</div>
        </Col>
      </Row>
    </SinglePostStyled>
  );
};

export default SinglePost;
